import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const questions = [
  {
    id: 1,
    question: 'FAQ 1',
    answer: 'FAQ 1 Answer',
  },
  {
    id: 2,
    question: 'FAQ 2',
    answer: 'FAQ 2 Answer',
  },
  {
    id: 3,
    question: 'FAQ 3',
    answer: 'FAQ 3 Answer',
  },

];

const Faq = () => {

  const [expanded, setExpanded] = useState(false);


  const handleChange =
    (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      {questions.map((e, i) => (
        <Accordion key={e.id} expanded={expanded === e.question} onChange={handleChange(e.question)} sx={{ marginTop: 1 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{e.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {e.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
export default Faq;
