import React from "react";
import { Typography, Paper } from "@mui/material";
import { detailing } from "../../data/despre";
import {
  StyledBtn
} from "../subcomponents/subcomponents.styled";
import { Link } from "@reach/router";

const FirstComponent = () => {
  return (
    <div>
      {detailing.map((item) => (
        <Paper
          style={{ backgroundColor: "#fafafa" }}
          key={item.slogan}
          sx={{
            p: 3,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: "20px",
            padding: "2rem",
          }}
        >
          <div>
            <Typography
              variant="h4"
              sx={{ color: "red", paddingBottom: "2rem" }}
            >
              {item.slogan}
            </Typography>
            <Typography variant="body1">{item.detailingDesign}</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              {item.detailingQuality}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              {item.detailingWarranty}
            </Typography>
          </div>
          <div>
            <img
              src={item.image}
              alt="Detailing Suceava"
              height="400"
              width="100%"
              style={{ borderRadius: "10px" }}
            />
            <StyledBtn>
              <Link style={{textDecoration: "none", color: "white"}}to="/contact">{item.button}</Link>
            </StyledBtn>
          </div>
        </Paper>
      ))}
    </div>
  );
};

export default FirstComponent;
