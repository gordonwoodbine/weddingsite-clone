import { Box } from '@mui/material';

const ButtonGroup = ({ children }) => (
  <Box display='flex' justifyContent={'flex-end'}>
    {children.map((child, i) => (
      <Box mr={i === children.length - 1 ? 0 : 1} key={i}>
        {child}
      </Box>
    ))}
  </Box>
);

export default ButtonGroup;
