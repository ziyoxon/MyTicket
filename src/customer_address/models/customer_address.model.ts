import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Country } from "../../country/models/country.model";
import { Customer } from "../../customer/models/customer.model";
import { District } from "../../district/models/district.model";
import { Region } from "../../region/models/region.model";

interface ICustomerAdressCreationAttr{
  customerId: number;
  name: string;
  countryId: number;
  regionId: number;
  districtId: number;
  street: string;
  house: string;
  flat: number;
  location: string;
  post_index: string;
  info: string;
}

@Table({ tableName: "customer_address", timestamps: false })
export class CustomerAddress extends Model<
  CustomerAddress,
  ICustomerAdressCreationAttr
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
  })
  customerId: number;

  @Column({
    type: DataType.STRING(100),
  })
  name: string;

  @ForeignKey(()=>Country)
  @Column({
    type: DataType.INTEGER,
  })
  countryId: number;

  @ForeignKey(() => Region)
  @Column({
    type: DataType.INTEGER,
  })
  regionId: number;

  @ForeignKey(() => District)
  @Column({
    type: DataType.INTEGER,
  })
  districtId: number;

  @Column({
    type: DataType.STRING(100),
  })
  street: string;

  @Column({
    type: DataType.STRING(100),
  })
  house: string;

  @Column({
    type: DataType.INTEGER,
  })
  flat: number;

  @Column({
    type: DataType.STRING(100),
  })
  location: string;

  @Column({
    type: DataType.STRING(10),
  })
  postIndex: string;

  @Column({
    type: DataType.TEXT,
  })
  info: string;

  @BelongsTo(() => Customer)
  customer: Customer;

  @BelongsTo(() => Region)
  region: Region;

  @BelongsTo(() => District)
  district: District;

  
}
