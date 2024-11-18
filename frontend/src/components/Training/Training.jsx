import "./Training.css"

import { useState } from "react"
import { Form, Link } from "react-router-dom"
import Header from "../Header/Header.jsx"
import Info from "./Info.jsx"

import JSZip from "jszip"

const Training = () => {
  const [filename, setFilename] = useState()
  const [info, setInfo] = useState(null)

  async function drawContent(e) {
    setInfo(null)
    setFilename(e.target.files[0].name)
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
          {info && <Info info={info} />}
        </div>
      </div>
    </>
}

export default Training
