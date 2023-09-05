import mongoose from 'mongoose';

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
  isAttending: {
    type: Boolean,
    default: false,
  },
  additionalGuests: {
    type: Number,
    default: 0,
  },
  additionalGuestNames: {
    type: Array,
    required: false,
  },
  dietryReqs: {
    type: String,
  },
});

GuestSchema.set('toJSON', {
  virtuals: true,
});

export default mongoose.models.Guest || mongoose.model('Guest', GuestSchema);
