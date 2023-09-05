import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Form from '../../../../components/Form';
import { CircularProgress } from '@mui/material';

const EditGuest = () => {
  const [guest, setGuest] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getter = async () => {
      const res = await fetch(`http://localhost:3000/api/guests/${id}`);
      const { data } = await res.json();
      setGuest(data);
    };
    setLoading(true);
    getter();
    setLoading(false);
  }, [id]);

  return loading ? (
    <CircularProgress />
  ) : guest ? (
    <Form formId={'edit-guest-form'} userData={guest} />
  ) : null;
};

export default EditGuest;
