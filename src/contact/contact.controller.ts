import { Controller, Body, Post } from '@nestjs/common';
import { CreateContactDTO } from './dto/create-contact.dto';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Post('/create')
  async addContact(@Body() createContactDTO: CreateContactDTO) {
    return this.contactService.createContact(createContactDTO.name);
  }
}
