import { Router } from 'express';
import {getOfferings, getOfferingsWithCircuitBreaker, getOfferingsWithRetry} from './chaosController';

const chaosRouter = new Router();

chaosRouter.get('/', getOfferings);

chaosRouter.get('/circuit-breaker', getOfferingsWithCircuitBreaker);

chaosRouter.get('/retry', getOfferingsWithRetry);

export default chaosRouter;
