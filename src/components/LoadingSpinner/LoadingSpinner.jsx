import "./LoadingSpinner.css"
import loadingGif from "../../assets/LoadingSpinner.gif"

function LoadingSpinner() {
  return (
    <div className='loading-overlay-container d-flex al-center jc-center'>
      <img src={loadingGif} alt='loading' height='80px' />
    </div>
  )
}

export default LoadingSpinner
