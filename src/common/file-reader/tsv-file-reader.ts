import { readFileSync } from 'fs';
import { PropertyType } from '../../types/property.enum.js';
import { Offer } from '../../types/offer.type.js';
import { FileReaderInterface } from './file-reader.interface.js';

export default class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public filename: string) { }

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      return [];
    }

    console.log('this.rawData', this.rawData);

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(([
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
        user,
        commentsCount,
        coordinates,
      ]) => ({
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
        user,
        commentsCount: Number.parseInt(commentsCount, 10),
        coordinates,
      }));
  }
}
