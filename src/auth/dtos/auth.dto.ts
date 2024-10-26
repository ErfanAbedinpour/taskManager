import {
  IsEmail,
  IsNotEmpty,
  isString,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UserDTO{
    //display name
    @IsNotEmpty()
    display_name:string
    //email
    @IsNotEmpty()
    @IsEmail()
    email:string;
    //username
    @IsNotEmpty()
    @IsString()
    username:string;
    @IsNotEmpty()
    @IsString()
    profile:string
}

export class CreateUserDTO{
  //email
  @IsEmail()
  @IsNotEmpty()
  email: string;
  //password
  @MinLength(8)
  @MaxLength(80)
  @IsNotEmpty()
  password: string;
  //username
  @MaxLength(50)
  @MinLength(3)
  @IsNotEmpty()
  username: string;
  @MaxLength(80)
  @MinLength(3)
  @IsNotEmpty()
  display_name: string;
}

export class LoginUserDTO{
    @IsString()
    @IsNotEmpty()
    identify:string; // email or username
    @IsString()
    @MinLength(8)
    @MaxLength(80)
    password:string;
}
