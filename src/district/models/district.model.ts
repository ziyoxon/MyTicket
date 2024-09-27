import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { CustomerAddress } from "../../customer_address/models/customer_address.model";
import { Region } from "../../region/models/region.model";
import { Venue } from "../../venue/models/venue.model";

interface DistrictCreationAttr {
  name: string;
  regionId: number;
}

@Table({ tableName: "district", timestamps: false })
export class District extends Model<District, DistrictCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    comment: "ID",
  })
  id: number;

  @Column({
    type: DataType.STRING(100),
    comment: "abdullajon shakarsan shakar",
  })
  name: string;

  @ForeignKey(() => Region)
  @Column({
    type: DataType.INTEGER,
    comment: "abdullajon shakarsan shakar",
  })
  regionId: number;

  @HasMany(() => Venue)
  venues: Venue[];

  @HasMany(() => CustomerAddress)
  addresses: CustomerAddress[];

  @BelongsTo(() => Region)
  region: Region;
}
