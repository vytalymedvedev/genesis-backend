import { Controller, Body, Post } from '@nestjs/common';
import { CreateCompanyDTO } from './dto/create-company.dto';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Post('/create')
  async addContact(@Body() createCompanyDTO: CreateCompanyDTO) {
    return this.companyService.createCompany(createCompanyDTO.name);
  }
}
