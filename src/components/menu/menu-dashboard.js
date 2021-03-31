import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "../css/index.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faUser,
  faArrowUp,
  faCoffee,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  table: {
    minWidth: 650,
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  function createData(nameDocument, userRem, date, notes, type, filebutton) {
    return { nameDocument, userRem, date, notes, type, filebutton };
  }

  const rows = [
    createData(
      "Toma de terrenos fiscales",
      "jose miguel labbe",
      "05.03.2021",
      "fjdklfhjasghkjldsfhvjkvf",
      "Recibido",
      ""
    ),
    createData(
      "Toma de terrenos fiscales",
      "jose miguel labbe",
      "05.03.2021",
      "fjdklfhjasghkjldsfhvjkvf",
      "Recibido",
      ""
    ),
    createData(
      "Toma de terrenos fiscales",
      "jose miguel labbe",
      "05.03.2021",
      "fjdklfhjasghkjldsfhvjkvf",
      "Recibido",
      ""
    ),
    createData(
      "Toma de terrenos fiscales",
      "jose miguel labbe",
      "05.03.2021",
      "fjdklfhjasghkjldsfhvjkvf",
      "Recibido",
      ""
    ),
    createData(
      "Toma de terrenos fiscales",
      "jose miguel labbe",
      "05.03.2021",
      "fjdklfhjasghkjldsfhvjkvf",
      "Recibido",
      ""
    ),
  ];

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button>
          <ListItemText
            primary={
              <>
                {" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="icon-margin"
                />{" "}
                Enviar Documento{" "}
              </>
            }
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            primary={
              <>
                {" "}
                <FontAwesomeIcon icon={faSearch} className="icon-margin" />{" "}
                Buscar Documento{" "}
              </>
            }
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            primary={
              <>
                {" "}
                <FontAwesomeIcon
                  icon={faArrowUp}
                  className="icon-margin"
                />{" "}
                Subir Documento{" "}
              </>
            }
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            primary={
              <>
                {" "}
                <FontAwesomeIcon icon={faUser} className="icon-margin" />{" "}
                Administrar Usuarios{" "}
              </>
            }
          />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <Grid container spacing={3}>
            <Grid item xs>
              <Typography variant="h6" noWrap>
                JJ Docs
              </Typography>
            </Grid>

            <Grid item></Grid>

            <Grid item xs className={{ fontSize: 2 }}>
              <div>Nombre</div>
              <div>Rut</div>
              <div>Cargo</div>
            </Grid>
            <Grid>
              <FontAwesomeIcon icon={faCoffee} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              {/* nameDocument, userRem, date, notes, type, filebutton */}
              <TableRow>
                <TableCell>Documento recibido (Materia)</TableCell>
                <TableCell align="right">Usuario remitente</TableCell>
                <TableCell align="right">Fecha</TableCell>
                <TableCell align="right">Notas</TableCell>
                <TableCell align="right">Tipos</TableCell>
                <TableCell align="right">Botonera</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.nameDocument}>
                  <TableCell component="th" scope="row">
                    {row.nameDocument}
                  </TableCell>
                  <TableCell align="right">{row.userRem}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <TableCell align="right">{row.notes}</TableCell>
                  <TableCell align="right">{row.type}</TableCell>
                  <TableCell align="right">{row.filebutton}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Button m={4} variant="contained" color="primary">
          Atrás
        </Button>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
