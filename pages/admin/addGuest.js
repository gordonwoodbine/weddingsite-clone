import { useRouter } from 'next/router';
import Form from '../../components/Form';
import axios from 'axios';
const contentType = 'application/json';

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
    dietryReqs: '',
  };

  return (
    <Form
      formId='add-guest-form'
      userData={guest}
      apiCall={createGuest}
      submitText='Add New Guest'
    />
  );
};

export default AddGuest;
