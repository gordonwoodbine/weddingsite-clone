import { useRouter } from 'next/router';
import axios from 'axios';
import GuestForm from '../../components/Form/GuestForm/GuestForm';

const AddGuest = () => {
  const router = useRouter();

  const createGuest = async (data) => {
    try {
      axios.post('/api/guests', data).then(() => {
        router.push('/admin');
      });
    } catch (err) {
      console.log('error', err);
    }
  };

  const guest = {
    name: '',
    inviteType: '',
    rsvpCode: '',
    isAttending: false,
    hasRsvpd: false,
    dietryReqs: '',
    additionalGuests: [],
    songRec: {
      title: '',
      artist: '',
    },
  };

  return (
    <GuestForm data={guest} apiCall={createGuest} submitText='Add New Guest' />
  );
};

export default AddGuest;
