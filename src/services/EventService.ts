import axios from 'axios';
import config from '@/config';

const parseJSON = (a: string) => JSON.parse(a.replace(/&#34;/g, '"'));

export default class EventService {
  // region public static methods
  public static async getEvents(topic: string, minLevel: string): Promise<any> {
    try {
      const response = await axios.get(`${config.kapacitorURL}/kapacitor/v1/alerts/topics/${topic}/events?min-level=${minLevel}`);

      const responseData = response.data;

      responseData.events.forEach((event: any) => {
        event.state.details = parseJSON(event.state.details);
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
