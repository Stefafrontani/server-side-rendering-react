import express from 'express';
import routes from './routes/index';

const server = express();

server.use(express.static('src/client/dist'));

server.use("/", routes);

const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`server listening on port ${port}`)
});