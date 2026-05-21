import { Toaster } from 'react-hot-toast';
import AnnouncementBar from './components/layout/AnnouncementBar';
import TopNavbar from './components/layout/TopNavbar';
import LeftSidebar from './components/layout/LeftSidebar';
import RightSidebar from './components/layout/RightSidebar';
import Footer from './components/layout/Footer';
import JackpotTicker from './components/home/JackpotTicker';
import Home from './pages/Home';
import './styles/animations.css';

function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Toaster position="top-right" />
      <AnnouncementBar />
      <TopNavbar />
      <JackpotTicker />
      
      <div className="flex">
        <LeftSidebar />
        
        <main className="flex-1 min-w-0">
          <Home />
          <Footer />
        </main>
        
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
