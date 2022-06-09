import { inject, injectable } from "tsyringe";

import { CarImagesRepository } from "@modules/cars/infra/typeorm/repositories/CarImagesRepository";
import { IStorageProvider } from "@shared/container/providers/StorageProvider/IStorageProvider";

interface IRequest {
  car_id: string;
  images_name: string[];
}

@injectable()
class UploadCarImagesUseCase {
  constructor(
    @inject("CarImagesRepository")
    private carImagesRepository: CarImagesRepository,

    @inject("StorageProvider")
    private storageProvider: IStorageProvider
  ) {}

  async execute({ car_id, images_name }: IRequest): Promise<void> {
    images_name.forEach(async (image_name) => {
      await this.carImagesRepository.create({ car_id, image_name });

      await this.storageProvider.save(image_name, "car");
    });
  }
}

export { UploadCarImagesUseCase };
