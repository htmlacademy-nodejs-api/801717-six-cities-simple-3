import crypto from 'crypto';
import { PropertyType } from '../types/property.enum.js';
import { Offer } from '../types/offer.type.js';

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
    },
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
