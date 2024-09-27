import { IsNotEmpty, IsString } from "class-validator";

export class CreateBookingStatusDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
