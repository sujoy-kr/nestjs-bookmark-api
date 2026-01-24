import { IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateBookmarkDto {
  @ApiPropertyOptional({
    description: 'Title of the bookmark',
    example: 'Updated title',
  })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiPropertyOptional({
    description: 'Description of the bookmark',
    example: 'Updated description',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({
    description: 'Link/URL of the bookmark',
    example: 'https://updated-example.com',
  })
  @IsString()
  @IsOptional()
  link?: string;
}
