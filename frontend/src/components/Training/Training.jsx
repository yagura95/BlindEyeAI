import "./Training.css"

import { useState, useEffect } from "react"
import { Form, Link } from "react-router-dom"
import Header from "../Header/Header.jsx"
import Button from "../Button/Button.jsx"
import Info from "./Info.jsx"

import JSZip from "jszip"

const Training = () => {
  const [filename, setFilename] = useState()
  const [info, setInfo] = useState(null)
  const [images, setImages] = useState(null)
  const [model, setModel] = useState(null)

  async function drawContent(e) {
    setInfo(null)
    setFilename(e.target.files[0].name)
    setImages(e.target.files[0])
    let content

    const zip = new JSZip()

    try {
      content = await zip.loadAsync(e.target.files[0])
    } catch(e) {
      // TODO: deal with error
      throw new Error("Failed to open zip file", e)
    }

    const information = {}

    for(const key of Object.keys(content.files)) {
      const item = content.files[key]

      if(item.dir) continue 

      const i = item.name.split("/")

      // TODO: deal with error 
      if(i.length !== 2) {
        throw new Error("Incorrect folder structure")
      }

      const label = i[0]
      const filename = i[1]

      if(!information[label]) {
        information[label] = []
      }

      information[label].push(filename)
    }

    const i = []

    for(const [label, files] of Object.entries(information)) {
      i.push({
        label: label,
        files: files,
      })
    }

    setInfo(i)
  }

  async function startTraining() {
    // TODO: create message when no images selected
    if(!images) return 

    const formData = new FormData()
    formData.append("images", images)

    const response = await fetch(`${import.meta.env.VITE_API_SERVER}/training`, {
      method: "POST",
      body: formData
    })

    const file = []

    const reader = response.body.getReader()
    
    while(true) {
      const { done, value } = await reader.read()

      if(done) {
        setModel(file) 
        return
      }
      
      console.log(value)
      file.push(value) 
    }
  }

  useEffect(() => {
    if(!model) return

    const b = new Blob(model)
    const file = URL.createObjectURL(b)

    var link = document.createElement("a"); // Or maybe get it from the current document
    link.href = file;
    link.download = "model.pkl";
    link.click()
  }, [model])

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
          <div className="training-btn">
            <Button text={"Start training"} bgColor={"rgb(29, 140, 215)"} onPointerUp={startTraining} /> 
          </div>
          {info && <Info info={info} />}
        </div>
      </div>
    </>
}

export default Training
