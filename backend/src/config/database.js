const config = {
  'development': {
    'username': process.env.DB_USERNAME,
    'password': process.env.DB_PASSWORD,
    'database': process.env.DB_NAME,
    'host': process.env.DB_HOST,
    'dialect': process.env.DB_DIALECT,
    'seederStorage': 'sequelize',

  },
  'test': {
    'username': process.env.DB_USERNAME,
    'password': process.env.DB_PASSWORD,
    'database': `${process.env.DB_NAME}_test`,
    'host': process.env.DB_HOST,
    'dialect': process.env.DB_DIALECT
  },
  'production': {
    'username': process.env.DB_USERNAME,
    'password': process.env.DB_PASSWORD,
    'database': process.env.DB_NAME,
    'dialect': process.env.DB_DIALECT,
    'seederStorage': 'sequelize',
  }
};

module.exports = config;
