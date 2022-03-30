const contacts = require("./contacts");
const argv = require('yargs').argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case 'list':
            const listContacts = await contacts.listContacts();
            console.table(listContacts);
            break;

        case 'get':
            const contact = await contacts.getContactById(id);
            console.log(contact);
            break;

        case 'add':
            const contactAdd = await contacts.addContact(name, email, phone)
            console.log(contactAdd);
            break;

        case 'remove':
            const removeContact = await contacts.removeContact(id);
            console.log(removeContact);
            break;

        default:
            console.warn('\x1B[31m Unknown action type!');
    }
}

invokeAction(argv);
