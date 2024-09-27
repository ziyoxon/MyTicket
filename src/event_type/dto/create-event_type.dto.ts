import { IsNotEmpty, IsString } from "class-validator";

export class CreateEventTypeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  parent_event_typeId?: number;
}
