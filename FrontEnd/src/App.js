import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen';



const App = () => {
  return (
    <div>
      <Header />
      <main className='py-3' >
        <Container>
          <HomeScreen />
        </Container>
      </main>



      <Footer />
    </div>
  )
}

export default App

