import { Injectable } from '@nestjs/common';
import { PrismaClient, FactureInfo, Prisma } from '@prisma/client';
import { CreateFactureInfoDto } from './create-factureInfo.dto';
import { UpdateFactureInfoDto } from './updateFactureInfoDto.dto';

const prisma = new PrismaClient();

@Injectable()
export class FactureInfoService {
  public getFactureAllInfos(userId: string): Promise<FactureInfo[]> {
    return prisma.factureInfo.findMany({
      where: {
        userId: userId,
      },
      include: {
        user: true,
        FacDevBdl: true,
      },
    });
  }

  async createFactureInfo(createFactureInfoDto: CreateFactureInfoDto) {
    const { FacDevBdl, ...factureInfoData } = createFactureInfoDto;

    // Create the FactureInfo record first
    const factureInfo = await prisma.factureInfo.create({
      data: factureInfoData,
    });

    // Create related FacDevBdl records
    const facDevBdlRecords = FacDevBdl.map((product) => ({
      ...product,
      factureInfoId: factureInfo.id, // Set the foreign key
    }));

    await prisma.facDevBdl.createMany({
      data: facDevBdlRecords,
    });

    // Return the created FactureInfo along with its related FacDevBdl records
    const createdFactureInfo = await prisma.factureInfo.findUnique({
      where: { id: factureInfo.id },
      include: { FacDevBdl: true },
    });

    return {
      statusCode: 200,
      data: createdFactureInfo,
    };
  }
  findById(id: string, userId: string): Promise<FactureInfo> {
    return prisma.factureInfo.findFirst({
      where: {
        id: id,
        userId: userId,
        // ref: ref,
      },

      include: {
        FacDevBdl: true,
      },
    });
  }

  async updateFactureInfo(
    id: string,
    userId: string,
    updateFactureInfoDto: UpdateFactureInfoDto,
  ) {
    const { FacDevBdl, ...factureInfoData } = updateFactureInfoDto;

    // Step 1: Update FactureInfo fields
    const updatedFactureInfo = await prisma.factureInfo.update({
      where: { id },
      data: factureInfoData,
    });

    // Step 2: Delete all existing FacDevBdl records associated with the FactureInfo
    await prisma.facDevBdl.deleteMany({
      where: { factureInfoId: id },
    });

    // Step 3: Re-create FacDevBdl records
    for (const product of FacDevBdl) {
      await prisma.facDevBdl.create({
        data: {
          ref: product.ref,
          designation: product.designation,
          qtte: product.qtte,
          pu_ht: product.pu_ht,
          total_ht: parseFloat(product.total_ht as unknown as string),

          factureInfoId: id,
        },
      });
    }

    // Step 4: Return the updated FactureInfo with associated FacDevBdl records
    return prisma.factureInfo.findUnique({
      where: { id, userId: userId },
      include: { FacDevBdl: true },
    });
  }

  async deleteFactureInfo(id: string ,userId: string,) {
    // Step 1: Delete all FacDevBdl records associated with the FactureInfo
    await prisma.facDevBdl.deleteMany({
      where: { factureInfoId: id },
    });

    // Step 2: Delete the FactureInfo record itself
    await prisma.factureInfo.delete({
      where: { id, userId: userId },
    });

    return {
      statusCode: 200,
      message: `FactureInfo with ID ${id} and its associated FacDevBdl records have been deleted.`,
    };
  }
}
