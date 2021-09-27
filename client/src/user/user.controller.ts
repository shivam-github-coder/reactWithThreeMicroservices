import { Body, Controller,Delete,Get,Inject,Param,Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UserDto } from 'src/dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService:UserService){}
  @Inject('PRODUCT_SERVICE') private readonly client:ClientProxy  

  // @Get()
  // findAll(@Body() userDto: UserDto): any {
  //   return this.client.emit("Data_receiver",userDto.name);
  // }

  @Post()
  async CreateOne(@Body() userDto: UserDto){
      if(userDto.price ==( null || undefined || 0))
      {
        return this.userService.create(userDto);
      }
      else{
        await this.client.emit("message_printed",userDto)
        await this.client.emit("send_mail",userDto)
        return this.userService.PaymentUpdate(userDto);
      }
  }

  @Delete(':id')
  DeleteOne(@Param('id') _id):any{
    return this.userService.DeleteOne(_id);
  }
}

