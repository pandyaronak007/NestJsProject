import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Payer } from './payer.interface';

@Component()
export class PayersService {
  constructor( @Inject('PayerRepositoryToken') private readonly payerRepository: Repository<Payer>) { }

  async findAll(): Promise<Payer[]> {
    try {
      return await this.payerRepository.find();
    } catch (err) {
      return err;
    }
  }

  async create(payer: Payer) {
    try {
      return await this.payerRepository.save(payer);
    } catch (err) {
      return err;
    }
  }

}