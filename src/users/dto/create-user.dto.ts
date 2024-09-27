import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  // @IsStrongPassword({ minLength: 6,minSymbols: 0 })
  password: string;

  @IsString()
  @IsNotEmpty()
  role_value: string;
}
