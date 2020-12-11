import React from 'react'
import Button from '../elements/Button/index'
import formatNumber from '../utils/FormatNumber'
import Jump from 'react-reveal/Jump';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';



//images and icon
import iconCities from '../assets/images/icons/ic_cities.svg'
import iconTravelers from '../assets/images/icons/ic_travelers.svg'
import iconTreasures from '../assets/images/icons/ic_treasures.svg'
import heroBanner from '../assets/images/heroBanner.jpg'
import heroBannerFrame from '../assets/images/heroBannerFrame.jpg'


export default function Hero(props) {

    const showMostPicked = () => {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        })
    }
    return (
        <section className="container pt-4">
            <div className="container row align-items-center">
                <div className="col-auto pr-5" style={{width: 530}}>
                    <Jump duration={1000}>
                    <h1 className="font-weight-bolder mb-4">
                        Forget Busy Work, <br/>
                        Start Next Vacation
                    </h1>
                    </Jump>
                    <Fade top delay={1500} cascade>
                    <p className="font-weight-light text-gray-500 w-75 mb-4" style={{lineHeight:"27px"}}>
                        We provide what you need to enjoy your 
                        holiday with family. Time to make another 
                        memorable moments.
                    </p>
                    <Button 
                        className="btn px-5 mb-3" 
                        isPrimary 
                        hasShadow 
                        onClick={showMostPicked}
                        style={{width: "210px"}}
                        >
                            Show Me Now
                    </Button>
                    </Fade>
                    <div className="row mt-5">
                        <Fade left delay={2000}>
                        <div className="col-auto" style={{marginRight: 20}}>
                            <img src={iconTravelers} alt="icon traveler" width="36" heigth="36"/>
                            <h6 className="mt-3">
                                {formatNumber(props.data.travelers)} <span className="font-weight-light text-gray-500">travelers</span></h6>
                        </div>
                        </Fade>
                        <Fade left delay={1800}>
                        <div className="col-auto"  style={{marginRight: 20}}>
                            <img src={iconTreasures} alt="icon traveler" width="36" heigth="36"/>
                            <h6 className="mt-3">
                                {formatNumber(props.data.treasures)} <span className="font-weight-light text-gray-500">treasures</span></h6>
                        </div>
                        </Fade>
                        <Fade left delay={1600}>
                        <div className="col-auto">
                            <img src={iconCities} alt="icon traveler" width="36" heigth="36"/>
                            <h6 className="mt-3">
                                {formatNumber(props.data.cities)} <span className="font-weight-light text-gray-500">cities</span></h6>
                        </div>
                        </Fade>
                    </div>
                </div>
                <Zoom delay={850}>
                <div className="col-6 pl-5">
                    <div style={{width: 520, height: 380}}>
                        <img src={heroBanner} className="img-fluid position-absolute" alt="hero Banner" style={{margin: "-30px 0 0 -30px", zIndex: 1}}/>
                        <img src={heroBannerFrame} className="img-fluid position-absolute" alt="hero Banner" style={{margin: "0 -15px -15px 0"}}/>
                    </div>
                </div>
                </Zoom>
            </div>
        </section>
    )
}

                                
