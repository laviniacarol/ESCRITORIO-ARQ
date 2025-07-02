
// ASSETS
import './Button.css'
import arrowImg from '../../assets/arrow.svg'
function Button ({ arrow, buttonStyle, children, ...props }) {
    return (
        <button className={`button ${buttonStyle}`} {...props}>
           {children} {arrow && <img src={arrowImg} />}
        </button>
    );
}

export default Button;
