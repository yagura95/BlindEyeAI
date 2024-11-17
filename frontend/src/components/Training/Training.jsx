import { useState } from "react"
import { Form, Link } from "react-router-dom"
import Header from "../Header/Header.jsx"
import "./Training.css"

const Training = () => {
  const [filename, setFilename] = useState()
  function drawContent(e) {
    setFilename(e.target.files[0].name)
    /*
     TODO: analyse data
           draw folder structure
           draw labels and file count for each       
    */
  }

  return <>
      <Header />
      <div className="content">
        <div className="wrapper">
          <h1 className="training-title">Train your model</h1>
          <Link className="training-help" to={"/docs"}>Need help? Click here</Link>
          <p className="training-description">You can train your model using the images in your photo archive to create a new model or improve an existing one. You can also use images from the internet, but we recommend using your own images so you have full control over the content and quality of your model.</p>

          <Form id="training-form">
            <div className="training-form-item">
              <label htmlFor="file-upload" id="training-file">
                Upload folder 
              </label>
              <input id="file-upload" name="file-upload" type="file" onChange={drawContent}/>
            </div>
            <div className="training-form-item">
              {filename && <p id="training-filename">{filename}</p>}
            </div>
          </Form>
          
        </div>
      </div>
    </>
}

export default Training
