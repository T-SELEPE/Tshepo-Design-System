import React from 'react';
// Import commonly used Material UI icons
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckIcon from '@mui/icons-material/Check';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

// Export a mapping object of Material UI icons
export const MaterialIcons = {
  // Alert/Feedback icons
  AlertCircle: (props) => <InfoOutlinedIcon {...props} />,
  AlertTriangle: (props) => <WarningAmberIcon {...props} />,
  CheckCircle: (props) => <CheckCircleOutlineIcon {...props} />,
  XCircle: (props) => <ErrorOutlineIcon {...props} />,
  X: (props) => <CloseIcon {...props} />,
  
  // Rating icons
  Star: ({ filled, ...props }) => (
    filled ? <StarIcon {...props} /> : <StarBorderIcon {...props} />
  ),
  
  // Toggle/Counter icons
  Plus: (props) => <AddIcon {...props} />,
  Minus: (props) => <RemoveIcon {...props} />,
  
  // Checkbox/Radio icons
  Check: (props) => <CheckIcon {...props} />,
  CheckBox: (props) => <CheckBoxIcon {...props} />,
  CheckBoxEmpty: (props) => <CheckBoxOutlineBlankIcon {...props} />,
  RadioChecked: (props) => <RadioButtonCheckedIcon {...props} />,
  RadioUnchecked: (props) => <RadioButtonUncheckedIcon {...props} />,
  
  // Dropdown/Accordion icons
  ChevronDown: (props) => <KeyboardArrowDownIcon {...props} />,
  ChevronRight: (props) => <KeyboardArrowRightIcon {...props} />,
  ExpandMore: (props) => <ExpandMoreIcon {...props} />,
  ExpandLess: (props) => <ExpandLessIcon {...props} />,
};

export default MaterialIcons; 