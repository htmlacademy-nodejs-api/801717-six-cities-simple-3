import { Expose, Type } from 'class-transformer';
import UserResponse from '../../user/response/user.response.js';
import { PropertyType } from '../../../types/property.enum.js';
import { Facilities } from '../../../types/facilities.enum.js';
import { CityType } from '../../../types/city.enum.js';
import { Coordinates } from '../../../types/Coordinates.type.js';

export default class OfferListResponse {
  @Expose()
  public id!: string;

  @Expose()
  public title!: string;

  @Expose()
  public description!: string;

  @Expose()
  public postDate!: Date;

  @Expose()
  public city!: CityType;

  @Expose()
  public preview!: string;

  @Expose()
  public photos!: string[];

  @Expose()
  public isPremium!: boolean;

  @Expose()
  public rating!: number;

  @Expose()
  public property!: PropertyType;

  @Expose()
  public rooms!: number;

  @Expose()
  public guests!: number;

  @Expose()
  public price!: number;

  @Expose()
  public facilities!: Facilities[];

  @Expose({ name: 'userId'})
  @Type(() => UserResponse)
  public user!: UserResponse;

  @Expose()
  public commentsCount!: number;

  @Expose()
  public coordinates!: Coordinates;
}
