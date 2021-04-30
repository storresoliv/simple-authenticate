import { IsString, MaxLength, MinLength } from 'class-validator';

export class LoginDto {
  @IsString()
  @MaxLength(30)
  user: string;

  @IsString()
  @MinLength(8)
  @MaxLength(228)
  password: string;
}
