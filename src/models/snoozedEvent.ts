import { Document, Schema, Model, model } from 'mongoose';
import SnoozedEvent from '@/interfaces/SnoozedEvent';

export interface ISnoozedEventModel extends SnoozedEvent, Document {
}

const snoozedEventSchema = new Schema({
    createdAt: { type: Date, expires: 3600 },
    eventId: String,
});

const snoozedEventModel: Model<ISnoozedEventModel> = model('SnoozedEvent', snoozedEventSchema);

export default snoozedEventModel;
