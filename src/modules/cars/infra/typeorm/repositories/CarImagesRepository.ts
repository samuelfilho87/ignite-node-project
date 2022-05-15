import { getRepository, Repository } from "typeorm";

import { ICreateCarImagesDTO } from "@modules/cars/dtos/ICreateCarImagesDTO";
import { ICarImagesRepository } from "@modules/cars/repositories/ICarImagesRepository";

import { CarImage } from "../entities/CarImage";

class CarImagesRepository implements ICarImagesRepository {
  private repository: Repository<CarImage>;

  constructor() {
    this.repository = getRepository(CarImage);
  }

  async create(data: ICreateCarImagesDTO): Promise<CarImage> {
    const carImage = this.repository.create(data);

    await this.repository.save(carImage);

    return carImage;
  }
}

export { CarImagesRepository };
