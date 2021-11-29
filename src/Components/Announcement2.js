import React from "react"
import styled from "styled-components"
import img1 from '../assets/imgJecketJean.png'

const Container=styled.div`
height: 150px;
padding: 10px 0;
background-color: #76B9D0;
color:white;
display:flex;
justify-content:center;
align-items:center;
position: relative;
`
const Title=styled.h1`
font-size: 60px;
font-weight: 900;
text-transform:uppercase;
`
const Image=styled.img`
height: 300px;

`
const Button=styled.button`
position:absolute;
right:40px;
padding: 3px;
border:3px solid #fff;
font-size:20px;
font-weight: 600;
background: #000;
color:#fff;
opacity:.3;
transition:all 300ms ease;

&:hover{
    opacity: 1;
    transform: scale(1.1);
}

`
const Announcement2 = () => {

    return (
        <Container id="annc2">
            <Image src={img1}/>
            <Title>Jean Collection up to 60% discount</Title>
            <Button onClick={()=>{document.getElementById('annc2').style.display='none'}}>HIDE</Button>
        </Container>
    )
}

export default Announcement2
