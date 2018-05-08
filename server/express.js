import express, { Router } from 'express';
import cookieParser from 'cookie-parser'; // cookie的解析
import bodyParser from 'body-parser';

let app = express();
let router = Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

router.get('/', (req, res, next) => {
  res.end('Helsslss!');
});

app.use('/', router);

app.listen(3000, () => {
  console.log('server listening at port 3000...');
});


console.log('env');