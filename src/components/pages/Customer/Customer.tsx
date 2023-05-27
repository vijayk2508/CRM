import React, { useCallback, useState, useEffect } from "react";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { getAllCustomer } from "../../../services/customerAPI";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const useStyles = makeStyles((theme: any) => ({
  customerFilterContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  filterItem: {
    paddingTop: theme.spacing(1),
    width: 189,
  },
  addCustomerButton: {
    //paddingTop: theme.spacing(1),
    width: 189,
    paddingTop: 17,
    height: "4.5em",
  },
}));

const Customer: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    designation: "",
  });
  const [customerList, setCustomerList] = useState([]);

  const onButtonClick = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    // You can access the form data using `formData` state
    console.log(formData);
  };

  const getAllCustomerCallBack = useCallback(async () => {
    let res = await getAllCustomer();
    setCustomerList(customerList);
  }, []);

  useEffect(() => {
    getAllCustomerCallBack();
  }, []);

  return (
    <Grid container>
      <Grid
        item
        xs={9}
        container
        spacing={1}
        className={classes.customerFilterContainer}
      >
        <Grid item className={classes.filterItem}>
          <TextField
            name="firstName"
            label="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item className={classes.filterItem}>
          <TextField
            name="lastName"
            label="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item className={classes.filterItem}>
          <TextField
            name="designation"
            label="Designation"
            value={formData.designation}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </Grid>
      </Grid>
      <Grid
        item
        xs={3}
        container
        justifyContent="flex-end"
        className={classes.addCustomerButton}
      >
        <Button variant="contained" onClick={onButtonClick}>
          Add Customer
        </Button>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ marginBottom: "16px" }}
          >
            Text in a modal
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              name="firstName"
              label="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              name="lastName"
              label="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              name="designation"
              label="Designation"
              value={formData.designation}
              onChange={handleInputChange}
              required
              fullWidth
              margin="normal"
            />
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "16px",
              }}
            >
              <Button
                variant="outlined"
                onClick={handleClose}
                style={{ marginRight: "8px" }}
              >
                Cancel
              </Button>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </Grid>
  );
};

export default Customer;
