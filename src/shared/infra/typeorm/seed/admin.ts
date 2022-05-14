import { hash } from "bcrypt";
import { createConnection } from "typeorm";
import { v4 as uuidV4 } from "uuid";

async function create() {
  const connection = await createConnection();

  const id = uuidV4();

  const password = await hash("admin", 8);

  await connection.query(`
    INSERT INTO users(id, name, email, password, "is_admin", driver_license, created_at)
    VALUES('${id}', 'admin', 'admin@rentx.com.br', '${password}', true, '1234567890' , 'now()')
  `);

  await connection.close();
}

create().then(() => console.log("User admin created."));
