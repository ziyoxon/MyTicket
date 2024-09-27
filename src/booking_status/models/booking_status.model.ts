import { Column, DataType, Model, Table } from "sequelize-typescript";

interface BookingStatusCreationAttr {
  name: string;
}

@Table({ tableName: "booking_status", timestamps: false })
export class BookingStatus extends Model<BookingStatus, BookingStatusCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    comment: "ID",
  })
  id: number;

  @Column({
    type: DataType.STRING,
    comment: "Name",
  })
  name: string;
}
