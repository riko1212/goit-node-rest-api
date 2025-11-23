import Contact from '../models/contact.js';

async function listContacts() {
  return await Contact.findAll();
}

async function getContactById(contactId) {
  return await Contact.findByPk(contactId);
}

async function removeContact(contactId) {
  const contact = await Contact.findByPk(contactId);
  if (!contact) return null;
  await contact.destroy();
  return contact;
}

async function addContact(name, email, phone) {
  const newContact = await Contact.create({ name, email, phone });
  return newContact;
}

async function updateContact(contactId, data) {
  const contact = await Contact.findByPk(contactId);
  if (!contact) return null;
  await contact.update(data);
  return contact;
}

async function updateStatusContact(contactId, body) {
  const contact = await Contact.findByPk(contactId);
  if (!contact) return null;
  await contact.update({ favorite: body.favorite });
  return contact;
}

export default {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
};
