import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllCategories = container.resolve(ListCategoriesUseCase);

    const all = await listAllCategories.execute();

    return response.json(all);
  }
}

export { ListCategoriesController };
