import './App.css'
import Header from './components/Header'
import JobListing from './components/JobListing'
import Search from './components/Search'
import Footer from './components/Footer'


function App() {
  return(
    <>
    <header>
    <Header/>
    <Search/>
    </header>
    <main>
    <JobListing/>
    </main>
    <Footer/>
    </>
  )
}

export default App
