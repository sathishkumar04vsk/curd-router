import * as React from "react";
import { Card } from "@mui/material";

export const About = () => {
  return (
    <div>
      <section className="about-section">
        <Card sx={{ maxWidth: 345 }}>
          <img src="https://images.pexels.com/photos/7070/space-desk-workspace-coworking.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </Card>
      </section>
    </div>
  );
};
