import {IsEmail, IsString} from 'class-validator';
export default class LoginUserDto {
  @IsEmail({}, {message: 'Email must be a valid address'})
  public email!: string;

  @IsString({message: 'Password is required'})
  public password!: string;
}
