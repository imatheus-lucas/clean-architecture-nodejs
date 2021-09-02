import "dotenv/config";
import {
  createConnection,
  getConnection,
  getConnectionOptions,
  getRepository,
} from "typeorm";

export const createTypeOrmConnection = async () => {
  const connection = await getConnectionOptions(process.env.APP_MODE);

  return createConnection({ ...connection, name: "default" });
};
export const closeTypeOrmConnection = async () => {
  return await getConnection().close();
};
export const clearTypeOrmConnection = async () => {
  const connection = getConnection();
  const entities = connection.entityMetadatas;

  await Promise.all(
    entities.map(async (entity) => {
      const repository = connection.getRepository(entity.name);
      await repository.query(`DELETE FROM ${entity.tableName}`);
    })
  );
};
