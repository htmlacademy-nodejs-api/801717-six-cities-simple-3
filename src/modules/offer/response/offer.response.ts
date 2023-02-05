import {Expose} from 'class-transformer';

export default class OfferResponse {
  @Expose()
  public price!: string;

  @Expose()
  public title!: string;

  @Expose()
  public property!: string;

  @Expose()
  public postDate!: string;

  @Expose()
  public city!: string;

  @Expose()
  public preview!: string;

  @Expose()
  public isPremium!: string;

  @Expose()
  public rating!: string;

  @Expose()
  public commentsCount!: string;
}
