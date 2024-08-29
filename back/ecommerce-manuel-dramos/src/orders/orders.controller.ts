import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dtos/orders.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @UseGuards(AuthGuard)
  addOrder(@Body() order: CreateOrderDTO) {
    const { userId, products } = order;
    return this.ordersService.addOrder(userId, products);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  getOrder(@Query('id') id: string) {
    return this.ordersService.getOrder(id);
  }
}
