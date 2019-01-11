import express from 'express';
import AlertService from '@/services/AlertService';
import Alert from '@/interfaces/Alert';

const router: express.Router = express.Router();
const alertService: AlertService = new AlertService();

router.post('/', (req, res) => {
  const alert: Alert = {
    content: req.body,
  };

  alertService.save(alert);

  res.send('Alert saved.');
});

export default router;
