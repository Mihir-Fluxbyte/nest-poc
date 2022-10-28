import { IsEmail, IsNotEmpty } from 'class-validator';

export class TestRequestDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}