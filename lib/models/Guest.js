import mongoose from 'mongoose';

const GuestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'You must provide a guest name'],
  },
  rsvpCode: {
    type: String,
    required: [true, 'You must set an rsvp code for this guest'],
  },
  isAttending: {
    type: Boolean,
    default: false,
  },
  dietryReqs: {
    type: String,
  },
});

export default mongoose.models.Guest || mongoose.model('Guest', GuestSchema);
