import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { GetUser } from 'src/auth/decorator';
import { CreateBookmarkDto, UpdateBookmarkDto } from './dto';
import { JwtGuard } from 'src/auth/guard';
import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('Bookmarks')
@Controller('bookmark')
export class BookmarkController {
  constructor(private readonly bookmarkService: BookmarkService) {}

  @ApiBearerAuth('jwt')
  @UseGuards(JwtGuard)
  @Get()
  @ApiOperation({ summary: 'Get all bookmarks for the logged-in user' })
  @ApiResponse({ status: 200, description: 'List of bookmarks returned' })
  async getBookmarks(@GetUser('id') userId: number) {
    return await this.bookmarkService.getBookmarks(userId);
  }

  @ApiBearerAuth('jwt')
  @UseGuards(JwtGuard)
  @Get(':id')
  @ApiOperation({ summary: 'Get a bookmark by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'Bookmark ID' })
  @ApiResponse({ status: 200, description: 'Bookmark returned successfully' })
  async getBookmarkById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) bookmarkId: number,
  ) {
    return await this.bookmarkService.getBookmarkById(userId, bookmarkId);
  }

  @ApiBearerAuth('jwt')
  @UseGuards(JwtGuard)
  @Post()
  @ApiOperation({ summary: 'Create a new bookmark' })
  @ApiBody({ type: CreateBookmarkDto })
  @ApiResponse({ status: 201, description: 'Bookmark created successfully' })
  async createBookmark(
    @GetUser('id') userId: number,
    @Body() createDto: CreateBookmarkDto,
  ) {
    return await this.bookmarkService.createBookmark(userId, createDto);
  }

  @ApiBearerAuth('jwt')
  @UseGuards(JwtGuard)
  @Patch(':id')
  @ApiOperation({ summary: 'Update a bookmark by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'Bookmark ID' })
  @ApiBody({ type: UpdateBookmarkDto })
  @ApiResponse({ status: 200, description: 'Bookmark updated successfully' })
  async editBookmarkById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) bookmarkId: number,
    @Body() updateDto: UpdateBookmarkDto,
  ) {
    return await this.bookmarkService.editBookmarkById(
      bookmarkId,
      userId,
      updateDto,
    );
  }

  @ApiBearerAuth('jwt')
  @UseGuards(JwtGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a bookmark by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'Bookmark ID' })
  @ApiResponse({ status: 200, description: 'Bookmark deleted successfully' })
  async deleteBookmarkById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) bookmarkId: number,
  ) {
    return await this.bookmarkService.deleteBookmarkById(userId, bookmarkId);
  }
}
