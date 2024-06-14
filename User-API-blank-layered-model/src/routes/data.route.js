import { Router } from 'express';
import { getDataController, getFechaController,getAverageMonthController ,postDataController } from '../controllers/data.controller.js';

const dataRouter = Router();

dataRouter.get('/', getDataController);
dataRouter.get('/dates', getFechaController);
dataRouter.get('/average', getAverageMonthController);
dataRouter.post('/', postDataController);

export default dataRouter;  