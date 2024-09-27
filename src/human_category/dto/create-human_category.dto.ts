import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateHumanCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  start_age: number;

  @IsNumber()
  finish_age: number;

  @IsNumber()
  gender: number;
}