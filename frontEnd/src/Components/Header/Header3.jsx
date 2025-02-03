import {
  Close,
  KeyboardArrowRight,
  MenuBook,
  Window,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ElectricBikeIcon from "@mui/icons-material/ElectricBike";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Lincks from "./Lincks";

function Header3() {
  // Start Menu functions Drawer

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // theam Color Style
  const theam = useTheme();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // End Menu functions Drawer

  // Drawer and menue Content map function

  const drawerContent = [
    { title: "Home", supTitle: ["link1", "link2", "link3"] },
    { title: "Mega Menu", supTitle: ["link1", "link2", "link3"] },
    {
      title: "full screen menu",
      supTitle: ["link1", "link2", "link3"],
    },
    { title: "pages", supTitle: ["link1", "link2", "link3"] },
    { title: "user account", supTitle: ["link1", "link2", "link3"] },
    { title: "vendor account", supTitle: ["link1", "link2", "link3"] },
  ];

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: 5,
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: "222px",
            display: "flex",
            bgcolor: theam.palette.myColor.main,
            color: theam.palette.text.secondary,
          }}
        >
          <Window />

          <Typography
            variant="p"
            component="p"
            sx={{
              p: "0",
              textTransform: "capitalize",
              mx: 1,
            }}
          >
            Categores
          </Typography>

          <Box flexGrow={1} />

          <KeyboardArrowRight />
        </Button>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiPaper-root": {
              width: "220px",
              bgcolor: theam.palette.myColor.main,
            },
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeIcon fontSize="small" />
            </ListItemIcon>

            <ListItemText>Bike</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookIcon fontSize="small" />
            </ListItemIcon>

            <ListItemText>Electronics</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBook fontSize="small" />
            </ListItemIcon>

            <ListItemText>Books</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsIcon fontSize="small" />
            </ListItemIcon>

            <ListItemText>Games</ListItemText>
          </MenuItem>
        </Menu>
      </Box>

      {useMediaQuery("(min-width:1200px)") && (
        <Stack direction={"row"} alignItems={"center"} gap={"1rem"} mr={10}>
          {drawerContent.map((item, index) => (
            <Lincks key={index} title={item.title} />
          ))}
        </Stack>
      )}

      {useMediaQuery("(max-width:1200px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        sx={{
          ".MuiPaper-root , .css-hmtqcd-MuiPaper-root-MuiDrawer-paper": {
            maxHeight: "90%",
          },
        }}
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
      >
        <Box
        
        
          sx={{
            maxWidth: "380px",
            mx: "auto",
            mt: "100px",
            mb: "50px",
          }}
        >
          <Typography
         
            sx={{
              position: "relative",
              height: "40px",
            }}
          >
            <IconButton
              onClick={toggleDrawer("top", false)}
              sx={{
                position: "absolute",
                top: "0px",
                right: "5px",
                "&:hover": {
                  color: "red",
                  rotate: "180deg",
                  transition: "all 0.3s ",
                },
              }}
            >
              <Close />
            </IconButton>
          </Typography>

          {drawerContent.map((item, index) => {
            return (
              <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    ".css-yfrx4k-MuiAccordionSummary-content": {
                      my: "0",
                    },
                  }}
                >
                  <Typography component="span">{item.title}</Typography>
                </AccordionSummary>

                <AccordionDetails
                  className="padding-0"
                  sx={{
                    ".MuiList-root , .MuiList-padding": {
                      pt: "0",
                      pb: "0",
                    },
                  }}
                >
                  <List
                    sx={{
                      ".MuiButtonBase-root": {
                        p: "0",
                        width: "400px",
                      },
                    }}
                  >
                    {item.supTitle.map((item, index) => {
                      return (
                        <ListItem
                          key={index}
                          sx={{
                            ".MuiAccordionDetails-root": { py: "0" },
                            py: "0",
                          }}
                        >
                          <ListItemButton>
                            <ListItemText primary={item} />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
    </Container>
  );
}

export default Header3;
