import { createConnection } from 'typeorm';

import { Entry } from '../entries/entry.entity';
import { Payer } from '../payer/payer.entity';

export const dbProvider =
  {
    provide: 'DbConnectionToken',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: '192.168.175.23',
      port: parseInt('5432', 10),
      username: 'postgres',
      password: 'Password@123$',
      database: 'srt_lenovo_latam',
      logging:true,
      logger:'file', 
      entities: [
        Entry, Payer
      ],
      synchronize: false, // DEV only, do not use on PROD!
    }),
  };