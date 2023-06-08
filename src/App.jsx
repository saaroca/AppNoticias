import { Container, Grid, List, Typography, tableBodyClasses } from '@mui/material'
import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias'
import { NoticiasProvider } from './context/NoticiasProvider'
 function App() {

  return (
    <NoticiasProvider>
    <Container> 
      <header>
        <Typography align='center' marginY={15} component="h1" variant="h3"
        >
          Buscador de noticias
        </Typography>
      </header>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        >
          <Grid item xs={12} md={3} lg={4}>
            <Formulario />
          </Grid>
      </Grid>

      <ListadoNoticias />
      
    </Container>
    </NoticiasProvider>
  )
}

export default App
