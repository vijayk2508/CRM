import * as React from "react";
import Typography from "@mui/material/Typography";
import { IReactChildren } from "../../interfaces/IGeneral";

const Title: React.FC<IReactChildren> = (props) => {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
};

export default Title;
