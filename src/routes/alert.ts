import express from 'express';
import AlertService from '@/services/AlertService';

const router: express.Router = express.Router();

router.get('/:topic', async (req, res) => {
  const topic = req.params.topic;

  const alerts = await AlertService.getAlerts(topic);
  res.send(alerts);
});

export default router;
