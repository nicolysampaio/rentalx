import { Router } from 'express';
import { CreateCategoryService } from './../services/CreateCategoryService';
import { CategoriesRespository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRespository = new CategoriesRespository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRespository);

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const all = categoriesRespository.list();

  return response.json(all);
});

export { categoriesRoutes };