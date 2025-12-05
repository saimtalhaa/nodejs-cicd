import express from 'express';
import { operatorsRouter } from '../routes/index.js';

export const expressApp = express();

expressApp.use( '/operators', operatorsRouter );