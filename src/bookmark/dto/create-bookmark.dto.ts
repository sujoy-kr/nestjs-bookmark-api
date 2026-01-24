import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateBookmarkDto {
  @ApiProperty({
    description: 'Title of the bookmark',
    example: 'My favorite website',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiPropertyOptional({
    description: 'Optional description of the bookmark',
    example: 'A website I use for learning programming',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'Link/URL of the bookmark',
    example: 'https://example.com',
  })
  @IsString()
  @IsNotEmpty()
  link: string;
}
