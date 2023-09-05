import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const questions = [
  {
    id: 1,
    question: 'Are there rooms available?',
    answer:
      'Rooms are available to book directly with the hotel, please call them on 01977 6204440 to reserve your room. Please disclose you are attending the wedding for a discounted rate.',
  },
  {
    id: 2,
    question: 'What time should I arrive?',
    answer:
      'Guests invited to join us for the full day should please arrive by 13:00 at the latest, ready for a prompt start to the cermemony at 13:30. See our timeline page for more details of the day. Evening guests are invited to arrive from 19:00.',
  },
  {
    id: 3,
    question: 'When should I RSVP?',
    answer:
      'Please RSVP using the RSVP code on your invite by ______. Any RSVPs received after this date may not be able to be accomodated.',
  },
  {
    id: 4,
    question: 'Where is the ceremony taking place?',
    answer:
      'The cermony is taking place at Wentbridge House Hotel. Please note that we have planned to hold the ceremony outside.',
  },
  {
    id: 5,
    question: 'Is there a dress code?',
    answer:
      'Guests are invited to dress up with us, please wear your best cocktail/formal attire.',
  },
  {
    id: 6,
    question: 'Do you have a gift list/registry?',
    answer:
      'Your attendance at our special day is all we ask. If you do wish to honour us with a gift, a contribution to our honeymoon excursions would be kindly received.',
  },
  // {
  //   id: 7,
  //   question: '',
  //   answer: '',
  // },
  // {
  //   id: 8,
  //   question: '',
  //   answer: '',
  // },
  // {
  //   id: 9,
  //   question: '',
  //   answer: '',
  // },
];

const Faq = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {questions.map((e, i) => (
        <Accordion
          key={e.id}
          expanded={expanded === e.question}
          onChange={handleChange(e.question)}
          sx={{ marginTop: 1 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography>{e.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{e.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
export default Faq;
