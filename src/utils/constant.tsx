import { iNavListItem } from "../interfaces/NavigationInterface";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";

export const drawerWidth: number = 240;

export const mainListItemsArray: iNavListItem[] = [
  {
    index: 1,
    title: "Dashboard",
    icon: <DashboardIcon />,
    url: "",
    isSubHeader: false,
  },
  {
    index: 2,
    title: "Orders",
    icon: <ShoppingCartIcon />,
    url: "",
    isSubHeader: false,
  },
  {
    index: 3,
    title: "Customers",
    icon: <PeopleIcon />,
    url: "",
    isSubHeader: false,
  },
  {
    index: 4,
    title: "Reports",
    icon: <BarChartIcon />,
    url: "",
    isSubHeader: false,
  },
  {
    index: 5,
    title: "Integrations",
    icon: <LayersIcon />,
    url: "",
    isSubHeader: false,
  },
];

export const secondaryListItemsArray : iNavListItem[] = [
  {
    index: 1,
    title: "Subheader",
    url: "",
    isSubHeader: true,
    icon: '',
  },
  {
    index: 2,
    title: "ListItemButton",
    url: "",
    isSubHeader: false,
    icon: '',
  },
  {
    index: 3,
    title: "ListItemButton",
    url: "",
    isSubHeader: false,
    icon: '',
  },
  {
    index: 4,
    title: "ListItemButton",
    url: "",
    isSubHeader: false,
    icon: '',
  },
];

export const APIS = {
  CUSTOMERS : '/api/customers',
}
