import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { EventType } from "../../event_type/models/event_type.model";
import { HumanCategory } from "../../human_category/models/human_category.model";
import { Language } from "../../language/models/language.model";
import { Ticket } from "../../ticket/models/ticket.model";
import { Venue } from "../../venue/models/venue.model";

interface IEventCreationAttr {
  name: string;
  photo: string;
  start_date: Date;
  start_time: Date;
  finish_date: Date;
  finish_time: Date;
  info: string;
  event_typeId: number;
  human_categoryId: number;
  venueId: number;
  languageId: number;
  release_date: Date;
}

@Table({ tableName: "event" })
export class Event extends Model<Event, IEventCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    comment: "ID",
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  photo: string;

  @Column({
    type: DataType.DATEONLY,
  })
  start_date: Date;

  @Column({
    type: DataType.TIME,
  })
  start_time: Date;

  @Column({
    type: DataType.DATEONLY,
  })
  finish_date: Date;

  @Column({
    type: DataType.TIME,
  })
  finish_time: Date;

  @Column({
    type: DataType.TEXT,
  })
  info: string;

  @ForeignKey(() => EventType)
  @Column({
    type: DataType.INTEGER,
  })
  event_typeId: number;

  @ForeignKey(() => HumanCategory)
  @Column({
    type: DataType.INTEGER,
  })
  human_categoryId: number;

  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
  })
  venueId: number;

  @ForeignKey(() => Language)
  @Column({
    type: DataType.INTEGER,
  })
  languageId: number;

  @Column({
    type: DataType.DATEONLY,
  })
  release_date: Date;

  @HasMany(() => Ticket)
  tickets: Ticket[];

  @BelongsTo(() => EventType)
  eventType: EventType;

  @BelongsTo(() => HumanCategory)
  humanCategory: HumanCategory;

  @BelongsTo(() => Venue)
  venue: Venue;

  @BelongsTo(() => Language)
  language: Language;
}
