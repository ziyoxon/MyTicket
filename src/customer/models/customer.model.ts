import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { CustomerCard } from "../../customer_card/models/customer_card.model";
import { Language } from "../../language/models/language.model";
import { CustomerAddress } from "../../customer_address/models/customer_address.model";

interface ICustomerCreationAttr{
  first_name: string;
  last_name: string;
  phone: string;
  hashed_password: string;
  email: string;
  birth_date: Date;
  gender: string;
  languageId: number;
  hashed_refresh_token: string;
}

@Table({ tableName: "customer" })
export class Customer extends Model<Customer, ICustomerCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  first_name: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  last_name: string;

  @Column({
    type: DataType.STRING(20),
  })
  phone: string;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  hashed_password: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.DATEONLY,
  })
  birth_date: Date;

  @Column({
    type: DataType.STRING(10),
  })
  gender: string;

  @ForeignKey(() => Language)
  @Column({
    type: DataType.INTEGER,
  })
  languageId: number;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  hashed_refresh_token: string;

  @BelongsTo(() => Language)
  language: Language;

  @HasMany(() => CustomerAddress)
  addresses: CustomerAddress[];

  @HasMany(()=> CustomerCard)
  cards: CustomerCard[];
}
