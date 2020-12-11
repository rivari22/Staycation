import React from 'react'
import Button from '../elements/Button'
import Zoom from 'react-reveal/Zoom';


export default function MostPicked(props) {
    return (
        <section 
        className="container"
        ref={props.refMostPicked}
        >
            <Zoom duration={800} delay={900}>
            <h4 className="mb-3">Most Picked</h4>
            </Zoom>
            <div className="container-grid">
                {
                    props.data.map((item, index) => {
                        return(
                            <div 
                            className={`item column-4${index === 0 ? " row-2" : " row-1"}`}
                            >
                                <Zoom duration={1000} delay={1000}>
                                <div className="card card-featured">
                                    <div className="tag">
                                        {item.price} 
                                        <span className="font-weight-light"> per {item.unit} </span>
                                    </div>
                                    <figure className="img-wrapper">
                                        <img 
                                            src={item.imageUrl} 
                                            alt={item.name} 
                                            className="img-cover"/>
                                    </figure>
                                    <div className="meta-wrapper">
                                        <Button 
                                            type="link" 
                                            className="streched-link d-block text-white"
                                            href={`/properties/${item._id}`}
                                        >
                                            <h5>{item.name}</h5>
                                        </Button>
                                        <span>
                                        {item.city}, {item.country}
                                        </span>
                                    </div>
                                </div>
                                </Zoom>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
