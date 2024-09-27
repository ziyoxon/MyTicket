import { JwtService } from "@nestjs/jwt";
import { UsersController } from "../users.controller";
import { UsersService } from "../users.service";
import { Test } from "@nestjs/testing";
import { User } from "../models/user.model";
import { CreateUserDto } from "../dto/create-user.dto";
import { userStub } from "./stubs/user.stub";

jest.mock("../users.service");

describe("Users controller", () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeAll(async () => {
    const modulRef = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, JwtService],
    }).compile();

    usersController = modulRef.get<UsersController>(UsersController);
    usersService = modulRef.get<UsersService>(UsersService);
  });

  it("Users controller should be defined", () => {
    expect(usersController).toBeDefined();
  });
  it("Users service should be defined", () => {
    expect(usersService).toBeDefined();
  });

  describe("create user", () => {
    describe("when creat user is called", () => {
      let user: User;
      let createUserDto: CreateUserDto;
      beforeAll(async () => {
        createUserDto = {
          name: userStub().name,
          email: userStub().email,
          password: userStub().password,
          role_value: userStub().role_value,
        };
        user = await usersController.create(createUserDto);
        console.log(user);
      });
      it("than it should call usersService", () => {
        expect(usersService.create).toHaveBeenCalledWith(createUserDto);
      });
      test("than it should return user", () => {
        expect(user).toEqual(userStub());
      });
    });
  });

  describe("findAll users", () => {
    describe("when findAll users is called", () => {
      let users: User[];
      beforeAll(async () => {
        users = await usersController.findAll();
        console.log(users);
      });
      it("than it should call usersService", () => {
        expect(usersService.findAll).toHaveBeenCalled();
      });
      test("than it should return users", () => {
        expect(users).toEqual(expect.arrayContaining([userStub()]));
      });
    });
  });

    describe("findOne user", () => {
      describe("when findOne user is called", () => {
        let user: User;
        const userId = userStub().id;

        beforeAll(async () => {
          user = await usersController.findOne(userId.toString());
          console.log(user);
        });
        it("then it should call usersService", () => {
          expect(usersService.findOne).toHaveBeenCalledWith(userId);
        });
        test("then it should return a user", () => {
          expect(user).toEqual(userStub());
        });
      });
    });


    describe("remove user", () => {
      describe("when remove user is called", () => {
        let result: { message: string  };
        const userId = userStub().id;

        beforeAll(async () => {
          result = await usersController.remove(userId.toString());
          console.log(result);
        });
        it("then it should call usersService", () => {
          expect(usersService.remove).toHaveBeenCalledWith(userId);
        });
        test("then it should return deletion result", () => {
          expect(result).toEqual({ message: "Foydalanuvchi o'chirildi" });
        });
      });
    });
});
