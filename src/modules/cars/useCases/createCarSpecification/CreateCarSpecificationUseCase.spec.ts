import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { SpecificationsRepositoryInMemory } from "@modules/cars/repositories/in-memory/SpecificationsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;

let carsRepositoryInMemory: CarsRepositoryInMemory;

let specificationsRepositoryInMemory: SpecificationsRepositoryInMemory;

describe("Create Car Specification", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();

    specificationsRepositoryInMemory = new SpecificationsRepositoryInMemory();

    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carsRepositoryInMemory,
      specificationsRepositoryInMemory
    );
  });

  it("should be able to add a new specification to the car", async () => {
    const carCreated = await carsRepositoryInMemory.create({
      name: "Name Car",
      description: "Description car",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });

    const specification = await specificationsRepositoryInMemory.create({
      description: "teste",
      name: "test",
    });

    const specifications_id = [specification.id];

    const carCreateSpecifications = await createCarSpecificationUseCase.execute(
      {
        car_id: carCreated.id,
        specifications_id,
      }
    );

    expect(carCreateSpecifications).toHaveProperty("specifications");
    expect(carCreateSpecifications.specifications.length).toBe(1);
  });

  it("should not be able to add a new specification to a non-existent car", async () => {
    const car_id = "132456";

    const specifications_id = ["654321"];

    await expect(
      createCarSpecificationUseCase.execute({
        car_id,
        specifications_id,
      })
    ).rejects.toEqual(new AppError("Car does not exists."));
  });
});
