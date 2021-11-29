import React from 'react'
import styled from 'styled-components'
import img from '../assets/img2.png'
import { mobile } from '../responsive'


const Container=styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(rgba(255,255,255,.5),rgba(255,255,255,.5)), url(${img});
background-position:center;
background-size:100%;
display: flex;
align-items:center;
justify-content: center;
${mobile({backgroundSize:"290%",})};

`
const Wrapper=styled.div`
width: 40%;
padding: 20px;
background: #fff;
${mobile({width:"75%",})};

`
const Title=styled.h1`
font-size: 24px;
font-weight: 300;
`
const Form=styled.form`
display: flex;
flex-wrap:wrap;
`
const Input=styled.input`
flex:1;
min-width: 40%;
margin: 20px 10px 0 0;
padding: 10px;
`
const Agreement=styled.span`
font-size: 12px;
margin: 20px 0;
`
const Button=styled.button`
width: 40%;
border:none;
padding: 15px 20px;
background: teal;
color:white;
cursor: pointer;
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CARTE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder='first name'/>
                    <Input placeholder='last name'/>
                    <Input placeholder='usename'/>
                    <Input placeholder='email'/>
                    <Input placeholder='password'/>
                    <Input placeholder='confirm password'/>
                    <Agreement>
                        By creating an account, I conset to processing of my personal 
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
