const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(request, response) {
    const { orderBy } = request.query;

    const category = await CategoriesRepository.findAll(orderBy);
    response.json(category);
  }

  async show(request, response) {
    const { id } = request.params;

    const category = await CategoriesRepository.findByID(id);

    if (!category) {
      return response.status(404).json({ error: 'Category not found' });
    }

    response.send(category);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const categoryExists = await CategoriesRepository.findByName(name);

    if (categoryExists) {
      return response.status(400).json({ error: 'This category already exists' });
    }

    const category = await CategoriesRepository.create({ name });

    response.json(category);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const categoryExists = await CategoriesRepository.findByID(id);

    if (!categoryExists) {
      return response.status(404).json({ error: 'Category not found' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const categoryInUse = await CategoriesRepository.findByName(name);

    if (categoryInUse) {
      return response.status(400).json({ error: 'This category is already in use' });
    }

    const category = await CategoriesRepository.update(id, { name });

    response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;

    const categoryInUse = await CategoriesRepository.categoryInUseContact(id);
    if (categoryInUse) {
      return response.status(400).json({ error: 'This category is in use contact' });
    }

    await CategoriesRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new CategoryController();
