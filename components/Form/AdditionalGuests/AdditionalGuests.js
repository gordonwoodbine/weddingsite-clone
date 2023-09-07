import { FieldArray } from 'formik';

import AdditionalGuestsLists from './AdditionalGuestsList';
import AddAdditionalGuest from './AddAdditionalGuest';

const AdditionalGuests = ({ values }) => (
  <FieldArray
    name='additionalGuests'
    render={(arrayHelpers) => (
      <>
        <AdditionalGuestsLists values={values} arrayHelpers={arrayHelpers} />
        <AddAdditionalGuest arrayHelpers={arrayHelpers} />
      </>
    )}
  />
);

export default AdditionalGuests;
