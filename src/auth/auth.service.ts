import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  /**
   *
   */
  constructor(prismaService: PrismaService) {}
  signup() {
    return 'This is signup';
  }
  signin() {
    return 'This is signin';
  }
}
