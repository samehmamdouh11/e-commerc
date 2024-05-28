import React from 'react'
import Slider1 from '../../asset/41nN4nvKaAL._AC_SY200_.jpg'
import Slider2 from '../../asset/61cSNgtEISL._AC_SY200_.jpg'
import Slider3 from '../../asset/XCM_Manual_1396328_4379575_Egypt_EG_BAU_GW_DC_SL_Bags_Wallets_379x304_1X._SY304_CB650636675_.jpg'
import Slider4 from '../../asset/XCM_Manual_1533480_5305769_379x304_1X._SY304_CB616236518_.jpg'
import Slider from "react-slick";

export default function Sliderss() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    
     <div className="container">
     <div className="row gy-0">
        <div className="col-md-8">
          <Slider {...settings}>
            <img src={Slider3} alt="IMG3" className='w-100' height={500} />
            <img src={Slider4} alt="IMG4" className='w-100' height={500} />
            <img src={Slider4} alt="IMG4" className='w-100' height={500} />

          </Slider>
        </div>
        <div className="col-md-4">
          <img src={Slider1} alt="IMG" className='w-100' height={200} />
          <img src={Slider2} alt="IMG2" className='w-100' height={200} />
        </div>
      </div>
     </div>

    
  )
}
