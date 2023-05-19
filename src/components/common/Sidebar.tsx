import React, { useMemo } from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListSubheader from "@mui/material/ListSubheader";

import {
  mainListItemsArray,
  secondaryListItemsArray,
} from "../../utils/constant";
import ListItem from "./ListItem";

function Sidebar() {
  const mainListItems = useMemo(() => {
    return mainListItemsArray.map((item) => (
      <ListItem
        index={item.index}
        key={item.index}
        title={item.title}
        icon={item.icon}
      />
    ));
  }, []);

  const secondaryListItems = useMemo(() => {
    return secondaryListItemsArray.map((item) =>
      item.isSubHeader ? (
        <ListSubheader key={item.index} component="div" inset>
          {item.title}
        </ListSubheader>
      ) : (
        <ListItem
          index={item.index}
          key={item.index}
          title={item.title}
          icon={item.icon}
        />
      )
    );
  }, []);

  return (
    <List component="nav">
      {mainListItems}
      <Divider sx={{ my: 1 }} />
      {secondaryListItems}
    </List>
  );
}

export default Sidebar;
