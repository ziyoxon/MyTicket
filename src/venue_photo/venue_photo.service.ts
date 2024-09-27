import { Injectable } from "@nestjs/common";
import { CreateVenuePhotoDto } from "./dto/create-venue_photo.dto";
import { UpdateVenuePhotoDto } from "./dto/update-venue_photo.dto";
import { InjectModel } from "@nestjs/sequelize";
import { VenuePhoto } from "./models/venue_photo.model";

@Injectable()
export class VenuePhotoService {
  constructor(
    @InjectModel(VenuePhoto) private venuePhotoModel: typeof VenuePhoto
  ) {}
  async create(createVenuePhotoDto: CreateVenuePhotoDto) {
    return this.venuePhotoModel.create(createVenuePhotoDto);
  }

  async findAll() {
    return this.venuePhotoModel.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return this.venuePhotoModel.findOne({
      where: { id },
      include: { all: true },
    });
  }

  async update(id: number, updateVenuePhotoDto: UpdateVenuePhotoDto) {
    const venue_photo = await this.venuePhotoModel.update(updateVenuePhotoDto,{where: {id},returning:true})
    return venue_photo[1][0];
  }

  async remove(id: number) {
    return this.venuePhotoModel.destroy({where:{id}});
  }
}
