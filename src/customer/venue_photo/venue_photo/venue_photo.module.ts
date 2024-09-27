import { Module } from '@nestjs/common';
import { VenuePhotoService } from './venue_photo.service';
import { VenuePhotoController } from './venue_photo.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { VenuePhoto } from './models/venue_photo.model';
import { FileModule } from '../../file/file/file.module';

@Module({
  imports:[SequelizeModule.forFeature([VenuePhoto]), FileModule],
  controllers: [VenuePhotoController],
  providers: [VenuePhotoService],
})
export class VenuePhotoModule {}
