import {
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useContext } from "react";
import {
  DarkModeOutlined,
  ExpandMore,
  Facebook,
  Instagram,
  LightModeOutlined,
  X,
} from "@mui/icons-material";
import { ColorModeContext } from "../../theam";
import Sohial from "./Sohial";

const options = ["AR", "En"];

function Header1() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        bgcolor: "#283445",
        borderBottomLeftRadius: "4px",
        borderBottomRightRadius: "4px",
        boxShadow: `1px 1px 10px ${
          theme.palette.mode === "dark" ? theme.palette.grey[800] : "#000"
        } `,
      }}
    >
      <Container
        sx={{
          maxWidth: { xl: "1440px" },
        }}
      >
        <Stack direction={"row"} sx={{ alignItems: "center" }}>
          <Typography
            variant="p"
            component="p"
            sx={{
              color: "#fff",
              bgcolor: "#e91e63",
              px: "10px",
              m: 1,
              borderRadius: 3,
            }}
          >
            Hot
          </Typography>

          <Typography
            variant="p"
            component="p"
            sx={{
              color: "#fff",
              px: "10px",
              m: 1,
            }}
          >
            Free Ecommerse Shoping{" "}
          </Typography>

          <Box sx={{ flexGrow: "1" }} />




          {useMediaQuery("(max-width:600px)") && (
            <Stack
            
            sx={{
              alignItems: "center",
              flexDirection: "row",
            }}
            
            >
              {theme.palette.mode === "light" ? (
                <IconButton
                  sx={{ color: "#fff" }}
                  onClick={() => {
                    localStorage.setItem(
                      "mode",
                      theme.palette.mode === "dark" ? "light" : "dark"
                    );
                    colorMode.toggleColorMode();
                  }}
                  color="inherit"
                >
                  <LightModeOutlined sx={{ fontSize: "16px" }} />
                </IconButton>
              ) : (
                <IconButton
                  onClick={() => {
                    localStorage.setItem(
                      "mode",
                      theme.palette.mode === "dark" ? "light" : "dark"
                    );
                    colorMode.toggleColorMode();
                  }}
                  color="inherit"
                >
                  <DarkModeOutlined sx={{ fontSize: "16px" }} />
                </IconButton>
              )}

<List component="nav" aria-label="Device settings" sx={{}}>
                  <ListItem
                    sx={{ cursor: "pointer" }}
                    id="lock-button"
                    aria-haspopup="listbox"
                    aria-controls="lock-menu"
                    aria-label="when device is locked"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClickListItem}
                  >
                    <ListItemText
                      sx={{ ".MuiTypography-root": { color: "#fff" } }}
                      secondary={options[selectedIndex]}
                    />

                    <ExpandMore sx={{ color: "#fff" }} />
                  </ListItem>
                </List>

                <Menu
                  id="lock-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "lock-button",
                    role: "listbox",
                  }}
                >
                  {options.map((option, index) => (
                    <MenuItem
                      sx={{
                        fontSize: "14px",
                        py: "8px",
                        px: "15px",
                      }}
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Menu>

              <Sohial />
            </Stack>
          )}




          {useMediaQuery("(min-width:600px)") && (
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Stack direction="row" alignItems={"center"} gap={1}>
                <div>
                  <div>
                    {theme.palette.mode === "light" ? (
                      <IconButton
                        sx={{ color: "#fff" }}
                        onClick={() => {
                          localStorage.setItem(
                            "mode",
                            theme.palette.mode === "dark" ? "light" : "dark"
                          );
                          colorMode.toggleColorMode();
                        }}
                        color="inherit"
                      >
                        <LightModeOutlined sx={{ fontSize: "16px" }} />
                      </IconButton>
                    ) : (
                      <IconButton
                        onClick={() => {
                          localStorage.setItem(
                            "mode",
                            theme.palette.mode === "dark" ? "light" : "dark"
                          );
                          colorMode.toggleColorMode();
                        }}
                        color="inherit"
                      >
                        <DarkModeOutlined sx={{ fontSize: "16px" }} />
                      </IconButton>
                    )}
                  </div>
                </div>

                <List component="nav" aria-label="Device settings" sx={{}}>
                  <ListItem
                    sx={{ cursor: "pointer" }}
                    id="lock-button"
                    aria-haspopup="listbox"
                    aria-controls="lock-menu"
                    aria-label="when device is locked"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClickListItem}
                  >
                    <ListItemText
                      sx={{ ".MuiTypography-root": { color: "#fff" } }}
                      secondary={options[selectedIndex]}
                    />

                    <ExpandMore sx={{ color: "#fff" }} />
                  </ListItem>
                </List>

                <Menu
                  id="lock-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "lock-button",
                    role: "listbox",
                  }}
                >
                  {options.map((option, index) => (
                    <MenuItem
                      sx={{
                        fontSize: "14px",
                        py: "8px",
                        px: "15px",
                      }}
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Menu>

                <X
                  sx={{
                    fontSize: "14px",
                    color: "#fff",
                    m: 1,
                    "&:hover": { cursor: "pointer" },
                  }}
                />

                <Facebook
                  sx={{
                    fontSize: "14px",
                    color: "#fff",
                    m: 1,
                    "&:hover": { cursor: "pointer" },
                  }}
                />

                <Instagram
                  sx={{
                    fontSize: "14px",
                    color: "#fff",
                    m: 1,
                    "&:hover": { cursor: "pointer" },
                  }}
                />
              </Stack>
            </Box>
          )}


        </Stack>
      </Container>
    </Box>
  );
}

export default Header1;
