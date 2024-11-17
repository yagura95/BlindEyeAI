import "./FeatureBox.css"

const FeatureBox = ({ img, title, description }) => {
  return <div className="feature-box">
      <div className="feature-box-img">
        <img src={img} />
      </div> 
      <div className="feature-box-title">{title}</div> 
      <div className="feature-box-description">{description}</div> 
    </div>
}

export default FeatureBox
