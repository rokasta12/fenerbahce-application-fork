import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import entities from "./entities";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: "postgres",
                host: configService.get("DATABASE_HOST"),
                port: configService.get("DATABASE_PORT"),
                username: configService.get("DATABASE_USERNAME"),
                password: configService.get("DATABASE_PASSWORD"),
                database: configService.get("DATABASE_NAME"),
                entities: entities,
                synchronize: true,
            }),
        }),
    ],
})
export class DatabaseModule {}
