import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import registration from "../Image/registration.jpeg"
import image1 from "../Image/image1.jpeg"
import image3 from "../Image/image3.jpeg"
import image2 from "../Image/image2.jpeg"
import image9 from "../Image/image9.jpeg"
import image10 from "../Image/image10.jpeg"
import Style from "./Style.css"

const gallaryList = [
  {
    id: 1,
    img: image1,
    data: 'Award Function',
  },
  {
    id: 2,
    img: image2,
    data: 'Award Function',
  },
  {
    id: 3,
    img: image3,
    data: 'Birthday Celebration',
  },
  {
    id: 4,
    img: image9,
    data: 'Advertisement',
  },
  {
    id: 5,
    img: image10,
    data: 'Meeting with Home-minister',
  },
  {
    id: 6,
    img: registration,
    data: 'Registration',
  },

]

const Gallary = () => {
  return (
    <>
      <h1 className='text-center text-success my-5'>Gallery </h1>
      
      <Carousel>
        {gallaryList.map((x, i) => {
          return <Carousel.Item className='Carousel-Item indicatorsColor="bg-dark" '>
            
            <img
              className="d-block w-100 carousel-img"
              src={x.img}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className='data'>{x.data}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        })}
      </Carousel>
    </>
  )

}
export default Gallary