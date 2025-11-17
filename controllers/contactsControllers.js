import contactsServices from '../services/contactsServices.js';
import { addSchema, updateSchema } from '../schemas/contactsSchemas.js';
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
    if (!contact) throw HttpError(404, 'Not found');
    res.status(200).json(contact);
  } catch (err) {
    next(err);
  }
};

export const removeContact = async (req, res, next) => {
  try {
    const removed = await contactsServices.removeContact(req.params.id);
    if (!removed) throw HttpError(404, 'Not found');
    res.status(200).json(removed);
  } catch (err) {
    next(err);
  }
};

export const addContact = [
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
      if (!updated) throw HttpError(404, 'Not found');
      res.status(200).json(updated);
    } catch (err) {
      next(err);
    }
  },
];
