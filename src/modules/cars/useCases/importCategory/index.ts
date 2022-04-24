import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryUseCase } from "../createCategory/CreateCategoryUseCase";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

const importCategoryUseCase = new ImportCategoryUseCase(createCategoryUseCase);

const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
);

export { importCategoryController };
