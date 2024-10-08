"use client"
import { serverSideFunction } from "@/utils/server-utils"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from "../components/theme-provider";
import { clientSideFunction } from "@/utils/client-utils";



export default function ClinetRout() {
    console.log("clinet route renderd")
    //const result = serverSideFunction()
    const result = clientSideFunction()
    const theme = useTheme()
    const settings = {
        dots: true,
    };
    return (
        <>
            <h1 style={{
                color: theme.colors.primary
            }}>use client route text color is changed by the context provider</h1>
            <h2>{result}</h2>
            <div className="image-slider-container">
                <Slider {...settings}>
                    <div>
                        <img src="http://picsum.photos/400/200" />
                    </div>
                    <div>
                        <img src="http://picsum.photos/400/200" />
                    </div>
                    <div>
                        <img src="http://picsum.photos/400/200" />
                    </div>
                    <div>
                        <img src="http://picsum.photos/400/200" />
                    </div>
                </Slider>
            </div>
        </>
    );

}

//now the result will render in the browser console which we dont want if we accdiently add it in the client side component to prevent this we use server only pkg it would give build error and would not render the client page if we expose the server