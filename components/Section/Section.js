import { Box } from '@mui/material';

const Section = ({ sectionId, children }) => {
  const style = {
    minHeight: '100vh',
    paddingTop: '4rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <Box id={sectionId} sx={style}>
      {children}
    </Box>
  );
};

export default Section;
