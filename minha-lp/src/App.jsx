import { Header, SobreMim, Habilidades, Contato } from './components'

function App() {
  return (
    <div className="">
      <Header />
      <div style={{ borderTop: '2px solid #3C434D', margin: 0 }} />
      <SobreMim />
      <Habilidades />
      <Contato />
    </div>
  )
}

export default App