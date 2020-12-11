import React, { Component } from 'react'
import itemDetails from "../json/itemDetails.json"

import Header from '../parts/Header'
import PageDetailTitle from '../parts/PageDetailTitle'
import Featuredimage from '../parts/Featuredimage';
import PageDetailDescription from '../parts/PageDetailDescription';
import BookingForm from '../parts/BookingForm';
import Categories from '../parts/Categories';
import Testimoni from '../parts/Testimoni';
import Footer from '../parts/Footer';

import Fade from 'react-reveal/Fade'

export default class DetailsPage extends Component {
    componentDidMount(){
        window.title = "Staycation | Home";
        window.scrollTo(0,0)
    }

    render() {
        const breadcrumb = [
            { pageTitle: "Home", pageHref: ""},
            { pageTitle: "House Details", pageHref:""}
        ];
        return (
            <>
                <Header {...this.props}/>
                <Fade top>
                    <PageDetailTitle
                        breadcrumb={breadcrumb}
                        data={itemDetails}
                    />
                    
                    <Featuredimage data={itemDetails.imageUrls}/>
                </Fade>
                <Fade duration={2000} delay={500}>
                    <section className="container">
                        <div className="row">
                            <div className="col-7 pr-5">
                                <PageDetailDescription data={itemDetails}/>
                            </div>
                            <div className="col-5">
                                <BookingForm itemDetails={itemDetails}/>
                            </div>
                        </div>
                    </section>
                </Fade>
                <Categories data={itemDetails.categories}/>
                <Testimoni data={itemDetails.testimonial}/>
                <Footer />
            </>
        )
    }
}
