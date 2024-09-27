import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { SeatType } from "./models/seat_type.model";
import { CreateSeatTypeDto } from "./dto/create-seat_type.dto";
import { UpdateSeatTypeDto } from "./dto/update-seat_type.dto";

@Injectable()
export class SeatTypeService {
  constructor(@InjectModel(SeatType) private seatTypeModel: typeof SeatType) {}

  async createSeatType(
    createSeatTypeDto: CreateSeatTypeDto
  ): Promise<SeatType> {
    const seat_type = await this.seatTypeModel.create(createSeatTypeDto);
    return seat_type;
  }

  async getAllSeatTypes(): Promise<SeatType[]> {
    return this.seatTypeModel.findAll();
  }

  async getSeatTypeById(id: number): Promise<SeatType> {
    return this.seatTypeModel.findByPk(id);
  }

  async updateSeatType(id: number,updateSeatTypeDto: UpdateSeatTypeDto): Promise<SeatType> {
    const seat_type = await this.seatTypeModel.update(updateSeatTypeDto, {
      where: { id },
      returning: true,
    });
    return seat_type[1][0];
  }

  async deleteSeatType(id: number): Promise<number> {
    return this.seatTypeModel.destroy({where: {id}});
  }
}
