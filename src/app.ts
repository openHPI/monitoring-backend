import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import helloWorldRouter from '@/routes/helloWorld';
import eventRouter from '@/routes/event';

const swaggerConfig = require('@/swagger.json');

function startApiServer() {
  const app: express.Application = express();
  const port: string = process.env.PORT || '3000';

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  app.use(cors());

  app.use('/events', eventRouter);

  app.use('/hello-world', helloWorldRouter);

  app.get('/', (req, res) => {
    res.send('hello world!');
  });

  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

  app.listen(port);
}

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', startApiServer);

mongoose.connect(`mongodb://${process.env.MONGO_HOST || 'localhost'}/monitoring`);
