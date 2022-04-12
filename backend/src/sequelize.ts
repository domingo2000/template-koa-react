'use strict';

import { Sequelize } from 'sequelize-typescript';
const env = process.env.NODE_ENV || 'development';
const config = require('./config/database')[env];

import {
  User,
  Trick,
  UserTrick,
} from './models/models';
console.log("#########")
console.log(User)
console.log(Trick)
console.log(UserTrick)
console.log("#########")
const sequelize = new Sequelize(config);

sequelize.addModels([
  UserTrick,
  Trick,
  User,
]);


export default sequelize;
