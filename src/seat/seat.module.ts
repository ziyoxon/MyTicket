import { Module } from '@nestjs/common';
import { SeatService } from './seat.service';
import { SeatController } from './seat.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Seat } from './models/seat.model';

@Module({
  imports: [SequelizeModule.forFeature([Seat])],
  exports: [SeatService],
  controllers: [SeatController],
  providers: [SeatService],
})
export class SeatModule {}
