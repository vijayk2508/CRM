import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    marginTop: theme.spacing(2),
  },
}));

interface Customer {
  id: number;
  firstname: string;
  lastname: string;
  designation: string;
  createdAt: string;
}

const CustomerGrid: React.FC = () => {
  const classes = useStyles();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [designation, setDesignation] = useState('');

  // Fetch customer data on component mount
  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = () => {
    // Simulated API call or data retrieval from backend
    const fakeApiCall = new Promise<Customer[]>((resolve) => {
      setTimeout(() => {
        // Sort customers based on creation time in ascending order
        const sortedCustomers = mockCustomerData.sort(
          (a: Customer, b: Customer) => new Date(a.createdAt) - new Date(b.createdAt)
        );
        resolve(sortedCustomers);
      }, 500); // Simulating delay
    });

    fakeApiCall.then((data) => {
      setCustomers(data);
    });
  };

  const handleEditClick = (customerId: number) => {
    // Find the customer by ID
    const customer = customers.find((c) => c.id === customerId);

    if (customer) {
      setSelectedCustomerId(customerId);
      setFirstName(customer.firstname);
      setLastName(customer.lastname);
      setDesignation(customer.designation);
      setOpenEditDialog(true);
    }
  };

  const handleDeleteClick = (customerId: number) => {
    // Simulated API call or deletion from backend
    const fakeApiCall = new Promise<void>((resolve) => {
      setTimeout(() => {
        // Remove the customer from the local state
        const updatedCustomers = customers.filter((c) => c.id !== customerId);
        setCustomers(updatedCustomers);
        resolve();
      }, 500); // Simulating delay
    });

    fakeApiCall.then(() => {
      console.log(`Customer with ID ${customerId} deleted successfully.`);
    });
  };

  const handleEditDialogClose = () => {
    setOpenEditDialog(false);
    setSelectedCustomerId(null);
    setFirstName('');
    setLastName('');
    setDesignation('');
  };

  const handleEditDialogSave = () => {
    if (selectedCustomerId !== null) {
      // Find the customer index in the local state
      const customerIndex = customers.findIndex((c) => c.id === selectedCustomerId);

      if (customerIndex !== -1) {
        // Update the customer data in the local state
        const updatedCustomer = {
          ...customers[customerIndex],
          firstname: firstName,
          lastname: lastName,
          designation: designation,
        };

        const
        import React, { useEffect, useState } from 'react';
        import { makeStyles } from '@material-ui/core/styles';
        import {
          Table,
          TableBody,
          TableCell,
          TableContainer,
          TableHead,
          TableRow,
          Paper,
          IconButton,
          Dialog,
          DialogTitle,
          DialogContent,
          DialogActions,
          Button,
          TextField,
        } from '@material-ui/core';
        import EditIcon from '@material-ui/icons/Edit';
        import DeleteIcon from '@material-ui/icons/Delete';
        
        const useStyles = makeStyles((theme) => ({
          tableContainer: {
            marginTop: theme.spacing(2),
          },
        }));
        
        interface Customer {
          id: number;
          firstname: string;
          lastname: string;
          designation: string;
          createdAt: string;
        }
        
        const CustomerGrid: React.FC = () => {
          const classes = useStyles();
          const [customers, setCustomers] = useState<Customer[]>([]);
          const [openEditDialog, setOpenEditDialog] = useState(false);
          const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);
          const [firstName, setFirstName] = useState('');
          const [lastName, setLastName] = useState('');
          const [designation, setDesignation] = useState('');
        
          // Fetch customer data on component mount
          useEffect(() => {
            fetchCustomers();
          }, []);
        
          const fetchCustomers = () => {
            // Simulated API call or data retrieval from backend
            const fakeApiCall = new Promise<Customer[]>((resolve) => {
              setTimeout(() => {
                // Sort customers based on creation time in ascending order
                const sortedCustomers = mockCustomerData.sort(
                  (a: Customer, b: Customer) => new Date(a.createdAt) - new Date(b.createdAt)
                );
                resolve(sortedCustomers);
              }, 500); // Simulating delay
            });
        
            fakeApiCall.then((data) => {
              setCustomers(data);
            });
          };
        
          const handleEditClick = (customerId: number) => {
            // Find the customer by ID
            const customer = customers.find((c) => c.id === customerId);
        
            if (customer) {
              setSelectedCustomerId(customerId);
              setFirstName(customer.firstname);
              setLastName(customer.lastname);
              setDesignation(customer.designation);
              setOpenEditDialog(true);
            }
          };
        
          const handleDeleteClick = (customerId: number) => {
            // Simulated API call or deletion from backend
            const fakeApiCall = new Promise<void>((resolve) => {
              setTimeout(() => {
                // Remove the customer from the local state
                const updatedCustomers = customers.filter((c) => c.id !== customerId);
                setCustomers(updatedCustomers);
                resolve();
              }, 500); // Simulating delay
            });
        
            fakeApiCall.then(() => {
              console.log(`Customer with ID ${customerId} deleted successfully.`);
            });
          };
        
          const handleEditDialogClose = () => {
            setOpenEditDialog(false);
            setSelectedCustomerId(null);
            setFirstName('');
            setLastName('');
            setDesignation('');
          };
        
          const handleEditDialogSave = () => {
            if (selectedCustomerId !== null) {
              // Find the customer index in the local state
              const customerIndex = customers.findIndex((c) => c.id === selectedCustomerId);
        
              if (customerIndex !== -1) {
                // Update the customer data in the local state
                const updatedCustomer = {
                  ...customers[customerIndex],
                  firstname: firstName,
                  lastname: lastName,
                  designation: designation,
                };
        
                const
        