import express from 'express';
import EventService from '@/services/EventService';
import SnoozedEvent from '@/interfaces/SnoozedEvent';

const router: express.Router = express.Router();

router.post('/snooze', async (req, res) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + req.body.days);

  const snoozedEvent: SnoozedEvent = {
    expirationDate,
    eventId: req.body.eventId,
  };

  await EventService.snoozeEvent(snoozedEvent);

  res.send('Event snoozed.');
});

router.post('/unsnooze', async (req, res) => {
  const eventId = req.body.eventId;

  await EventService.unsnoozeEvent(eventId);

  res.send('Event unsnoozed.');
});

router.get('/:topic', async (req, res) => {
  const topic = req.params.topic;
  const minLevel = req.query['min-level'];

  const events = await EventService.getEvents(topic, minLevel);
  res.send(events);
});

export default router;
