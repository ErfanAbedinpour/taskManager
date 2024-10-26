import { BadRequestException, Body, Controller, InternalServerErrorException, Post } from "@nestjs/common";
import { CreateUserDTO } from "./dtos/auth.dto";
import { AuthService } from "./auth.service";


@Controller('/auth')
export class AuthController{
    constructor(private readonly authService:AuthService){}
    @Post("/singup")
    register(@Body() body:CreateUserDTO){
        return this.authService.register(body)
        
    }
    @Post('/login')
    login(@Body() body:Omit<CreateUserDTO,'username'>){}
}