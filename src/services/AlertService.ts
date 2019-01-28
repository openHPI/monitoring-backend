import Alert from '@/interfaces/Alert';
import AlertModel from '@/models/alert';

export default class AlertService {
  // region public static methods
  public static async save(alert: Alert) {
    const alertModel = new AlertModel(alert);
    await alertModel.save();
  }

  public static async getAlerts(category: string): Promise<Alert[]> {
    const condition = category ? { category } : {};

    const alerts = await AlertModel.find(condition);
    return alerts;
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
