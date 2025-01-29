import { Exclude } from "class-transformer";
import { IsEmail, isEmail, IsOptional, IsString } from "class-validator";

export class CreateDto {
  @IsEmail()
  email: string;

  @IsString()
  firstname: string;

  @IsString()
  @IsOptional()
  lastname: string;

  @IsString()
  @IsOptional()
  username: string;

  @IsString()
  password: string;
}
