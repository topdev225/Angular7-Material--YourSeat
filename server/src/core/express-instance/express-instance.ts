import * as express from 'express';
import * as cors from 'cors';

const instance = express();

instance.use(cors());

export default instance;