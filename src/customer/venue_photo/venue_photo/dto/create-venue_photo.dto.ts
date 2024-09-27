import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateVenuePhotoDto {
  venue_id: number;

  @IsString()
  @IsOptional()
  url: string;
}
