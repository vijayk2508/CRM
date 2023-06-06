/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";

const useStyles = makeStyles((theme) => ({
  swipeableViews: {
    height: 250,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
}));

const ImageSwapper: React.FC<any> = (props) => {
  const classes = useStyles();
  const images: string[] = useMemo(
    () =>
      props.onlyImage
        ? props.images
        : props.images.map((i: any) => i.file || "").filter((i: string) => i),
    [props.images, props.onlyImage]
  );

  return (
    <SwipeableViews className={classes.swipeableViews} enableMouseEvents >
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className={classes.image}
          />
        </div>
      ))}
    </SwipeableViews>
  );
};

export default ImageSwapper;
