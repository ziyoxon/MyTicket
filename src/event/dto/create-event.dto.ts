import { IsDateString, IsNotEmpty, IsString } from "class-validator";

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  photo: string;

  @IsDateString()
  start_date: Date;

  @IsDateString()
  finish_date: Date;

  @IsString()
  start_time: Date;

  @IsString()
  finish_time: Date;

  @IsString()
  info: string;

  event_typeId: number;
  human_categoryId: number;
  venueId: number;
  languageId: number;

  @IsDateString()
  release_date: Date;
}
