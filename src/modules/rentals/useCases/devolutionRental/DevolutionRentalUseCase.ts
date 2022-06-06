import { inject, injectable } from "tsyringe";

import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";

interface IRequest {
  id: string;
  user_id: string;
}

@injectable()
class DevolutionRentalUseCase {
  constructor(
    @inject("RentalRepository")
    private rentalRepository: IRentalsRepository,

    @inject("DayjsProvider")
    private dateProvider: IDateProvider,

    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute({ id, user_id }: IRequest): Promise<Rental> {
    const rental = await this.rentalRepository.findById(id);

    const car = await this.carsRepository.findById(rental.car_id);

    const minimunDaily = 1;

    const dateNow = this.dateProvider.dateNow();

    let daily = this.dateProvider.compareInDays(rental.start_dade, dateNow);

    if (daily < 1) daily = minimunDaily;

    const delay = this.dateProvider.compareInDays(
      dateNow,
      rental.expected_return_date
    );

    let total = 0;

    if (delay > 0) {
      const calculateFine = delay * car.fine_amount;

      total = calculateFine;
    }

    total += daily * car.daily_rate;

    rental.end_date = dateNow;

    rental.total = total;

    await this.rentalRepository.create(rental);

    await this.carsRepository.updateAvailable(car.id, true);

    return rental;
  }
}

export { DevolutionRentalUseCase };
