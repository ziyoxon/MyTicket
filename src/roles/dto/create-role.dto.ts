import { IsNotEmpty, IsString } from "class-validator";

export class CreateRoleDto {
  @IsString({message: "String bo'lishi kerak!"})
  @IsNotEmpty()
  value: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
