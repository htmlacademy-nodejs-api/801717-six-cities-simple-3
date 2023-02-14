import {Expose} from 'class-transformer';

export default class UserResponse {
  @Expose()
  public name!: string;

  @Expose()
  public email!: string ;

  @Expose()
  public avatarPath!: string;

  @Expose()
  public type!: string;

}
