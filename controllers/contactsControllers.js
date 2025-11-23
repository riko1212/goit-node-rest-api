import contactsServices from '../services/contactsServices.js';
import {
  addSchema,
  updateSchema,
  favoriteSchema,
} from '../schemas/contactsSchemas.js';
import { validateBody } from '../helpers/validateBody.js';
import { HttpError } from '../helpers/HttpError.js';

export const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await contactsServices.listContacts();
    res.status(200).json(contacts);
  } catch (err) {
    next(err);
  }
};

export const getContactById = async (req, res, next) => {
  try {
    const contact = await contactsServices.getContactById(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Not found' });
    res.status(200).json(contact);
  } catch (err) {
    next(err);
  }
};

export const deleteContact = async (req, res, next) => {
  try {
    const removed = await contactsServices.removeContact(req.params.id);
    if (!removed) return res.status(404).json({ message: 'Not found' });
    res.status(200).json(removed);
  } catch (err) {
    next(err);
  }
};

export const createContact = [
  validateBody(addSchema),
  async (req, res, next) => {
    try {
      const newContact = await contactsServices.addContact(
        req.body.name,
        req.body.email,
        req.body.phone
      );
      res.status(201).json(newContact);
    } catch (err) {
      next(err);
    }
  },
];

export const updateContact = [
  validateBody(updateSchema),
  async (req, res, next) => {
    try {
      const updated = await contactsServices.updateContact(
        req.params.id,
        req.body
      );
      if (!updated) return res.status(404).json({ message: 'Not found' });
      res.status(200).json(updated);
    } catch (err) {
      next(err);
    }
  },
];

export const updateStatusContact = [
  validateBody(favoriteSchema),
  async (req, res, next) => {
    try {
      const updated = await contactsServices.updateStatusContact(
        req.params.contactId,
        req.body
      );
      if (!updated) return res.status(404).json({ message: 'Not found' });
      res.status(200).json(updated);
    } catch (err) {
      next(err);
    }
  },
];
