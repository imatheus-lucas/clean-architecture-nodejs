import request from "supertest";
import app from "@shared/infra/http/app";

describe("UserController", () => {
  it("should be able to create a new user", async () => {
    const response = await request(app)
      .post("/v1/users")
      .send({ name: "John Doe", email: "john@email.com", password: "123456" });

    console.log(response.status);
  });
});
