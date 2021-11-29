import React from 'react'
import styled from 'styled-components'


const Container=styled.div`
    width: 300px;
    position: absolute;
    top: 155%;
    right:-10px;
    background: #eee;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius:.25rem;
    width:200px;
    height: 100px;
    padding:10px;
    z-index:111;
    /* display: flex;
    flex-direction:column;
    align-items:conter;
    justify-content: center; */
    gap:10px;
    &::before{
        
        content:'';
        top: -10px;
        right: 20px;
        position: absolute;
        padding:10px;
        border-radius:0% 0% 100% 0%;
        background:#eee;
        transform:rotate(45deg);
    }
`
const ButtonLogin =styled.button`
width: 100%;
margin-bottom: 10px;
background: #424242;
color:#fff;
padding:10px 20px;
border:none;
font-size: 20px;
font-weight: 600;
text-transform:uppercase;

`
const ButtonSignIn =styled.button`
width: 100%;
background: transparent;
color:#424242;
padding:10px 20px;
border:2px solid #424242;
font-size: 20px;
font-weight: 600;
text-transform:uppercase;
`

const DropDownAccount = (props) => {


    return (
        <Container className={props.DropDownAccount ? 'active' : 'desactive'} >
                <ButtonLogin>Login</ButtonLogin>
                <ButtonSignIn>Sign In</ButtonSignIn>
        </Container>
        
    )
}

export default DropDownAccount
