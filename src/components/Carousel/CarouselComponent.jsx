import React from 'react';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";

const CarouselComponent = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        src={'/imgs/1geeksheep.jpg'}
                        className={'d-block w-100'}
                        alt={'Logo Geek Sheep'}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={'/imgs/2sheep.jpg'}
                        alt={'Logo Pants Sheep'}
                        className={'d-block w-100'}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={'/imgs/3chivatos.jpg'}
                        alt={'Logo Chivatos'}
                        className={'d-block w-100'}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={'/imgs/4galeca.jpg'}
                        alt={'Logo Galeca'}
                        className={'d-block w-100'}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={'/imgs/5bibis.jpg'}
                        alt={'Logo Bibis la moda'}
                        className={'d-block w-100'}
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselComponent;