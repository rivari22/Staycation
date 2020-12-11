import React from 'react'

import Star from '../elements/Star/index'
import Button from '../elements/Button/index'
import TestimoniAccent from '../assets/images/testimonialFrame.jpg'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';




function Testimoni({data}) {
    return (
        <section className="container">
            <div className="row">
                <div className="col-auto" style={{marginRight: 50}}>
                    <Zoom duration={1000} delay={500}>
                    <div className="testimonial-hero" style={{margin: `30px 0 0 30px`}}>
                        <img src={data.imageUrl} alt="Testimonial" className="position-absolute" style={{zIndex: 2, borderRadius: 15}}/>
                        <img src={TestimoniAccent} alt="Testimonial Frame" className="position-absolute" style={{margin: `-30px 0 0 -30px`}}/>
                    </div>
                    </Zoom>
                </div>
                    <Fade top duration={2000} delay={700}>
                <div className="col-7" style={{marginTop: 90}}>
                    <h4 className="font-weight-bold" style={{marginBottom: 40}}>{data.name}</h4>
                    <Star value={data.rate} width={35} height={35} spacing={4}/>
                    <h5 className="h2 font-weigth-light line-height-2 my-3">{data.content}</h5>
                    <span className="text-gray-500">
                        {data.familyName}, {data.familyOccupation}
                    </span>
                    <div>
                        <Button 
                        isPrimary 
                        hasShadow 
                        type="link" 
                        className="btn px-5" 
                        style={{marginTop: 40}}
                        href={`/testiomnial/${data._id}`}>
                            Read Their Story
                        </Button>
                    </div>
                </div>
                </Fade>
            </div>
        </section>
    )
}

export default Testimoni
