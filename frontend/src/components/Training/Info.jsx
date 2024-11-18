import "./Info.css"

const Info = ({ info }) => {
  return <div className="training-info">
      {info.map(item => {
        return (
          <dl className="training-info-item" key={item.label}>
            <dt className="training-info-label">LABEL: <span id="info-label" >{item.label}</span></dt>
            {item.files.map((file, i) => {
              return <dd className="training-info-file" key={file}>{i + 1}: <span id="info-file">{file}</span></dd>
            })}
          </dl>
        )
      })}
    </div>
}

export default Info
