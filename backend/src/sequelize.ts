'use strict';

import { Sequelize } from 'sequelize-typescript';
const env = process.env.NODE_ENV || 'development';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./config/database')[env];

import {
  User,
  Trick,
  UserTrick,
} from './models/models';
const sequelize = new Sequelize(config);

sequelize.addModels([
  UserTrick,
  Trick,
  User,
]);


export default sequelize;
