import React from 'react'
import Carousel from 'react-material-ui-carousel'
import "./banner.css"



const data = [
    "https://m.media-amazon.com/images/I/61LbKRY0o8L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61A4NBjILrL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61+Om+g+8SL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg"
]

const Banner = () => {
  return (
    <Carousel
    className="carasousel"
                autoPlay={true}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                navButtonsProps={{
                    style: {
                        background: "#fff",
                        color: "#494949",
                        borderRadius: 0,
                        marginTop: -22,
                        height: "104px",
                    }
                }}>
        {
            data.map((imag, i) => {
                return (
                    <>
                         <img src={imag} alt="img" key={i} className="banner_img" />
                    </>
                )
            })
        }
    </Carousel>
  )
}

export default Banner