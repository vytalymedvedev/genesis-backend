import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { DealService } from './deal.service';
import { DealController } from './deal.controller';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 1,
    }),
  ],
  providers: [DealService],
  controllers: [DealController],
})
export class DealModule {}
