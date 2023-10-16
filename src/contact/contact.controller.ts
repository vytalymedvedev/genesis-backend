import { Controller, Res, Body, Get, Post, HttpStatus } from '@nestjs/common';
import { CreateContactDTO } from './dto/create-contact.dto';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Post('/create')
  async addContact(@Res() res, @Body() createContactDTO: CreateContactDTO) {
    return res.status(HttpStatus.OK).json({
      name: createContactDTO.name,
      id: 'contact id',
    });
  }

  @Get('/all')
  async getAllContacts(@Res() res) {
    return res.status(HttpStatus.OK).json([
      {
        name: 'Contact',
        id: '978734434456',
      },
    ]);
  }
}
