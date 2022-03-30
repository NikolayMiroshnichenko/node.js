const fs = require("fs").promises;
const path = require("path");
const { v4: uuidv4 } = require('uuid');

const contactsPath = path.join(__dirname, 'db/contacts.json');

const listContacts = async () => {
    const result = await fs.readFile(contactsPath);
    return JSON.parse(result);
}

const getContactById = async (contactId) => {
    const contacts = await listContacts();
    const idx = contacts.findIndex(item => item.id == contactId);

    if (idx === -1) return null;

    return contacts[idx];
}

const removeContact = async (contactId) => {
    const contacts = await listContacts();
    const idx = contacts.findIndex(item => item.id == contactId);

    if (idx === -1) return null;

    const removeProduct = contacts.splice(idx, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

    return removeProduct;
}

const addContact = async (name, email, phone) => {
    const contacts = await listContacts();
    const addContact = {name, email, phone, id: uuidv4()};

    contacts.push(addContact);

    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

    return addContact;
}

module.exports = { listContacts, getContactById, removeContact, addContact };
