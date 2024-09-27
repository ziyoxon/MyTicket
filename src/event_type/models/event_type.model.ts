import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Event } from "../../event/models/event.model";

interface IEventTypeCreationAttr{
  name: string;
  parent_event_typeId: number;
}

@Table({tableName: "event_type"})
export class EventType extends Model<EventType,IEventTypeCreationAttr>{
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    comment: "ID"
  })
  id: number;

  @Column({
    type: DataType.STRING(100),
  })
  name: string;

  @ForeignKey(()=>EventType)
  @Column({
    type: DataType.INTEGER,
  })
  parent_event_typeId: number;

  @BelongsTo(()=>EventType)
  parentEventType: EventType;

  @HasMany(()=>Event)
  events: Event[];
}
