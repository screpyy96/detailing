import React from "react";
import { Typography, Paper } from "@mui/material";

const FirstComponent = ({ despre }) => {
  return (
    <div>
      {despre.map((item) => (
        <Paper
          key={item.slogan}
          sx={{
            p: 3,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: "20px",
          }}
        >
          <img
            src={item.image}
            alt="Topaz Detailing"
            height="400"
            width="auto"
            style={{ borderRadius: "10px" }}
          />
          <div>
            <Typography variant="h4" sx={{ color: "red", paddingBottom: "2rem"}}>
              {item.slogan}
            </Typography>
            <Typography variant="body1">{item.descriere}</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              {item.facilitati}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              {item.pachet_solutii}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              {item.scop}
            </Typography>
          </div>
        </Paper>
      ))}
    </div>
  );
};

export default FirstComponent;
