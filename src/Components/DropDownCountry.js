import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
     /* display:none; */
    position: absolute;
    top: 180%;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius:.25rem;
    width:300px;
    height: 350px;
    z-index:10;
    right:-10px;
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

const Title=styled.h1`
font-size: 17px;
padding: 20px;
text-align: center;
background: #eee;

`
const ContainerCountry=styled.div`
background: #fff;
display: flex;
flex-direction:column;
padding: 20px;
justify-content:start;

`
const STitle=styled.h1`
font-size: 16px;
text-decoration:underline;
padding: 10px;
`
const ListCountry=styled.select`
margin:10px 0 20px 0;
font-size: 20px;
padding: 10px 40px 10px 3px;
margin-bottom:5px;
text-align:start;
`
const ButtonContainer=styled.div`
display: flex;
justify-content: center;
padding: 20px 0 0 0;

`
const Button=styled.button`
background: #424242 ;
color:#fff;
width: 145px;
height: 35px;
border:none;
border-radius:.25rem;
cursor: pointer;
&:hover{
    background: #272727;
}

`

const DropDownCountry = (props) => {

    
    return (
        <Container className={props.DropDownCountry ? 'active' : 'desactive'} >
            <Title>Country - Language Settings</Title>
            <ContainerCountry>
                <STitle>Country</STitle>
                <ListCountry>
                    <option>Morocco</option>
                </ListCountry>
                <STitle>Language</STitle>
                <ListCountry>
                    <option>English</option>
                    <option>Arabic</option>
                    <option>French</option>
                </ListCountry>
                <STitle>Currency</STitle>
                <ListCountry>
                    <option>MAD</option>
                    <option>DOLLAR</option>
                    <option>EURO</option>
                </ListCountry>

                <ButtonContainer>
                    <Button>OK</Button>
                </ButtonContainer>
                
            </ContainerCountry>
                       
        </Container>
    )
}

export default DropDownCountry
