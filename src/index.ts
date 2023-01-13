// tslint:disable-next-line:no-var-requires
require('dotenv').config();
// tslint:disable-next-line:no-var-requires
require('./crash-handler'); // NOTE: Register Crash Handler
import express from 'express';
import cors from 'cors';
import {RESPONSE_STATUS_CODE} from './constants';
import Logger from './logger';

// NOTE: Log to check if our env variables are loaded
Logger.info('ENV VARS:', process.env.ENV, process.env.PORT);

/**
 * ------------------------------------- Note: Express Basic Settings ---------------------------------------------------------
 *
 * NOTE: We can use this basic settings for the express based project or simply you can remove express code and dependency if you want to make a script or library.
 */

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use('*', (req, _res, next) => {
  Logger.info(`------------------START [${Date.now()}]----------------------`);
  Logger.info(
    `Method: ${req.method} \nURL: ${req.url} \nParams: ${JSON.stringify(req.params || {})}  \nQuery: ${JSON.stringify(req.query || {})} \nHeaders: ${JSON.stringify(
      req.headers || {},
    )} \nBody: ${JSON.stringify(req.body || {})}`,
  );
  Logger.info(`------------------END [${Date.now()}]----------------------`);
  next();
});

app.get('/', (req, res) => {
  res.status(200).json({dt: new Date(), data: req.body});
});

app.get('/ping', (_req, res) => {
  res.status(RESPONSE_STATUS_CODE.SUCCESS).json({
    status: 'pinged',
    message: `${new Date().toISOString()}`,
  });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  Logger.info(`Welcome: Server is running on port ${PORT}`);
});
