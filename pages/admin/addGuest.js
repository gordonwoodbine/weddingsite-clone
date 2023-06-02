import Form from '../../components/Form';

const AddGuest = () => {
  const guest = {
    name: '',
    rsvpCode: '',
    isAttending: false,
    dietryReqs: '',
  };

  return <Form formId='add-guest-form' userData={guest} />;
};

export default AddGuest;
