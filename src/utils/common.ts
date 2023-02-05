import { plainToInstance } from 'class-transformer';
import { ClassConstructor } from 'class-transformer/types/interfaces/class-constructor.type.js';
import crypto from 'crypto';
import { Offer } from '../types/offer.type.js';
import { PropertyType } from '../types/property.enum.js';
import { UserType } from '../types/user-type.enum.js';
import { User } from '../types/user.type.js';

export const createOffer = (row: string) => {
  const tokens = row.replace('\n', '').split('\t');
  const [title,
    description,
    postDate,
    city,
    preview,
    photos,
    isPremium,
    rating,
    property,
    rooms,
    guests,
    price,
    facilities,
    userName,
    email,
    avatarPath,
    userType,
    commentsCount,
    coordinates] = tokens;
  return {
    title,
    description,
    postDate: new Date(postDate),
    city,
    preview,
    photos: photos.split(';'),
    isPremium: Boolean(isPremium),
    rating: Number.parseInt(rating, 10),
    property: PropertyType[property as 'apartment' | 'house' | 'room' | 'hotel'],
    rooms: Number.parseInt(rooms, 10),
    guests: Number.parseInt(guests, 10),
    price: Number.parseInt(price, 10),
    facilities: facilities.split(';'),
    user: {
      name: userName,
      email,
      avatarPath,
      type: UserType[userType as 'Pro' | 'Common'],
    } as User,
    commentsCount: Number.parseInt(commentsCount, 10),
    coordinates,
  } as Offer;
};

export const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : '';

export const createSHA256 = (line: string, salt: string): string => {
  const shaHasher = crypto.createHmac('sha256', salt);
  return shaHasher.update(line).digest('hex');
};

export const fillDTO = <T, V>(someDto: ClassConstructor<T>, plainObject: V) =>
  plainToInstance(someDto, plainObject, {excludeExtraneousValues: true});

export const createErrorObject = (message: string) => ({
  error: message,
});
