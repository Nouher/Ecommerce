import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import {sliderItems} from '../data'
import { mobile } from '../responsive'

const Conatiner=styled.div`
position:relative;
width: 100%;
height: 80vh;
display:flex;
overflow:hidden;
${mobile({display:"none",})};

`
const Arrow = styled.div`
position:absolute;
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius:50%;
display: flex;
justify-content: center;
align-items: center;
top: 0;
bottom: 0;
left:${props=>props.deriction === "left" && "10px" };
right:${props=>props.deriction === "right" && "10px" };
margin: auto;
cursor: pointer;
opacity:.5;
z-index:2
`

const Wrapper=styled.div`
height: 100%;
display:flex;
transition:all 1.5s ease;
transform:translateX(${props=>props.slideIndex * -100}vw);
`

const Slide=styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${(props)=> props.bg};
`
const ImgContainer=styled.div`
flex:1;
height: 100%;
`
const Image=styled.img`
height: 80%;
`
const InfoContainer=styled.div`
flex:1;
padding: 50px;
`

const Title=styled.h1`
font-size: 70px;
`
const Desc=styled.p`
margin: 20px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing:3px;
`
const Buttton=styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
border:2px solid teal;
color:teal;
border-radius:2px;
transition:all .4s ease-in-out;
&:hover{
    background-color:teal;
    color:white;
}

`



const Slider = () => {
    const [slideIndex,setSlideIndex]=useState(0);
    const handleClick = (derection)=>{
        if(derection==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0 )
        }
    }

    
        setTimeout(()=>{
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0 )
        },5000)
    
    

    return (
        <Conatiner>
            <Arrow deriction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item)=>(
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img}/>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Buttton >SHOW NOW</Buttton>
                        </InfoContainer>
                    </Slide>
                ))}  
               
            </Wrapper>
            <Arrow deriction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Conatiner>
    )
}

export default Slider
