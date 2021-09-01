import HttpError from "@shared/errors/HttpError";
import FakeUserRepository from "../repositories/FakeUserRepository";
import CreateUserService from "../services/CreateUserService";

let fakeUsersRepository: FakeUserRepository;
let createUserService: CreateUserService;
describe("CreateUser", () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUserRepository();
    createUserService = new CreateUserService(fakeUsersRepository);
  });

  it("should be able to create a new user", async () => {
    const user = await createUserService.execute({
      name: "John Doe",
      email: "john@example.com",
      password: "123456",
    });
    expect(user).toHaveProperty("id");
  });

  it("should not be able to create a new user with same email", async () => {
    await createUserService.execute({
      name: "John Doe",
      email: "john@example.com",
      password: "123456",
    });

    await expect(
      createUserService.execute({
        name: "John Doe",
        email: "john@example.com",
        password: "123456",
      })
    ).rejects.toBeInstanceOf(HttpError);
  });
});
