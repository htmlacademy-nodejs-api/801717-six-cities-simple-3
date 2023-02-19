import dayjs from 'dayjs';

import { MockData } from '../../types/mock-data.type.js';
import { PropertyType } from '../../types/property.enum.js';
import { CityType } from '../../types/city.enum.js';
import { generateRandomValue, getRandomItem, getRandomItems, generateRandomFlag } from '../../utils/random.js';
import { OfferGeneratorInterface } from './offer-generator.interface.js';
import {
  PriceLimits,
  RoomsLimits,
  GuestsLimits,
  WeekDayLimits,
} from './offer-generator.constants.js';
export default class OfferGenerator implements OfferGeneratorInterface {
  constructor(private readonly mockData: MockData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const postDate = dayjs().subtract(generateRandomValue(WeekDayLimits.FIRST_WEEK_DAY, WeekDayLimits.LAST_WEEK_DAY), 'day').toISOString();
    const city = getRandomItem<string>([
      CityType.Paris,
      CityType.Cologne,
      CityType.Brussels,
      CityType.Amsterdam,
      CityType.Hamburg,
      CityType.Dusseldorf,
    ]);
    const preview = getRandomItem<string>(this.mockData.previews);
    const photos = getRandomItems<string>(this.mockData.photos).join(';');
    const isPremium = generateRandomFlag();
    const rating = '0';
    const property = getRandomItem([PropertyType.apartment, PropertyType.house, PropertyType.room, PropertyType.hotel]);
    const rooms = generateRandomValue(RoomsLimits.MIN_ROOMS, RoomsLimits.MAX_ROOMS).toString();
    const guests = generateRandomValue(GuestsLimits.MIN_GUESTS, GuestsLimits.MAX_GUESTS).toString();
    const price = generateRandomValue(PriceLimits.MIN_PRICE, PriceLimits.MAX_PRICE).toString();
    const facilities = getRandomItems<string>(this.mockData.facilities).join(';');
    const userName = getRandomItem<string>(this.mockData.userName);
    const email = getRandomItem<string>(this.mockData.email);
    const avatarPath = getRandomItem<string>(this.mockData.avatarPath);
    const type = getRandomItem<string>(this.mockData.type);
    const commentsCount = '0';
    const latitude = this.mockData.coordinates[generateRandomValue(0, 5, 0)].latitude.toString();
    const longitude = this.mockData.coordinates[generateRandomValue(0, 5, 0)].longitude.toString();

    return [
      title,
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
      type,
      commentsCount,
      latitude,
      longitude
    ].join('\t');
  }
}
