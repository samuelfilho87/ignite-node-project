import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;

let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();

    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Car1 description",
      daily_rate: 100.0,
      license_plate: "CBA-4325",
      fine_amount: 80,
      brand: "Car1Brand",
      category_id: "CaragoryId",
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Car1 description",
      daily_rate: 100.0,
      license_plate: "CBA-4325",
      fine_amount: 80,
      brand: "Car1Brand",
      category_id: "CaragoryId",
    });

    const cars = await listAvailableCarsUseCase.execute({ name: "Car1" });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Car1 description",
      daily_rate: 100.0,
      license_plate: "CBA-4325",
      fine_amount: 80,
      brand: "Car1Brand",
      category_id: "CaragoryId",
    });

    const cars = await listAvailableCarsUseCase.execute({ brand: "Car1Brand" });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category id", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Car1 description",
      daily_rate: 100.0,
      license_plate: "CBA-4325",
      fine_amount: 80,
      brand: "Car1Brand",
      category_id: "f3sd1f679879sd2312",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "f3sd1f679879sd2312",
    });

    expect(cars).toEqual([car]);
  });
});
