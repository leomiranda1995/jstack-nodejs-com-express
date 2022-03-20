const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Leonardo',
    email: 'leonardo@mail.com',
    phone: '342352333',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
