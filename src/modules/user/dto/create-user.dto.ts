import { UserType } from '../../../types/user-type.enum.js';
import { IsEmail, IsString, Length, IsEnum } from 'class-validator';

export default class CreateUserDto {
  @IsString({message: 'Name is required'})
  @Length(1, 15, {message: 'Min length is 1, max is 15'})
  public name!: string;

  @IsString({message: 'Name is required'})
  @IsEmail({}, {message: 'Email must be valid address'})
  public email!: string ;

  @IsString({message: 'Password is required'})
  @Length(6, 12, {message: 'Min length for password is 6, max is 12'})
  public password!: string;

  @IsEnum(UserType, {message: `Type must be ${Object.values(UserType).join(', ')}.`})
  public type!: UserType;

}
