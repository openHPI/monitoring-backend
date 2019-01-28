import express from 'express';
import AlertService from '@/services/AlertService';
import Alert from '@/interfaces/Alert';

const parseJSON = (a: string) => JSON.parse(a.replace(/&#34;/g, '"'));

const router: express.Router = express.Router();

router.post('/:category', async (req, res) => {
  const alert: Alert = {
    alertId: req.body.id,
    category: req.params.category,
    message: req.body.message,
    details: parseJSON(req.body.details),
    time: req.body.time,
    duration: req.body.duration,
    level: req.body.level,
    data: req.body.data,
    recoverable: req.body.recoverable,
  };

  await AlertService.save(alert);

  res.send('Alert saved.');
});

router.get('/:category?', async (req, res) => {
  const category = req.params.category;

  const alerts = await AlertService.getAlerts(category);
  res.send(alerts);
});

export default router;
