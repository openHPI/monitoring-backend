import { Document, Schema, Model, model } from 'mongoose';
import SnoozedEvent from '@/interfaces/SnoozedEvent';

export interface ISnoozedEventModel extends SnoozedEvent, Document {
}

const snoozedEventSchema = new Schema({
    expirationDate: { type: Date, expires: 1 },
    eventId: String,
});

const snoozedEventModel: Model<ISnoozedEventModel> = model('SnoozedEvent', snoozedEventSchema);

export default snoozedEventModel;
