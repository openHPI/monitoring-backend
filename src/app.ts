import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import helloWorldRouter from '@/routes/helloWorld';

function startApiServer() {
  const app: express.Application = express();
  const port: string = process.env.PORT || '3000';

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  app.use('/hello-world', helloWorldRouter);

  app.get('/', (req, res) => {
    res.send('hello world!');
  });

  app.use('/docs', swaggerUi.serve, swaggerUi.setup(require('../swagger.json')));

  app.listen(port);
}

startApiServer();
