import { IsBoolean, IsBooleanString, IsNotEmpty, IsString } from "class-validator";

export class CreateCustomerCardDto {
  customerId: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  number: string;

  @IsString()
  year: string;

  @IsString()
  month: string;

  @IsBooleanString()
  is_active: boolean;

  @IsBooleanString()
  is_main: boolean;
}
