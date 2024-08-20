import { Module } from '@nestjs/common';
import { ReactSsrController } from './react-ssr.controller';
import { ReactSsrService } from './react-ssr.service';

@Module({
  controllers: [ReactSsrController],
  providers: [ReactSsrService],
})
export class ReactSsrModule {}
