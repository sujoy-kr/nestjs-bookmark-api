import { Exclude } from 'class-transformer';

export class GetUserDto {
  id: number;
  email: string;
  firstName: string;
  lastName: string;

  @Exclude()
  hash: string;
}
