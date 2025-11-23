import express from 'express';
import {
  getAllContacts,
  getContactById,
  deleteContact,
  createContact,
  updateContact,
  updateStatusContact,
} from '../controllers/contactsControllers.js';

const contactsRouter = express.Router();

contactsRouter.get('/', getAllContacts);
contactsRouter.get('/:id', getContactById);
contactsRouter.delete('/:id', deleteContact);
contactsRouter.post('/', createContact);
contactsRouter.put('/:id', updateContact);
contactsRouter.patch('/:contactId/favorite', updateStatusContact);

export default contactsRouter;
