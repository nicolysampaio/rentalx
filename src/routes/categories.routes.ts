import { CategoriesRespository } from './../repositories/CategoriesRepository';
import { Router } from 'express';

const categoriesRoutes = Router();
const categoriesRespository = new CategoriesRespository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  categoriesRespository.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const all = categoriesRespository.list();

  return response.json(all);
});

export { categoriesRoutes };