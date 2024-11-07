import { Module } from "@nestjs/common";
import { UserServices } from "./user.service";
import { UserController } from "./user.controller";
import { PrismaModule } from "../prisma/prisma.module";
import { UserTokenModule } from "../userToken/userToken.module";
import { UtilModule } from "../util/util.module";



@Module({
    imports:[PrismaModule,UserTokenModule,UserTokenModule,UtilModule],
    exports:[UserServices],
    controllers:[UserController],
    providers:[UserServices]
})
export class UserModule{}