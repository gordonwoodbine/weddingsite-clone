import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  sectionId: {
    minHeight: '100vh',
    paddingTop: '4rem',
  },
});

const Section = ({ sectionId, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.sectionId} id={sectionId}>
      {children}
    </div>
  );
};

export default Section;
