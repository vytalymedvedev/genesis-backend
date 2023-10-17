import { Controller, Post, Res, Body, HttpStatus } from '@nestjs/common';
import { CreateDealDTO } from './dto/create-deal.dto';
import { DealService } from './deal.service';

@Controller('deal')
export class DealController {
  constructor(private dealService: DealService) {}

  @Post('/create')
  async addDeal(@Res() res, @Body() createDealDTO: CreateDealDTO) {
    return res.status(HttpStatus.OK).json({
      name: createDealDTO.name,
      id: 'deal id',
    });
  }
}
