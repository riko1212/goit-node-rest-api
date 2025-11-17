import express from 'express';
import {
  getAllContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} from '../controllers/contactsControllers.js';

const contactsRouter = express.Router();

contactsRouter.get('/', getAllContacts);
contactsRouter.get('/:id', getContactById);
contactsRouter.delete('/:id', removeContact);
contactsRouter.post('/', addContact);
contactsRouter.put('/:id', updateContact);

export default contactsRouter;
