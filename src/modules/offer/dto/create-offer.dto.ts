import {Facilities} from '../../../types/facilities.enum.js';
import {PropertyType} from '../../../types/property.enum.js';

export default class CreateUserDto {
  public title!: string;
  public description!: string;
  public postDate!: Date;
  public city!: string;
  public preview!: string;
  public photos!: string[];
  public isPremium!: boolean;
  public rating!: number;
  public property!: PropertyType;
  public rooms!: number;
  public guests!: number;
  public price!: number;
  public facilities!: Facilities[];
  public userId!: string;
  public commentsCount!: number;
  public coordinates!: string;
}
