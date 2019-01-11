import Alert from '@/interfaces/Alert';
import winston from 'winston';

export default class AlertService {
  // region public static methods
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
  public save(alert: Alert) {
    // Save alert in database
    winston.info(alert);
  }
  // endregion

  // region private methods
  // endregion
}
