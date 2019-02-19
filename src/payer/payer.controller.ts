import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import * as slug from 'slug';

import { CreateEntryDto } from './create-entry.dto';
import { PayersService } from './payer.service';
import { Payer } from './payer.interface';

@Controller('payer')
export class PayersController {

  constructor(private readonly payerService: PayersService) { }

  @Get()
  async findAll(): Promise<Payer[]> {
    return this.payerService.findAll();
  }

  @Post()
  async create( @Body() createEntryDto: CreateEntryDto) {
    const newEntry = Object.assign({}, createEntryDto, {
      code: slug(createEntryDto.code, { lower: true }),
      description:slug(createEntryDto.description, { upper: true }),
      is_active: createEntryDto.is_active,
    });
    await this.payerService.create(newEntry);
  }

//   @Delete(':entryId')
//   delete( @Param('entryId') entryId) {
//     return this.entriesService.deleteOne(entryId);
//   }
}