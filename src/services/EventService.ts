import axios from 'axios';
import config from '@/config';
import SnoozedEventModel from '@/models/snoozedEvent';
import SnoozedEvent from '@/interfaces/SnoozedEvent';

const parseJSON = (a: string) => JSON.parse(a.replace(/&#34;/g, '"'));

export default class EventService {
  // region public static methods
  public static async snoozeEvent(snoozedEvent: SnoozedEvent) {
    const snoozedEventModel = new SnoozedEventModel(snoozedEvent);
    await snoozedEventModel.save();
  }

  public static async getEvents(topic: string, minLevel: string = 'OK'): Promise<any> {
    try {
      const response = await axios.get(`${config.kapacitorURL}/kapacitor/v1/alerts/topics/${topic}/events?min-level=${minLevel}`);

      const responseData = response.data;

      const snoozedEvents = await SnoozedEventModel.find();

      responseData.events.forEach((event: any, index: number, events: any[]) => {
        const messageElements = event.state.message.split('@@@');

        if (messageElements.length === 3) {
          event.state.title = messageElements[0];
          event.state.subtitle = messageElements[1];
          event.state.subsubtitle = messageElements[2];
        } else {
          event.state.title = event.state.message;
          event.state.subtitle = '';
          event.state.subsubtitle = '';
        }

        event.state.details = parseJSON(event.state.details);

        if (snoozedEvents.some((snoozedEvent) => snoozedEvent.eventId === event.id)) {
          events.splice(index, 1);
        }
      });

      return responseData;
    } catch (error) {
      return error.response.data;
    }
  }
  // endregion

  // region private static methods
  // endregion

  // region public members
  // endregion

  // region private members
  // endregion

  // region constructor
  // endregion

  // region public methods
  // endregion

  // region private methods
  // endregion
}
