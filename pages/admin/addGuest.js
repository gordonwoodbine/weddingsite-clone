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
    dietryReqs: '',
  };

  const schema = yup.object({
    name: yup.string().required('Name is required'),
    inviteType: yup
      .string()
      .required('Please select an invite type for this guest'),
  });

  return (
    <GuestForm data={guest} schema={schema} />
    // <Form
    //   formId='add-guest-form'
    //   userData={guest}
    //   apiCall={createGuest}
    //   submitText='Add New Guest'
    // />
  );
};

export default AddGuest;
