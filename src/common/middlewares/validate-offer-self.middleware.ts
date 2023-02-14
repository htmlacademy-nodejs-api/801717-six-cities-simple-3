import {NextFunction, Request, Response} from 'express';
import HttpError from '../errors/http-error.js';
import {StatusCodes} from 'http-status-codes';
import {OfferServiceInterface} from '../../modules/offer/offer-service.interface.js';
import {MiddlewareInterface} from '../../types/middleware.interface.js';

export class ValidateOfferSelfMiddleware implements MiddlewareInterface {
  constructor(
    private readonly service: OfferServiceInterface,
    private readonly actionName: string,
    private readonly paramName: string,
  ) {}

  public async execute(req: Request, _res: Response, next: NextFunction): Promise<void> {
    const {params, user} = req;
    const documentId = params[this.paramName];
    const document = await this.service.findById(documentId);

    if (document?.userId?._id?.toString() !== user.id) {
      throw new HttpError(
        StatusCodes.FORBIDDEN,
        `It is forbidden to ${this.actionName} other users offers`,
        'ValidateOfferSelfMiddleware'
      );
    }

    next();
  }
}
