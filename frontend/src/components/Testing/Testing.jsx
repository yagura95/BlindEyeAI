import "./Testing.css"
import { useState } from "react"
import { Link, Form } from "react-router-dom"
import Header from "../Header/Header.jsx"
import Button from "../Button/Button.jsx"

const Testing = () => {
  const [filename, setFilename] = useState(null)

  function modelInfo(e) {
    setFilename(e.target.files[0].name)
  }

  function testModel() {}

  return <>
      <Header />
      <div className="content">
        <div className="wrapper">
          <h1 className="testing-title">Test your model</h1>
          <Link className="testing-help" to={"/docs"}>Need help? Click here</Link>
          <p className="testing-description">Upload your model and an image to test it.</p>
          <Form id="testing-form">
            <div className="testing-form-item">
              <label htmlFor="model-upload" id="testing-file">
                Upload model 
              </label>
              <input id="model-upload" name="model-upload" type="file" onChange={modelInfo}/>
            </div>
            <div className="testing-form-item">
              {filename && <p id="testing-filename">{filename}</p>}
            </div>
          </Form>
          <div className="testing-btn">
            <Button text={"Start testing"} bgColor={"rgb(29, 140, 215)"} onPointerUp={testModel} /> 
          </div>
        </div>
      </div>
    </>
}

export default Testing 
