import "./Homepage.css"
import Header from "../Header/Header.jsx"
import Button from "./Button.jsx"
import FeatureBox from "./FeatureBox.jsx"
import ModelBox from "./ModelBox.jsx"
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
      <div className="homepage-wrapper">
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

        <div className="homepage-features">
          <div className="homepage-features-title">Key features</div>
          <div className="homepage-features-description">BlindEyeAI lets you train and manage AI models with ease. Whether you are a professional developer or just starting out, our platform can help with easy and fast solutions.</div>
          <Button bgColor={"rgb(29, 140, 215)"} onPointerUp={navigateToDocs} text={"Explore all features"} />
          <div className="homepage-features-boxes">
            <FeatureBox img={"/train.svg"} title={"Train an AI to label images"} description={"Create your own image labelling model using our easy-to-use training interface. Simply upload a dataset of images and start training."} />
            <FeatureBox img={"/upload.svg"} title={"Upload a pre-trained model"} description={"Already have a pre-trained model? Upload it to our platform and explore it."} />
            <FeatureBox img={"/test.svg"} title={"Test your model against photos"} description={"Want to see how well your model performs? Test it against photos and see how close its label is to the real thing."} />
          </div>
        </div>

        <div className="homepage-models">
          <div className="homepage-models-title">Featured models</div>
          <div className="homepage-models-images">
            <ModelBox img={"/image-net.webp"} title={"ResNet-18"} description={"Convolutional neural network that is 18 layers deep. Trained on more than a million images from the ImageNet database"} />
          </div>
        </div>
        <div className="homepage-action-call">
          <div className="homepage-action-call-title">Ready to get started?</div>
          <div className="homepage-action-call-description">
            Join the community to train and test your own AI models
          </div>

          <div className="homepage-action-call-btn">
            <Button bgColor={"rgb(29, 140, 215)"} onPointerUp={navigateToTraining} text={"Get started"} />
          </div>
        </div>
      </div>
      </div>
    </>
}

export default Homepage 
