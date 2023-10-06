import img1 from '../assets/gadgetImages/img1.png'
import { BsCartDash as Cart } from 'react-icons/bs'
import '../styles/compoStyles/gadget.css'

function Gadgets(props){
    return (
        <div className="gadget-div">
            <div className="gadget-card-head">
                <img src={props.card.img} alt="OnePlus Nord CE 3 Lite 5G" className="gadget-img" />
                <h2>{props.card.title}</h2>
            </div>
            <div className="gadget-card-btn">
                <Cart />
                <span>From ₹{props.card.price}</span>
            </div>
        </div>
    )
}
export default Gadgets