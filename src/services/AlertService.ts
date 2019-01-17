import Alert from '@/interfaces/Alert';
import AlertModel from '@/models/alert';

export default class AlertService {
  // region public static methods
  public static async save(alert: Alert) {
    const alertModel = new AlertModel(alert);
    await alertModel.save();
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
