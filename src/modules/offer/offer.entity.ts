import {UserEntity} from '../user/user.entity.js';
import {Facilities} from '../../types/facilities.enum.js';
import {PropertyType} from '../../types/property.enum.js';
import typegoose, {getModelForClass, defaultClasses, Ref} from '@typegoose/typegoose';

const {prop, modelOptions} = typegoose;

export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  }
})

export class OfferEntity extends defaultClasses.TimeStamps {

  @prop({required: true})
  public title!: string;

  @prop({required: true})
  public description!: string;

  @prop({required: true})
  public postDate!: Date;

  @prop({required: true})
  public city!: string;

  @prop({required: true})
  public preview!: string;

  @prop({required: true})
  public photos!: string[];

  @prop({required: true})
  public isPremium!: boolean;

  @prop({required: true})
  public rating!: number;

  @prop({required: true})
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

  @prop()
  public commentsCount!: number;

  @prop({required: true})
  public coordinates!: string;

}

export const OfferModel = getModelForClass(OfferEntity);