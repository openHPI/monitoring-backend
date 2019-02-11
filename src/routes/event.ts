import express from 'express';
import EventService from '@/services/EventService';

const router: express.Router = express.Router();

router.get('/:topic', async (req, res) => {
  const topic = req.params.topic;
  const minLevel = req.query['min-level'];

  const events = await EventService.getEvents(topic, minLevel);
  res.send(events);
});

export default router;
