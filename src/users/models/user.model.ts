import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Roles } from "../../roles/models/roles.model";
import { UserRoles } from "./user-role.model";

interface IUserCreationAttr{
  name: string;
  email: string;
  password: string;
  role_value: string;
}

@Table({tableName: "users"})
export class User extends Model<User, IUserCreationAttr>{
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
  })
  password: string;

  @Column({
    type: DataType.STRING,
  })
  role_value: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;


  @BelongsToMany(()=>Roles, ()=> UserRoles)
  roles: Roles[];
}
