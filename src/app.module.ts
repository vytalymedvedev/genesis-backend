import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';
import { CompanyModule } from './company/company.module';
import { DealModule } from './deal/deal.module';

@Module({
  imports: [ContactModule, CompanyModule, DealModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
