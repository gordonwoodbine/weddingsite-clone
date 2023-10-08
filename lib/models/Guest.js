import mongoose from 'mongoose';

const SongSchema = new mongoose.Schema({
  title: String,
  artist: String,
});

const GuestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'You must provide a guest name'],
  },
  inviteType: {
    type: String,
    required: [true, 'You must provide an invite type for this guest'],
  },
  rsvpCode: {
    type: String,
    required: [true, 'You must set an rsvp code for this guest'],
  },
  hasRsvpd: {
    type: Boolean,
    default: false,
  },
  isAttending: Boolean,
  additionalGuests: {
    type: Array,
  },
  dietryReqs: {
    type: String,
  },
  songRec: SongSchema,
});

GuestSchema.set('toJSON', {
  virtuals: true,
});

export default mongoose.models.Guest || mongoose.model('Guest', GuestSchema);
