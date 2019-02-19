import { Module } from '@nestjs/common';

import { DBModule } from '../db/db.module';
import { PayersController } from './payer.controller';
import { PayersService } from './payer.service';
import { entryProviders } from './payer.providers';

@Module({
    modules: [DBModule],
    controllers: [PayersController],
    components: [
        ...entryProviders,
        PayersService,
    ],
    exports: [PayersService],
})

export class PayersModule { }