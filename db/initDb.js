import sequelize from './connection.js';
import Contact from '../models/contact.js';

export async function initDb() {
  try {
    await sequelize.authenticate();
    console.log('Database connection successful');

    await sequelize.sync();
  } catch (err) {
    console.error('Database connection error:', err);
    process.exit(1);
  }
}
