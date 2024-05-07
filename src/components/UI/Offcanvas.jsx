import { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Offcanvas.css";




const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.closeCart} />
};
const OffcanvasOverlay = (props) => {
    return (
        <div className="offcanvas">
            <div className="content">{props.children}</div>
        </div>

    );
};



const Offcanvas = (props) => {


    const portalElement = document.getElementById("overlays");
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop closeCart={props.closeCart} />,
                portalElement
            )}

            {ReactDOM.createPortal(
                <OffcanvasOverlay >{props.children}</OffcanvasOverlay>,
                portalElement
            )}


        </Fragment>
    )
}

export default Offcanvas