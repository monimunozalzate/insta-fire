import UploadForm from "./components/UploadForm/UploadForm"
import ImagesGrid from "./components/imagesGrid/ImagesGrid"
import Title from "./components/title/title"

function App() {

  return (
    <div className="App">
      <Title />
      <UploadForm/>
      <ImagesGrid/>
    </div>
  )
}

export default App
