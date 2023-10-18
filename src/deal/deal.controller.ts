import { Controller, Post, Body } from '@nestjs/common';
import { CreateDealDTO } from './dto/create-deal.dto';
import { DealService } from './deal.service';

@Controller('deal')
export class DealController {
  constructor(private dealService: DealService) {}

  @Post('/create')
  async addDeal(@Body() createDealDTO: CreateDealDTO) {
    return this.dealService.createDeal(createDealDTO.name);
  }
}
