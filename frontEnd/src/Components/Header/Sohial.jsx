import { Box , SpeedDial } from "@mui/material";

import { styled } from "@mui/material/styles";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import {
  Facebook,
  Instagram,
 
  X,
} from "@mui/icons-material";


const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "absolute",
  "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

function Sohial() {
 

  const actions = [
    {
      icon: <X />,
      name: "twitter",
    },
    {
      icon: <Facebook />,
      name: "facebook",
    },
    {
      icon: <Instagram />,
      name: "instagram",
    },
  ];

  return (
    <Box
      sx={{
        transform: "translateZ(0px)",
        flexGrow: 1,
        zIndex: "3",

        position: "fixed",
        bottom: "100px",
        right: "16px",
      }}
    >
      <Box sx={{ position: "relative", mt: 3 }}>
        <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
          icon={<SpeedDialIcon />}
          sx={{
            position: "sticky",
          }}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </StyledSpeedDial>
      </Box>
    </Box>
  );
}

export default Sohial;
