import { Connection } from 'typeorm';

import { Payer } from './payer.entity';

export const entryProviders = [{
    provide: 'PayerRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Payer),
    inject: ['DbConnectionToken'],
}];