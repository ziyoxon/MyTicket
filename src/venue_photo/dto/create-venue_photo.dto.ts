import { IsNotEmpty, IsString } from "class-validator";

export class CreateVenuePhotoDto {
  venueId: number;

  @IsString()
  @IsNotEmpty()
  url: string;
}
