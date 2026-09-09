import Navbar from './components/layouts/Navbar'
import Sidebar from './components/layouts/Sidebar'
import GalleryLayout from './components/gallery/GalleryLayout'
import InfoSection from './components/sections/InfoSection'
import Footer from './components/layouts/footer'

function App() {

  return (
    <>
      <div className="bg-background">
        <Navbar />

        <div className="lg:flex pt-14">
          <Sidebar />
          <GalleryLayout />
        </div>

        <InfoSection />
        <Footer />


      </div>
    </>



  )
}

export default App
