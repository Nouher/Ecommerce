import React from 'react'
import styled from 'styled-components'
import img from '../assets/imgBg.jpg'
import { mobile } from '../responsive'


const Container=styled.div`
width: 100vw;
height: 100vh;
background-size:cover;
display: flex;
align-items:center;
justify-content: center;
background:linear-gradient(rgba(255,255,255,.5),rgba(255,255,255,.5)), url(${img});
background-position: center;
background-size:100%;
background-repeat:no-repeat;
${mobile({backgroundSize:"290%",})};



`
const Wrapper=styled.div`
width: 25%;
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
flex-direction:column;

`
const Input=styled.input`
flex:1;
min-width: 40%;
margin: 10px 0;
padding: 10px;
`

const Button=styled.button`
width: 40%;
border:none;
padding: 15px 20px;
background: teal;
color:white;
cursor: pointer;
margin-bottom: 10px;
`

const Link=styled.a`
margin: 5px 0;
font: 12px;
text-decoration:underline;
cursor: pointer;
transition:all .5s ease;
&:hover{
    color:teal;
}
`



const Login = () => {
    return (
        <Container>
             <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder='usename'/>
                    <Input placeholder='password'/>
                    <Button>LOG IN</Button>
                    <Link>DO NOT YOU REMEMBER THE PASSWORD ?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
