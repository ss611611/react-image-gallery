import logo from './logo.svg';
import './App.css';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="centered-gallery">
          <ImageGallery items={images}
            showNav={true}
            showPlayButton={true}
            showFullscreenButton={true}
            autoPlay={true}
          />
        </p>
      </header>
    </div>
  );
}

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];


export default App;
