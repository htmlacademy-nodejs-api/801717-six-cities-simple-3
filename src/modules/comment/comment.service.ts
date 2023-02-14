import {inject, injectable} from 'inversify';
import {DocumentType, types} from '@typegoose/typegoose';
import mongoose from 'mongoose';
import CreateCommentDto from './dto/create-comment.dto.js';
import { SortType } from '../../types/sort-type.enum.js';
import { MAX_COMMENT_COUNT } from './comment.constant.js';
import {CommentServiceInterface} from './comment-service.interface.js';
import {LoggerInterface} from '../../common/logger/logger.interface.js';
import {Component} from '../../types/component.types.js';
import {CommentEntity} from './comment.entity.js';

@injectable()
export default class CommentService implements CommentServiceInterface {
  constructor(
    @inject(Component.LoggerInterface) private logger: LoggerInterface,
    @inject(Component.CommentModel) private readonly commentModel: types.ModelType<CommentEntity>
  ) {}

  public async create(dto: CreateCommentDto): Promise<DocumentType<CommentEntity>> {
    const comment = await this.commentModel.create(dto);

    return comment.populate('userId');
  }

  public async findByOfferId(offerId: string): Promise<DocumentType<CommentEntity>[]> {
    return this.commentModel
      .find({offerId}).sort({createdAt: SortType.Down}).limit(MAX_COMMENT_COUNT).populate('userId');
  }

  public async recalculateRating(offerId: string): Promise<number | null> {
    const rating = await this.commentModel.aggregate([
      { $match: { offerId: new mongoose.Types.ObjectId(offerId) } },
      { $group : { _id: 'avdRating', avgAmount: { $avg: '$rating' } } },
    ]);

    const newRating = Number(rating.map((item) => item.avgAmount)[0].toFixed(1));

    this.logger.info(`newRating: ${newRating}`);

    return newRating;
  }

  public async deleteByOfferId(offerId: string): Promise<number> {
    const result = await this.commentModel
      .deleteMany({offerId})
      .exec();

    return result.deletedCount;
  }

}
