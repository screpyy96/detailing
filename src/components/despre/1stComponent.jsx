import React from "react";
import { Typography, Paper } from "@mui/material";
import { ImageDespre } from "./1stComponent.styled";

const FirstComponent = ({ despre, hala }) => {
  return (
    <div>
      {despre.map((item) => (
        <Paper
          key={item.slogan}
          sx={{
            p: 3,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            
            gap: "20px",
          }}
        >
           <ImageDespre
              src={hala}
              alt="Polish Suceava"
              height="400"
              width="100%"
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
