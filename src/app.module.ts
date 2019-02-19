import { Module } from '@nestjs/common';
import { ItemsController } from './items/items.controller';
import { ShoppingCartController } from './shopping-cart/shopping-cart.controller';
import { ItemsService } from './items/items.service';
import { EntriesModule } from './entries/entries.module';
import { PayersModule } from './payer/payer.module';

// @Module({
//   imports: [],
//   controllers: [ItemsController, ShoppingCartController],
//   providers: [ItemsService],
// })

@Module({
  modules: [EntriesModule, PayersModule],
})

export class AppModule {}