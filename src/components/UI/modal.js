import React from 'react';


const Modal = (props) => {
    return (
    <React.Fragment>
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={props.close}>×</span>
                <p>Some text in the Modal..</p>
            </div>
        </div>
    </React.Fragment>
    )
}

export default Modal;