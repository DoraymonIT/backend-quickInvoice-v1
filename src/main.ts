import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('NestJS x Prisma')
    .setDescription('REST API NestJS x Prisma')
    .setVersion('1.0')
    .addTag('Example')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('openapi', app, document);
  await app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://backend-six-lime.vercel.app',
      'https://planning-notes-100.vercel.app',

    ],
    methods: ['GET', 'POST','PUT','DELETE','PATCH'],
  });
 // await app.listen(3000);



    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
      next();
  });
//   app.enableCors({
//     origin: true,
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
//     credentials: true,
// });
  await app.listen(3000);
  // url       = env("POSTGRES_PRISMA_URL")
  // directUrl = env("POSTGRES_URL_NON_POOLING")


}
bootstrap();

