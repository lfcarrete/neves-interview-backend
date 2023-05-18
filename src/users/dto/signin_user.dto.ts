import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MinLength } from "class-validator";

export class SignInUserDto {
  
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(3)
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(5)
  password: string;

}