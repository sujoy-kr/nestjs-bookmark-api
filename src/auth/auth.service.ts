import { Injectable } from '@nestjs/common';
// import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}
  async signup(dto: AuthDto) {
    const saltRounds = +(process.env.BCRYPT_SALT_ROUND || 10);
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(dto.password, salt);

    const user = await this.prismaService.user.create({
      data: {
        email: dto.email,
        hash,
      },
    });

    return user;
  }
  signin() {
    return 'This is signin';
  }
}
