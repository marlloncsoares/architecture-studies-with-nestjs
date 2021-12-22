import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'users', timestamps: true })
export class Users {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Date, required: true })
  birthDate: Date;

  @Prop({ type: String, required: true })
  cpf: string;

  @Prop({ type: String, required: true })
  gender: string;
}

export type UsersDocument = Users & Document;
export const UsersSchema = SchemaFactory.createForClass(Users);
