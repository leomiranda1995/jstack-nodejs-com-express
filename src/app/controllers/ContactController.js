const ContactsRepository = require('../repositories/ContactsRepository');
class ContactController {
  async index(request, response) {
    // Listar todos os registros
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  show() {
    // Obter um registro
  }

  store() {
    // Criar um registro
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Deletar um registro
  }
}

// Design Patters (Singleton): Diz que só pode ter uma instância dos objetos dentro da aplicação
module.exports = new ContactController();
