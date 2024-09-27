import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCustomerAddressDto {
  customerId: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  countryId: number;
  regionId: number;
  districtId: number;

  @IsString()
  @IsNotEmpty()
  street: string;
  
  @IsString()
  @IsNotEmpty()
  house: string;

  @IsNumber()
  flat: number;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  post_index: string;

  @IsString()
  info: string;
}
