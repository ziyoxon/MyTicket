import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Customer } from "../../customer/models/customer.model";

interface ICustomerCardCreationAttr{
  customerId: number;
  name: string;
  phone: string;
  number: string;
  year: string;
  month: string;
  is_active: boolean;
  is_main: boolean;
}


@Table({tableName: "customer_card"})
export class CustomerCard extends Model<CustomerCard,ICustomerCardCreationAttr>{
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(()=> Customer)
  @Column({
    type: DataType.INTEGER,
  })
  customerId: number;

  @Column({
    type: DataType.STRING(255),
  })
  name: string;

  @Column({
    type: DataType.STRING(255),
  })
  phone: string;

  @Column({
    type: DataType.STRING(255),
  })
  number: string;

  @Column({
    type: DataType.STRING(255),
  })
  year: string;

  @Column({
    type: DataType.STRING(255),
  })
  month: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_main: boolean;


  @BelongsTo(()=> Customer)
  customer: Customer;
}
