import { Box, Button, Stack, Typography } from "@mui/material";

import img1 from "../../assets/img/1 (1).jpg";
import { AddShoppingCart } from "@mui/icons-material";

function ProductDetails() {
  return (
    <Stack
      sx={{
        direction: { xs: "column", md: "row" },
      }}
      alignItems="center"
      gap={2}
    >
      <Box>
        <img width={300} src={img1} alt="..." />
      </Box>
      <Box
        sx={{
          p: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            letterSpacing: "2px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Man Product Title
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: "crimson",
            fontSize: "22px",
            my: 0.4,
          }}
        >
          $50
        </Typography>

        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque veniam,
          doloribus sint eligendi dolor.
        </Typography>

        <Stack direction="raw" gap={1} my="10px">
          {[1, 2, 3].map((item, index) => (
            <img
              className="hover"
              style={{ cursor: "pointer" }}
              key={index}
              width={70}
              src={img1}
              alt="..."
            />
          ))}
        </Stack>

        <Button variant="contained">
          <AddShoppingCart sx={{ mr: 1 }} />
          Bay Now
        </Button>
      </Box>
    </Stack>
  );
}

export default ProductDetails;
