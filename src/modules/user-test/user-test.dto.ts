import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserTestDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @IsNumber()
  @IsNotEmpty()
  public age: number;
}
