import { CategoriesRespository } from './../repositories/CategoriesRepository';


interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoryService {
  constructor(private categoriesRespository: CategoriesRespository) { }

  execute({ description, name }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRespository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category already exists');
    }

    this.categoriesRespository.create({ name, description });

  }
}