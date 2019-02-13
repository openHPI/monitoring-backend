import express from 'express';
import EventService from '@/services/EventService';
import SnoozedEvent from '@/interfaces/SnoozedEvent';

const router: express.Router = express.Router();

router.get('/:id/snooze', async (req, res) => {
  const snoozedEvent: SnoozedEvent = {
    createdAt: new Date(),
    eventId: req.params.id,
  };

  await EventService.snoozeEvent(snoozedEvent);

  res.send('Event snoozed.');
});

router.get('/:topic', async (req, res) => {
  const topic = req.params.topic;
  const minLevel = req.query['min-level'];

  const events = await EventService.getEvents(topic, minLevel);
  res.send(events);
});

export default router;
