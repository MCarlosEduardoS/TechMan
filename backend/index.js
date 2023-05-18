require('dotenv').config();

const Express = require('express');
const cors = require('cors');
const app = Express();

const routes = require('./routes.js');

app.use(Express.json());
app.use(cors());
app.use(routes);

app.listen(process.env.APP_PORT, () => {
    console.log("Autobots Rodar");
});