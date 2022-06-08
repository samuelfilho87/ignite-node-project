import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { UsersTokensRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { DayjsProvider } from "@shared/container/providers/DateProvider/implementations/DayjsProvider";
import { IMailProvider } from "@shared/container/providers/MailProvider/IMailProvider";
import { MailProviderInMemory } from "@shared/container/providers/MailProvider/in-memory/MailProviderInMemory";
import { AppError } from "@shared/errors/AppError";

import { SendForgotPasswordMailUseCase } from "./SendForgotPasswordMailUseCase";

let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase;

let usersRepositoryInMemory: UsersRepositoryInMemory;

let usersTokensRepositoryInMemoryusers: UsersTokensRepositoryInMemory;

let dateProvider: IDateProvider;

let mailProvider: IMailProvider;

describe("Send forgot password e-mail", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();

    usersTokensRepositoryInMemoryusers = new UsersTokensRepositoryInMemory();

    dateProvider = new DayjsProvider();

    mailProvider = new MailProviderInMemory();

    sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
      usersRepositoryInMemory,
      usersTokensRepositoryInMemoryusers,
      dateProvider,
      mailProvider
    );
  });

  it("should be able to send a forgot password mail to user", async () => {
    const sendMail = jest.spyOn(mailProvider, "sendMail");

    await usersRepositoryInMemory.create({
      driver_license: "123456789",
      email: "email@test.com",
      name: "Test Name",
      password: "123456",
    });

    await sendForgotPasswordMailUseCase.execute("email@test.com");

    expect(sendMail).toHaveBeenCalled();
  });

  it("should not be able to send an mail if user not exist", async () => {
    await expect(
      sendForgotPasswordMailUseCase.execute("wrongmail@test.com")
    ).rejects.toEqual(new AppError("User does not exist."));
  });

  it("should be able to create an user token", async () => {
    const generateTokenEmail = jest.spyOn(
      usersTokensRepositoryInMemoryusers,
      "create"
    );

    await usersRepositoryInMemory.create({
      driver_license: "123456789",
      email: "email@test.com",
      name: "Test Name",
      password: "123456",
    });

    await sendForgotPasswordMailUseCase.execute("email@test.com");

    expect(generateTokenEmail).toHaveBeenCalled();
  });
});
