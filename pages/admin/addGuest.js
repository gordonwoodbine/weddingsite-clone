import { useRouter } from 'next/router';
import Form from '../../components/Form';
import axios from 'axios';
import GuestForm from '../../components/Form/GuestForm/GuestForm';
import * as yup from 'yup';

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
    songRec: {
      title: '',
      artist: '',
    },
  };

  const schema = yup.object({
    name: yup.string().required('Name is required'),
    inviteType: yup
      .string()
      .required('Please select an invite type for this guest'),
    rsvpCode: yup
      .string()
      .required('Please create an RSVP code for this guest'),
  });

  return (
    <GuestForm
      data={guest}
      schema={schema}
      apiCall={createGuest}
      submitText='Add New Guest'
    />
    // <Form
    //   formId='add-guest-form'
    //   userData={guest}
    //   apiCall={createGuest}
    //   submitText='Add New Guest'
    // />
  );
};

export default AddGuest;
