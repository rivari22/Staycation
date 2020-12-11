import React from 'react'
import Fade from 'react-reveal/Fade'
import complete from '../../assets/images/complete.jpg'

function Completed() {
    return (
        <Fade>
            <div className="container" style={{marginBottom: 30}}>
                <div className="row justify-content-center align-center">
                    <div className="col-4">
                        <img src={complete} alt="completed checkout apartment"
                        className="img-fluid"/>
                        <p className="text-gray-500">
                            We will inform you via email later once the transaction has been accepted
                        </p>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default Completed
