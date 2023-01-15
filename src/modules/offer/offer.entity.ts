import {Offer} from '../../types/offer.type.js';
import {User} from '../../types/user.type.js';
import {Facilities} from '../../types/facilities.enum.js';
import {PropertyType} from '../../types/property.enum.js';
import typegoose, {getModelForClass, defaultClasses} from '@typegoose/typegoose';

const {prop, modelOptions} = typegoose;

export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  }
})

export class OfferEntity extends defaultClasses.TimeStamps implements Offer {

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

  @prop({required: true})
  public user!: User;

  @prop()
  public commentsCount!: number;

  @prop({required: true})
  public coordinates!: string;

}

export const OfferModel = getModelForClass(OfferEntity);
