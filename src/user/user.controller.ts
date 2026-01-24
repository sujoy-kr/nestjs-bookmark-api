import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import type { User } from '@prisma/client';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';
import { EditUserDto, GetUserDto } from './dto';
import { plainToInstance } from 'class-transformer';
@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiBearerAuth('jwt')
  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@GetUser() user: User) {
    return plainToInstance(GetUserDto, user);
  }

  @ApiBearerAuth('jwt')
  @UseGuards(JwtGuard)
  @Patch('me')
  patchUser(@GetUser('id') userId: number, @Body() updateDto: EditUserDto) {
    return this.userService.updateUser(userId, updateDto);
  }
}
