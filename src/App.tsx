
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from './components/themeprovider'
import { QuizSection } from './components/QuizSection'
import { Header } from './components/Header'

function App() {

  return (
   <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
          <Header />
           <Routes>  
            <Route path = '/' element = {<QuizSection  />}>  </Route>
          </Routes>
      </BrowserRouter>
   </ThemeProvider>
  )
}

export default App
