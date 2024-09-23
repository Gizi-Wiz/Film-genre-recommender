import '../styles/globals.css';
import SideSlideshow from '../components/SideSlideshow'; 

function MyApp({ Component, pageProps }) {
  return (
    <div className="app-container">
      <SideSlideshow className="left-slideshow" /> 
      <div className="app-content">
        <Component {...pageProps} />
      </div>
      <SideSlideshow className="right-slideshow" /> 
    </div>
  );
}

export default MyApp;
