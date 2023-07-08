import { Box } from '@mui/material';

const Section = ({ sectionId, children }) => {
  return (
    <Box id={sectionId} sx={{ minHeight: '100vh', paddingTop: '4rem' }}>
      {children}
    </Box>
  );
};

export default Section;
