/* eslint-disable array-callback-return */
import { ExpandMore } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const lincks = [
  { link: "Link1" },
  { link: "Link2" },
  { link: "Link3", supLinks: ["link1.1", "link1.2", "link1.3"] },
  { link: "Link4" },
];

function Lincks({ title }) {
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          ":hover .show-links": { display: "block" },
          ":hover": { cursor: "pointer" },
        }}
      >
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.2rem",
          }}
        >
          {title}
          <ExpandMore />
        </Typography>

        <Box
          className="show-links"
          sx={{
            minWidth: 180,
            position: "absolute",
            top: "100%",
            left: "-40px",
            display: "none",
            zIndex:"2"
          }}
        >
          <Paper
            sx={{
              mt: 3,
            }}
            // aria-label="secondary mailbox folders"
          >
            <List>
              {lincks.map((item, index) => {
                return !item.supLinks ? (
                  <ListItem
                    key={index}
                    sx={{ ".MuiTypography-root": { fontSize: "14px" } }}
                    disablePadding
                  >
                    <ListItemButton>
                      <ListItemText primary={item.link} />
                    </ListItemButton>
                  </ListItem>
                ) : (
                  <ListItem
                    key={index}
                    sx={{
                      ".MuiTypography-root": { fontSize: "14px" },
                      position: "relative",
                      ":hover .show-Sublinks": { display: "block" },
                    }}
                    disablePadding
                  >
                    <ListItemButton>
                      <ListItemText primary={item.link} />
                      <KeyboardArrowRightIcon />
                    </ListItemButton>

                    <List
                      className="show-Sublinks"
                      sx={{
                        position: "absolute",
                        top: "0",
                        left: "100%",
                        minWidth: "100px",
                        display: "none",
                      }}
                    >
                      <Paper
                        sx={{
                          ml: 1,
                        }}
                      >
                        {item.supLinks.map((item, index) => (
                          <ListItem
                            key={index}
                            sx={{
                              ".MuiTypography-root": { fontSize: "13px" },
                            }}
                            disablePadding
                          >
                            <ListItemButton>
                              <ListItemText primary={item} />
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </Paper>
                    </List>
                  </ListItem>
                );
              })}
            </List>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

export default Lincks;
