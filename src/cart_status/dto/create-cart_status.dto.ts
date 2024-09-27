import { IsNotEmpty, IsString } from "class-validator";

export class CreateCartStatusDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
