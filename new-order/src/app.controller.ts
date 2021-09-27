import { Body, Controller, Get, Param } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getHello(@Param('id') id): any {
    console.log("hello",id);
    return this.appService.findAll(id);
  }

  @Get()
  @EventPattern('message_printed')
  getData(@Body() data:any): any {
    // const {name} = data.userDto;
    // console.log(`Successfully Ordered ${data.Order} of Mr.${name} `)
    console.log(data)
    return this.appService.CreateNewOrder(data);
  }
}
