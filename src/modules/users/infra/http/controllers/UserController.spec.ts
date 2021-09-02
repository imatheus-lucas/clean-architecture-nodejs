import request from "supertest";
import app from "@shared/infra/http/app";
import {
  clearTypeOrmConnection,
  closeTypeOrmConnection,
  createTypeOrmConnection,
} from "@shared/infra/typeorm";

import { container } from "tsyringe";
import UserRepository from "@modules/users/repositories/UserRepository";

beforeAll(async () => {
  await createTypeOrmConnection();
});

afterAll(async () => {
  await clearTypeOrmConnection();
});

beforeEach(async () => {
  await clearTypeOrmConnection();
});

describe("UserController", () => {
  it("should be able to create a new user", async () => {
    const response = await request(app)
      .post("/v1/users")
      .send({ name: "usetTest", email: "test@test.com", password: "123456" });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toBe("usetTest");
    expect(response.body.email).toBe("test@test.com");

    expect(response.body.password).not.toBe("123456");
  });
});
