import express from 'express';
import AlertService from '@/services/AlertService';
import Alert from '@/interfaces/Alert';

const router: express.Router = express.Router();

router.post('/', async (req, res) => {
  const alert: Alert = {
    alertId: req.body.alertId,
    message: req.body.message,
    details: req.body.details,
    time: req.body.time,
    duration: req.body.duration,
    level: req.body.level,
    data: req.body.data,
    recoverable: req.body.recoverable,
  };

  await AlertService.save(alert);

  res.send('Alert saved.');
});

router.get('/', async (req, res) => {
  const alerts = await AlertService.getAlerts();
  res.send(alerts);
});

export default router;
