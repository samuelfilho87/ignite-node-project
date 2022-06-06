import { getRepository, Repository } from "typeorm";

import { ICreateRentalDTO } from "@modules/rentals/dtos/ICreateRentalDTO";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";

import { Rental } from "../entities/Rental";

class RentalsRepository implements IRentalsRepository {
  private repository: Repository<Rental>;

  constructor() {
    this.repository = getRepository(Rental);
  }

  async findByUserId(user_id: string): Promise<Rental[]> {
    return this.repository.find({ where: { user_id }, relations: ["car"] });
  }

  async findById(id: string): Promise<Rental> {
    return this.repository.findOne({ id });
  }

  async findOpenRentalByCar(car_id: string): Promise<Rental> {
    return this.repository.findOne({ where: { car_id, end_date: null } });
  }

  async findOpenRentalByUser(user_id: string): Promise<Rental> {
    return this.repository.findOne({ where: { user_id, end_date: null } });
  }

  async create(data: ICreateRentalDTO): Promise<Rental> {
    const rental = this.repository.create(data);

    return this.repository.save(rental);
  }
}

export { RentalsRepository };
