import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 1,
    }),
  ],
  providers: [CompanyService],
  controllers: [CompanyController],
})
export class CompanyModule {}
