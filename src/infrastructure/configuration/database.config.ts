import { ConfigService } from '@nestjs/config';

export default {
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => ({
    uri: configService.get('DATABASE_URI'),
    name: configService.get('DATABASE_NAME'),
  }),
};
