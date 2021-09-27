import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 app.enableCors({
   origin:'http://localhost:4200'
 });
  await app.listen(3001,()=>console.log('Send message microservices'));
 
}
bootstrap();