// cloudinary.provider.ts

import { v2 as cloudinary } from 'cloudinary';
import { Provider } from '@nestjs/common';

export const cloudinaryProvider: Provider = {
  provide: 'CLOUDINARY',
  useFactory: () => {
    return cloudinary.config({
      cloud_name: 'dm3fymrns',
      api_key: '686296152382839',
      api_secret: 'mdO9dofP2kvH1LsEWG-AjeBs78U',
      secure:true
    });
  },
};
