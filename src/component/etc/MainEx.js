import React from 'react'
import { Carousel } from 'react-bootstrap';

function MainEx() {
  return (
    <Carousel>
    <Carousel.Item>
    <div className="text-center">

      <img
        className="d-block"
        style={{ width: '1920px', height: '900px', objectFit: 'cover'}}
        src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1487,c_limit/7543e231-4b91-4574-b4fe-bd42a0c1311e/%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-%EC%9D%98%EB%A5%98-%EB%B0%8F-%EC%95%A1%EC%84%B8%EC%84%9C%EB%A6%AC.jpg"
        alt="Running Everyday"
      />
      <Carousel.Caption>
        <h3>New Releases</h3>
        <p>새출발을 응원합니다!</p>
      </Carousel.Caption>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block "
        style={{ width: '1920px', height: '900px' , objectFit: 'cover'}}
        src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1487,c_limit/ffad80f4-0a3c-420e-918e-e6fe9a684570/%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-%EC%9D%98%EB%A5%98-%EB%B0%8F-%EC%95%A1%EC%84%B8%EC%84%9C%EB%A6%AC.jpg"
        alt="New Releases"
      />

      <Carousel.Caption >
        <h3>Relax</h3>
        <p>나를 위한 시간.</p>
      </Carousel.Caption>
      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        style={{ width: '1920px', height: '900px' , objectFit: 'cover'}}
        src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1487,c_limit/71dc8fc1-97c2-493c-bdaa-8d46f51ff85e/%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-%EC%9D%98%EB%A5%98-%EB%B0%8F-%EC%95%A1%EC%84%B8%EC%84%9C%EB%A6%AC.jpg"
        alt="Running"
      />

      <Carousel.Caption>
        <h3>Running</h3>
        <p>
          한정판매
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
  
}

export default MainEx