import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('signup')
  signup(@Body() dto: any) {
    console.log(dto);
    return this.authService.signup();
  }

  @Post('signin')
  signin() {
    return this.authService.signup();
  }
}
