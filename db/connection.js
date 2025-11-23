import { Sequelize } from 'sequelize';

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS, DATABASE_URL, DB_SSL } =
  process.env;

let sequelize;

if (DATABASE_URL) {
  sequelize = new Sequelize(DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions:
      DB_SSL === 'true' ? { ssl: { rejectUnauthorized: false } } : {},
    logging: false,
  });
} else {
  sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    port: DB_PORT || 5432,
    dialect: 'postgres',
    dialectOptions:
      DB_SSL === 'true' ? { ssl: { rejectUnauthorized: false } } : {},
    logging: false,
  });
}

export default sequelize;
