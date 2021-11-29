import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'


const Container= styled.div`
height: 60vh;
background: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;
`
const Title= styled.h1`
font-size: 70px;
margin-bottom: 20px;
`
const Desc= styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
${mobile({textAlign:"center",})};

`
const InputContainer= styled.div`
width: 50%;
height: 40px;
background: #fff;
display: flex;
justify-content: center;
border:1px solid lightgray;
${mobile({width:"80%",})};

`
const Input= styled.input`
border:none;
flex:8;
padding-left: 20px;
`
const Button= styled.button`
flex:1;
border:none;
background: teal;
color:#fff;
transition:all .1s ease;
&:hover{
    transform:scale(1.1);
}

`

const NewsLetter = () => {
    return (
        <div>
            <Container>
                <Title>Newsletter</Title>
                <Desc>Get timely updates from you favorite products.</Desc>
                <InputContainer>
                    <Input placeholder="Your email"/>
                    <Button><Send/></Button>
                </InputContainer>
            </Container>
        </div>
    )
}

export default NewsLetter