import "./Homepage.css"
import Header from "../Header/Header.jsx"
import Button from "./Button.jsx"
import { useNavigate } from "react-router-dom"

const Homepage = () => {
  const navigate = useNavigate()

  function navigateToTraining() {
    navigate("/training")
  }

  function navigateToDocs() {
    navigate("/docs")
  }

  return <>
      <Header />
      <div className="homepage-content">
        <div className="homepage-description">  
          <div className="homepage-description-title">
            Teach an AI model to classify your content 
          </div> 
          <div className="homepage-description-summary">
            Retrain AI models with your personalized data set. 
            Upload a folder with your images and labels, train, test and download the model.
            Sample data can be as small as 5-10 images by label to get amazing results.
            Easy, intuitive and free. 
          </div> 
          <div className="homepage-description-buttons">
            <Button bgColor={"rgb(29, 140, 215)"} onPointerUp={navigateToTraining} text={"Start training"} />
            <Button bgColor={"rgb(41, 50, 56)"} onPointerUp={navigateToDocs} text={"Explore"} />
          </div>
        </div>  

        <div className="homepage-features"></div>
        <div className="homepage-models"></div>
        <div className="homepage-action-call"></div>
      </div>
    </>
}

export default Homepage 
