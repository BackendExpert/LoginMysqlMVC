const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const JkMysql = require('jkmysql-easy');

const PORT = process.env.PORT || 8081

// make connection between server and mysql database
const connection = JkMysql.ConnectToDatabase('localhost', 'root', '1234', 'mysqlmvc')

// Express app setup
const app = express();

app.use(bodyParser.json());
app.use(cors());


app.listen(PORT, () => console.log(`Server is Running on PORT ${PORT}`));