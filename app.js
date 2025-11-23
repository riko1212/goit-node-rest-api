import express from 'express';
import contactsRouter from './routes/contactsRouter.js';
import { initDb } from './db/initDb.js'; // імпорт

const app = express();
app.use(express.json());
app.use('/api/contacts', contactsRouter);

const PORT = process.env.PORT || 3000;

(async () => {
  await initDb();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();
