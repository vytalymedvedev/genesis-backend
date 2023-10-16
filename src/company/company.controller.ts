import { Controller, Res, Body, Get, Post, HttpStatus } from '@nestjs/common';
import { CreateCompanyDTO } from './dto/create-company.dto';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Post('/create')
  async addContact(@Res() res, @Body() createCompanyDTO: CreateCompanyDTO) {
    return res.status(HttpStatus.OK).json({
      name: createCompanyDTO.name,
      id: 'company id',
    });
  }

  @Get('/all')
  async getAllCompanies(@Res() res) {
    return res.status(HttpStatus.OK).json([
      {
        name: 'CompanyName',
        id: 'company id',
      },
    ]);
  }
}
