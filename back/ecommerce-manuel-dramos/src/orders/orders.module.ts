import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
// import { OrdersRepository } from './orders.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders } from '../entities/orders.entity';
import { Users } from '../entities/users.entity';
import { OrderDetails } from '../entities/orderdetails.entity';
import { Products } from '../entities/products.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderDetails, Orders, Users, Products])],
  providers: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}
