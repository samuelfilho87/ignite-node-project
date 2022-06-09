import { container } from "tsyringe";

import { IDateProvider } from "./DateProvider/IDateProvider";
import { DayjsProvider } from "./DateProvider/implementations/DayjsProvider";
import { IMailProvider } from "./MailProvider/IMailProvider";
import { EtherealMailProvider } from "./MailProvider/implementations/EtherealMailProvider";
import { LocalStorageProvider } from "./StorageProvider/implementations/LocalStorageProvider";
import { S3StorageProvider } from "./StorageProvider/implementations/S3StorageProvider";
import { IStorageProvider } from "./StorageProvider/IStorageProvider";

container.registerSingleton<IDateProvider>("DayjsProvider", DayjsProvider);

const diskStorage = {
  local: LocalStorageProvider,
  s3: S3StorageProvider,
};

container.registerSingleton<IStorageProvider>(
  "StorageProvider",
  diskStorage[process.env.DISK]
);

container.registerInstance<IMailProvider>(
  "EtherealMailProvider",
  new EtherealMailProvider()
);
