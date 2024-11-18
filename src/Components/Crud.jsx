import * as React from "react";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import {
  List,
  Stack,
  Typography,
  TextField,
  Button,
  IconButton,
  Grid,
  Avatar,
  ListItemAvatar,
  Box,
  Paper,
  Container,
} from "@mui/material";
import ListItem from "@mui/material/ListItem";
import { MdDelete, MdAddCircle } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   right: '70%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };
const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: theme.spacing(2, 0),
  backgroundColor: theme.palette.grey[50],
}));

const SquareAvatar = styled(Avatar)(({ theme }) => ({
  padding: 18,
  width: theme.spacing(35),
  height: theme.spacing(35),
  borderRadius: theme.shape.borderRadius,
  "& .MuiAvatar-img": {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
}));

const games = [
  {
    id: 1,
    titleGame: "Mafia 2",
    hours: "15/18 hours",
    description:
      "El protagonista es Vito Scaletta, un joven siciliano hijo de padres inmigrantes de Sicilia que vuelve a casa tras su involuntario paso por la guerra por cometer un delito. Al llegar a Empire Bay, Joe Barbaro, su amigo de infancia le recibe, y comienza a introducirle en los peligrosos circuitos de la mafia",
    developerGame: "2K Czech",
    imageUrl: "https://d3tltd.com/wp-content/uploads/2020/05/M2DE_1.jpg",
  },
  {
    id: 2,
    titleGame: "assassin's creed odyssey",
    hours: "50 hours",
    description:
      " Se trata de un juego de acción y aventuras en el que los jugadores asumen el papel de Alexios o Kassandra, mercenarios en busca de venganza.",
    developerGame: "Ubisoft",
    imageUrl:
      "https://juegosdigitalescolombia.com/files/images/productos/1651876301-assassins-creed-odyssey-xbox-series-xs-0.jpg",
  },
  {
    id: 3,
    titleGame: "Call of Duty 2",
    hours: "21 hours",
    description:
      "Call of Duty 2 es un videojuego de disparos en primera persona bélico, perteneciente a la popular serie de videojuegos Call of Duty de Activision y que sucede a la primera entrega.",
    developerGame: "Infinity Ward",
    imageUrl: "https://media.vandal.net/m/14956/20121216112547_1.jpg",
  },
];

const Crud = () => {
  // const [open, setOpen] = React.useState(false);
  // // const handleOpen = () => setOpen(true);
  // // const handleClose = () => setOpen(false);

  const editGame = () => {
    const newList = listGame.map((game) => {
      if (game.id === GameForm.id) {
        return GameForm;
      } else {
        return game;
      }
    });
    setListGame(newList);
    setGameForm({
      id: "",
      titleGame: "",
      hours: "",
      description: "",
      developerGame: "",
      imageUrl: "",
    });
  };

  const createGame = () => {
    const newGame = {
      id: Date.now(),
      titleGame: GameForm.titleGame,
      hours: GameForm.hours,
      description: GameForm.description,
      developerGame: GameForm.developerGame,
      imageUrl: GameForm.imageUrl,
    };
    // funcion para enviar los datos a la lista
    setListGame([...listGame, newGame]);

    // limpiar los datos
    setGameForm({
      id: "",
      titleGame: "",
      hours: "",
      description: "",
      developerGame: "",
      imageUrl: "",
    });
  };

  const [listGame, setListGame] = React.useState(games);
  const [GameForm, setGameForm] = React.useState({
    id: "",
    titleGame: "",
    hours: "",
    description: "",
    developerGame: "",
    imageUrl: "",
  });

  //funcion para capturar los datos
  const handleChange = (event) => {
    const valueInput = event.target.value;
    const nameInput = event.target.name;
    setGameForm({ ...GameForm, [nameInput]: valueInput });
  };

  const handleSubmit = () => {
    if (
      GameForm.titleGame === "" ||
      GameForm.hours === "" ||
      GameForm.description === "" ||
      GameForm.developerGame === "" ||
      GameForm.imageUrl === ""
    ) {
      alert("por favor ingresa los datos");
      return;
    }
    if (GameForm.id) {
      editGame();
      return;
    }
    createGame();
  };

  //vamos a editar el elemento

  const handleDelete = (gameId) => {
    const newList = listGame.filter((game) => game.id !== gameId);
    setListGame(newList);
  };

  const handleEdit = (gameId) => {
    const findgame = listGame.find((game) => game.id === gameId);
    setGameForm(findgame);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ mt: 4, textAlign: "center", color: "primary.main" }}
        >
          Mi Biblioteca de Juegos
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <StyledPaper elevation={3}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ color: "secondary.main" }}
              >
                Mi librería
              </Typography>
              <List>
                {listGame.map((game) => (
                  <ListItem
                    key={game.id}
                    alignItems="flex-start"
                    sx={{
                      mb: 2,
                      backgroundColor: "background.paper",
                      borderRadius: 1,
                      boxShadow: 1,
                    }}
                  >
                    <ListItemAvatar>
                      <SquareAvatar
                        src={game.imageUrl}
                        alt={game.titleGame}
                        variant="square"
                      />
                    </ListItemAvatar>
                    <Box sx={{ ml: 2, flexGrow: 1 }}>
                      <Typography variant="h6" color="primary.main">
                        {game.titleGame}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {game.hours}
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        {game.description}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ mt: 1, fontStyle: "italic" }}
                      >
                        Desarrollador: {game.developerGame}
                      </Typography>
                    </Box>
                    <Box>
                      <IconButton
                        onClick={() => handleEdit(game.id)}
                        color="primary"
                      >
                        <AiFillEdit />
                      </IconButton>
                      <IconButton
                        onClick={() => handleDelete(game.id)}
                        color="secondary"
                      >
                        <MdDelete />
                      </IconButton>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </StyledPaper>
          </Grid>
          <Grid item xs={12} md={5}>
            <StyledPaper elevation={3}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ color: "secondary.main" }}
              >
                {GameForm.id ? "Editar Juego" : "Agregar Nuevo Juego"}
              </Typography>
              <Stack gap={2}>
                <TextField
                  label="Título del juego"
                  onChange={handleChange}
                  name="titleGame"
                  value={GameForm.titleGame}
                  fullWidth
                  variant="outlined"
                />
                <TextField
                  label="Horas"
                  onChange={handleChange}
                  name="hours"
                  value={GameForm.hours}
                  fullWidth
                  variant="outlined"
                />
                <TextField
                  label="Descripción"
                  onChange={handleChange}
                  name="description"
                  value={GameForm.description}
                  fullWidth
                  variant="outlined"
                  multiline
                  rows={3}
                />
                <TextField
                  label="Desarrollador"
                  onChange={handleChange}
                  name="developerGame"
                  value={GameForm.developerGame}
                  fullWidth
                  variant="outlined"
                />
                <TextField
                  label="URL de la imagen"
                  onChange={handleChange}
                  name="imageUrl"
                  value={GameForm.imageUrl}
                  fullWidth
                  variant="outlined"
                />
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  color="primary"
                  startIcon={<MdAddCircle />}
                  size="large"
                >
                  {GameForm.id ? "Actualizar" : "Crear"}
                </Button>
              </Stack>
            </StyledPaper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Crud;
