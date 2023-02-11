import {Facilities} from '../../../types/facilities.enum.js';
import {PropertyType} from '../../../types/property.enum.js';
import {
  IsDateString,
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength
} from 'class-validator';

export default class UpdateOfferDto {
  @IsOptional()
  @MinLength(10,{message: 'Minimum title length must be 10'})
  @MaxLength(100, {message: 'Maximum title length must be 100'})
  public title?: string;

  @IsOptional()
  @MinLength(20, {message: 'Minimum description length must be 20'})
  @MaxLength(1024, {message: 'Maximum description length must be 1024'})
  public description?: string;

  @IsOptional()
  @IsDateString({}, {message: 'postDate must be valid ISO date'})
  public postDate?: Date;

  @IsOptional()
  @IsEnum(PropertyType, {message: 'Type must be Paris Cologne, Brussels, Amsterdam, Hamburg or Dusseldorf'})
  public city?: string;

  @IsOptional()
  @IsString({message: 'Preview is required'})
  @MaxLength(256, {message: 'Too long for field «preview»'})
  public preview?: string;

  @IsOptional()
  @IsArray({message: 'Field photos must be an array'})
  public photos?: string[];

  @IsOptional()
  @IsBoolean({message: 'IsPremium must be an boolean'})
  public isPremium!: boolean;

  @IsOptional()
  @IsEnum(PropertyType, {message: 'Type must be apartment, house, room or hotel'})
  public property?: PropertyType;

  @IsOptional()
  @IsInt({message: 'Rooms must be an integer'})
  @Min(1, {message: 'Minimum rooms is 1'})
  @Max(8, {message: 'Maximum rooms is 8'})
  public rooms?: number;

  @IsOptional()
  @IsInt({message: 'Guests must be an integer'})
  @Min(1, {message: 'Minimum guests is 1'})
  @Max(10, {message: 'Maximum guests is 10'})
  public guests?: number;

  @IsOptional()
  @IsInt({message: 'Price must be an integer'})
  @Min(100, {message: 'Minimum price is 100'})
  @Max(100000, {message: 'Maximum price is 100000'})
  public price?: number;

  @IsOptional()
  @IsArray({message: 'Field facilities must be an array'})
  public facilities?: Facilities[];

  public coordinates?: string;
}
