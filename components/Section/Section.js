import { Box } from '@mui/material';

const Section = ({ sectionId, children }) => {
  const style = {
    minHeight: '100vh',
    paddingTop: '4rem',
  };

  return (
    <Box id={sectionId} sx={style}>
      {children}
    </Box>
  );
};

export default Section;
