import React from "react";
import CardComponent from "../../common/CardComponent";
import { Button, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { iChat } from "../../../interfaces/iChat";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Padding } from "@mui/icons-material";


const useStyles = makeStyles((theme) => ({
  hiddenOnXSAndSM: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const data = [
  {
    id: 1,
    title: "Card 1",
    images: [
      "https://via.placeholder.com/500",
      "https://picsum.photos/500/300",
      "https://source.unsplash.com/random/500x300",
    ],
  },
  {
    id: 2,
    title: "Card 2",
    images: [
      "https://loremflickr.com/500/300",
      "https://placeimg.com/500/300/any",
    ],
  },
  {
    id: 3,
    title: "Card 3",
    images: ["https://source.unsplash.com/random/500x300"],
  },
  {
    id: 1,
    title: "Card 1",
    images: [
      "https://via.placeholder.com/500",
      "https://picsum.photos/500/300",
      "https://source.unsplash.com/random/500x300",
    ],
  },
  {
    id: 2,
    title: "Card 2",
    images: [
      "https://loremflickr.com/500/300",
      "https://placeimg.com/500/300/any",
    ],
  },
  {
    id: 3,
    title: "Card 3",
    images: ["https://source.unsplash.com/random/500x300"],
  },
];

const chatData: iChat[] = [
  {
    id: 1,
    sender: "John",
  },
  {
    id: 2,
    sender: "Jane",
  },
  {
    id: 3,
    sender: "Janny",
  },
  {
    id: 4,
    sender: "Perry",
  },
  // Add more chat messages here
];

const Feeds: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={2} style={{ height: "calc(100vh - 4em)" }}>
        <Grid
          item
          xs={12}
          sm={2}
          style={{ borderRight: "1px solid #e2dddd" }}
          className={classes.hiddenOnXSAndSM}
        >
           <div className="left-nav-container">
      <div className="left-nav-item">
      <FontAwesomeIcon icon={faEnvelope} />
      </div>
      <div className="left-nav-item">
        <FontAwesomeIcon icon={faBell} />
      </div>
    </div>
        </Grid>
        <Grid className="flex" item xs={12} sm={5}>
          <div>
            {data.map((card) => (
              <CardComponent key={card.id} {...card} />
            ))}
          </div>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.hiddenOnXSAndSM}>
          <div className="chat-container">
            <div className="chat-header">
              <h3>Suggestion</h3>
            </div>
            <div className="chat-messages">
              {chatData.map((chat) => (
                <div className="chat-message" key={chat.id}>
               <div className="chat-avatar">
               <FontAwesomeIcon icon={faUser} />
            </div>
                  <div className="chat-content">
                    <div className="chat-sender">{chat.sender}</div>
                    <Button className="follow-button">Follow</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Feeds;
