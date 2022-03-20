class ContactController {
  index(request, response) {
    // Listar todos os registros
    response.send('Send from Contact Controller');
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
