import React from "react"
import styled from "styled-components"
import {Close} from '@material-ui/icons'

const Container=styled.div`
height: 30px;
background-color: black;
color:white;
display:flex;
justify-content:center;
align-items:center;
font-size: 14px;
font-weight: 500;
transition:all 300ms ease;
`
const handleClick=()=>{
    document.getElementById("annc").style.display="none"
}
const Announcement = () => {
    return (
        <Container id="annc">
            Free Shopping  on orders over $50
            <Close style={{position:"absolute",right:"0"}} onClick={()=>handleClick()}/>
        </Container>
    )
}

export default Announcement
