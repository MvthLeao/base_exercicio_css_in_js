import { ThemeProvider } from 'styled-components'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import temasCores from './containers/temas/cores'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <ThemeProvider theme={temasCores}>
      <EstiloGlobal />
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </ThemeProvider>
  )
}

export default App
