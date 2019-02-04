import express from 'express';
import EventService from '@/services/EventService';

const router: express.Router = express.Router();

router.get('/:topic', async (req, res) => {
  const topic = req.params.topic;

  const events = await EventService.getEvents(topic);
  res.send(events);
});

export default router;
