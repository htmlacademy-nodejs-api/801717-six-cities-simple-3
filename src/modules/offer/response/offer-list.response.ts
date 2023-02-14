import { Expose } from 'class-transformer';

export default class OfferListResponse {

  @Expose()
  public id!: string;

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
  public isPremium!: boolean;

  @Expose()
  public rating!: number;

  @Expose()
  public commentsCount!: number;

}
