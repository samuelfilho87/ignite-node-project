import { ICreateCarImagesDTO } from "../dtos/ICreateCarImagesDTO";
import { CarImage } from "../infra/typeorm/entities/CarImage";

interface ICarImagesRepository {
  create(data: ICreateCarImagesDTO): Promise<CarImage>;
}

export { ICarImagesRepository };
