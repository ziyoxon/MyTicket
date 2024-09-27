import { IsDateString, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  hashed_password: string;

  @IsEmail()
  email: string;

  @IsDateString()
  birth_date: Date;

  @IsString()
  gender: string;

  languageId: number;

  @IsString()
  hashed_refresh_token: string;
}
