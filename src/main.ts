import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { CustomValidationPipe } from './pipe/validation.pipe';

async function start() {
  try {
    const PORT = process.env.PORT || 3003;
    const app = await NestFactory.create(AppModule);
    // app.useGlobalPipes(new ValidationPipe())
    app.useGlobalPipes(new CustomValidationPipe())
    await app.listen(PORT,()=> {
      console.log(`Server started at: ${PORT}`);
    });
    
  } catch (error) {
    console.log(error);
  }
}
start();
