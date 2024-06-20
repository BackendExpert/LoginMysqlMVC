const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const JkMysql = require('jkmysql-easy');

// make connection between server and mysql database
const connection = JkMysql.ConnectToDatabase('localhost', 'root', '1234', 'mysqlmvc')



