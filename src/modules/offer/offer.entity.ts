import typegoose, {getModelForClass, defaultClasses, Ref} from '@typegoose/typegoose';
import {UserEntity} from '../user/user.entity.js';
import {Facilities} from '../../types/facilities.enum.js';
import {PropertyType} from '../../types/property.enum.js';
import { Coordinates } from '../../types/coordinates.type.js';

const {prop, modelOptions} = typegoose;

export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers',
  }
})

export class OfferEntity extends defaultClasses.TimeStamps {

  @prop({trim: true, required: true})
  public title!: string;

  @prop({trim: true, required: true})
  public description!: string;

  @prop({required: true})
  public postDate!: Date;

  @prop({required: true})
  public city!: string;

  @prop({default: ''})
  public preview!: string;

  @prop({required: true})
  public photos!: string[];

  @prop({default: false})
  public isPremium!: boolean;

  @prop({ default: 0})
  public rating!: number;

  @prop({
    type: () => String,
    enum: PropertyType
  })
  public property!: PropertyType;

  @prop({required: true})
  public rooms!: number;

  @prop({required: true})
  public guests!: number;

  @prop({required: true})
  public price!: number;

  @prop({required: true})
  public facilities!: Facilities[];

  @prop({
    ref: UserEntity,
    required: true
  })
  public userId!: Ref<UserEntity>;

  @prop({required: true, default: 0})
  public commentsCount!: number;

  @prop({required: true})
  public coordinates!: Coordinates;

}

export const OfferModel = getModelForClass(OfferEntity);
