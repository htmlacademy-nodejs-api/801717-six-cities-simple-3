import {Facilities} from '../../../types/facilities.enum.js';
import {PropertyType} from '../../../types/property.enum.js';
import {CityType} from '../../../types/city.enum.js';
import {IsArray, IsBoolean, IsDateString, IsEnum, IsInt, Max, MaxLength, Min, MinLength, IsString} from 'class-validator';

export default class CreateOfferDto {
  @MinLength(10, {message: 'Minimum title length must be 10'})
  @MaxLength(100, {message: 'Maximum title length must be 100'})
  public title!: string;

  @MinLength(20, {message: 'Minimum description length must be 20'})
  @MaxLength(1024, {message: 'Maximum description length must be 1024'})
  public description!: string;

  @IsDateString({}, {message: 'postDate must be valid ISO date'})
  public postDate!: Date;

  @IsEnum(PropertyType, {message: 'Type must be Paris Cologne, Brussels, Amsterdam, Hamburg or Dusseldorf'})
  public city!: CityType;

  @IsString({message: 'Preview is required'})
  @MaxLength(256, {message: 'Too long for field «preview»'})
  public preview!: string;

  @IsArray({message: 'Field photos must be an array'})
  public photos!: string[];

  @IsBoolean({message: 'IsPremium must be an boolean'})
  public isPremium!: boolean;

  @IsEnum(PropertyType, {message: 'Type must be apartment, house, room or hotel'})
  public property!: PropertyType;

  @IsInt({message: 'Rooms must be an integer'})
  @Min(1, {message: 'Minimum rooms is 1'})
  @Max(8, {message: 'Maximum rooms is 8'})
  public rooms!: number;

  @IsInt({message: 'Guests must be an integer'})
  @Min(1, {message: 'Minimum guests is 1'})
  @Max(10, {message: 'Maximum guests is 10'})
  public guests!: number;

  @IsInt({message: 'Price must be an integer'})
  @Min(100, {message: 'Minimum price is 100'})
  @Max(100000, {message: 'Maximum price is 100 000'})
  public price!: number;

  @IsArray({message: 'Field facilities must be an array'})
  public facilities!: Facilities[];

  public userId!: string;

  public coordinates!: string;
}
