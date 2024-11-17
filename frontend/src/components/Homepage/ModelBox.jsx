import "./ModelBox.css"

const ModelBox = ({ img, title, description }) => {
  return <div className="model-box-content">
      <div className="model-box-img">
        <img src={img} />
      </div> 
      <div className="model-box-title">{title}</div> 
      <div className="model-box-description">{description}</div> 
    </div>
}

export default ModelBox
