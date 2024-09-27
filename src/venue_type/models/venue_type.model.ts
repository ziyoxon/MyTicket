import { BelongsToMany, Column, DataType, Model, Table,  } from "sequelize-typescript";
import { Venue } from "../../venue/models/venue.model";
import { VenueVenueType } from "../../venue_venue_type/models/venue_venue_type.model";

interface VenueTypeAttr {
  name: string;
}

@Table({tableName: "venue_type"})
export class VenueType extends Model<VenueType, VenueTypeAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    comment: "ID",
  })
  id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    unique: true,
  })
  name: string;


  @BelongsToMany(() => Venue, () => VenueVenueType)
  venues: Venue[];

}
