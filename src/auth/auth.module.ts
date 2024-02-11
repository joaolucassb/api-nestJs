import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [JwtModule.register({
        secret: "7#8k?R_[JWDzKlc34?W7j2@C&5V,#[Iq"
    })]
})
export class AuthModule {}