import { Document, Schema, Model, model } from 'mongoose';
import Alert from '@/interfaces/Alert';

export interface IAlertModel extends Alert, Document {
}

const alertSchema = new Schema({
    alertId: String,
    message: String,
    details: String,
    time: Date,
    duration: Number,
    level: String,
    data: Object,
    recoverable: Boolean,
});

const alertModel: Model<IAlertModel> = model('Alert', alertSchema);

export default alertModel;
