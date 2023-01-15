import dayjs from 'dayjs';

import { MockData } from '../../types/mock-data.type.js';
import { PropertyType } from '../../types/property.enum.js';
import { generateRandomValue, getRandomItem, getRandomItems, generateRandomFlag } from '../../utils/random.js';
import { OfferGeneratorInterface } from './offer-generator.interface.js';
import {
  PriceLimits,
  RatingLimits,
  RoomsLimits,
  GuestsLimits,
  CommentsLimits,
  WeekDayLimits,
} from './offer-generator.constants.js';
export default class OfferGenerator implements OfferGeneratorInterface {
  constructor(private readonly mockData: MockData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const postDate = dayjs().subtract(generateRandomValue(WeekDayLimits.FIRST_WEEK_DAY, WeekDayLimits.LAST_WEEK_DAY), 'day').toISOString();
    const city = getRandomItem<string>(this.mockData.citys);
    const preview = getRandomItem<string>(this.mockData.previews);
    const photo = getRandomItems<string>(this.mockData.photos).join(';');
    const isPremium = generateRandomFlag();
    const rating = generateRandomValue(RatingLimits.MIN_RATING, RatingLimits.MAX_RATING).toString();
    const property = getRandomItem([PropertyType.apartment, PropertyType.house, PropertyType.room, PropertyType.hotel]);
    const rooms = generateRandomValue(RoomsLimits.MIN_ROOMS, RoomsLimits.MAX_ROOMS).toString();
    const guests = generateRandomValue(GuestsLimits.MIN_GUESTS, GuestsLimits.MAX_GUESTS).toString();
    const price = generateRandomValue(PriceLimits.MIN_PRICE, PriceLimits.MAX_PRICE).toString();
    const facilities = getRandomItems<string>(this.mockData.facilities).join(';');
    const user = getRandomItem<string>(this.mockData.users);
    const commentsCount = generateRandomValue(CommentsLimits.MIN_COMMENTS, CommentsLimits.MAX_COMMENTS).toString();
    const coordinates = getRandomItem<string>(this.mockData.coordinates);

    return [
      title,
      description,
      postDate,
      city,
      preview,
      photo,
      isPremium,
      rating,
      property,
      rooms,
      guests,
      price,
      facilities,
      user,
      commentsCount,
      coordinates,
    ].join('\t');
  }
}
