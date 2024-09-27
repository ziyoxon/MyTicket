import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VenuePhotoService } from './venue_photo.service';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';

@Controller('venue-photo')
export class VenuePhotoController {
  constructor(private readonly venuePhotoService: VenuePhotoService) {}

  @Post('create')
  async create(@Body() createVenuePhotoDto: CreateVenuePhotoDto) {
    return this.venuePhotoService.create(createVenuePhotoDto);
  }

  @Get('all')
  async findAll() {
    return this.venuePhotoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.venuePhotoService.findOne(+id);
  }

  @Patch('update/:id')
  async update(@Param('id') id: string, @Body() updateVenuePhotoDto: UpdateVenuePhotoDto) {
    return this.venuePhotoService.update(+id, updateVenuePhotoDto);
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    return this.venuePhotoService.remove(+id);
  }
}
