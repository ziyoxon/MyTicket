import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { UsersModule } from "../users/users.module";
import { AdminModule } from "../admin/admin.module";

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: "MySecretKey",
      signOptions: { expiresIn: "1h" },
    }),AdminModule
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports:[JwtModule]
})
export class AuthModule {}
