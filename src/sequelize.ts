'use strict';

import { Sequelize } from 'sequelize-typescript';
const env = process.env.NODE_ENV || 'development';
const config = require('./config/database')[env];

import Trick from './models/tricks';

const sequelize = new Sequelize(config);

sequelize.addModels([Trick]);

export default sequelize;
