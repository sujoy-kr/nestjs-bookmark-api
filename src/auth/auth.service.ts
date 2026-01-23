import { ForbiddenException, Injectable } from '@nestjs/common';
// import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import bcrypt from 'bcryptjs';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}
  async signup(dto: AuthDto) {
    const saltRounds = +(process.env.BCRYPT_SALT_ROUND || 10);
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(dto.password, salt);

    try {
      const user = await this.prismaService.user.create({
        data: {
          email: dto.email,
          hash,
        },
      });

      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Email already exists');
        }
      }
      throw error;
    }
  }
  async signin(dto: AuthDto) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user) {
      throw new ForbiddenException('Incorrect credentials');
    }

    const passMatch = await bcrypt.compare(dto.password, user.hash);

    if (!passMatch) {
      throw new ForbiddenException('Incorrect credentials');
    }

    return user;
  }
}
