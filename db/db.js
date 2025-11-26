import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const { DB_HOST } = process.env;
export const sequelize = new Sequelize(DB_HOST);
