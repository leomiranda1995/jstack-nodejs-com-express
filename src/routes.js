const { Router } = require('express');

const ContactController = require('./app/controllers/ContactController');

const router = Router();

router.get(
  '/contacts',
  // (request, response, next) => {
  //   request.middleware2 = 2;
  //   next();
  // },
  ContactController.index,
);
router.get('/contacts/:id', ContactController.show);
router.delete('/contacts/:id', ContactController.delete);
router.post('/contacts', ContactController.store);

module.exports = router;
