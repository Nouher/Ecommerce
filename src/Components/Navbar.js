import React, { useState } from 'react'
import { Badge } from '@material-ui/core'
import { ArrowDropDownRounded, PersonOutline, Search, ShoppingCartOutlined } from '@material-ui/icons'
import styled from 'styled-components'
import {mobile} from '../responsive'
import DropDownCountry from './DropDownCountry'
import DropDownAccount from './DropDownAccount'
import  {ReactCountryFlag} from 'react-country-flag'
import  {useSelector} from 'react-redux'


const Container = styled.div`
height: 105px;
${mobile({height:"50px",})};

`

const Top=styled.div`
padding: 10px 20px;
display:flex;
justify-content:space-between;
align-items:center;

${mobile({padding:"10px 0px",})};
`

const Left=styled.div`
display:flex;
align-items:center;
flex:1;

`

const SearchContainer = styled.div`
display:flex;
height:35px;
margin-left:25px;
border: 0.5px solid lightgray;
transition: all .15s ease;

&:hover {
    border: 0.5px solid teal;
}

`
const Input=styled.input`
border:none;
width:500px;
height:35px;
${mobile({width:"50px",})};

`
const Button=styled.button`
margin-left:10px;
width:100px;
height:35px;
color:white;
background: #303030 ;
border:none;
border-radius:.25rem;
&:hover{
    background: #424242;
}
`

const Center=styled.div`
display:flex;
justify-content: center;
align-items: center;
flex:1;
`
const Logo=styled.h1`
font-family: 'Comforter', cursive;
cursor: pointer;
${mobile({fontSize:"24px",})};

`
const Right=styled.div`
display:flex;
align-items:center;
justify-content:flex-end;
flex:1;
${mobile({flex:2,justifyContent:"center",})};

`
const MenuItem=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-left:25px;
font-size: 14px;
cursor: pointer;
transition:all 200ms ease;
&:hover{
    color:teal;
}
${mobile({fontSize:"12px",marginLeft:"10px"})};
`

const MenuItemCountry=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-left:25px;
font-size: 14px;
cursor: pointer;
`
const MenuItemAccount=styled.div`
position: relative;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-left:25px;
font-size: 14px;
cursor: pointer;
&:hover{
    color:teal;
}
`
const Bottom=styled.div`
width:100%;
height: 40px;
display: flex;
justify-content: center;
`
const List=styled.ul`
    display: flex;
    list-style:none;
`
const Item=styled.li`
    text-transform: uppercase;
    letter-spacing: 2px;
    padding:10px 25px;
    border-bottom:3px solid white;
    transition:all 300ms ease;
    cursor: pointer;

    &:hover{
        border-bottom:3px solid crimson;
    }
`

const Country=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Account=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


const Navbar = () => {

    const [dropDownAccount,setDropDownAccount]=useState(false);
    const handleClickAccount=()=>{
        setDropDownAccount(!dropDownAccount)
        setDropDownCountry(false)
    }

    const [dropDownCountry,setDropDownCountry]=useState(false);
    const handleClickCountry=()=>{
        setDropDownCountry(!dropDownCountry)
        setDropDownAccount(false)

    }

    const cart = useSelector(state => state.cart)
    

    console.log(cart)
    return (
        <Container >
            <Top>
                <Left>
                    <Logo>ShopHz.</Logo>
                </Left>
                <Center onClick={()=>{setDropDownCountry(false);setDropDownAccount(false);}}>
                    <SearchContainer id="search">
                         <Search style={{color:"gray",fontSize:20,height:"35px",padding:"0 5px"}}/>
                        <Input placeholder="Search Products,"/>
                    </SearchContainer>
                    <Button>Search</Button>
                </Center>
                <Right>
                    <MenuItemCountry style={{position:"relative"}}  >
                        <Country onClick={handleClickCountry} >
                            <ReactCountryFlag countryCode="MA" svg style={{fontSize: '30px',height:'30px'}} cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/" cdnSuffix="svg" title="MA"/>
                            <ArrowDropDownRounded/>
                        </Country>
                        <DropDownCountry DropDownCountry={dropDownCountry} />
                    </MenuItemCountry>

                    <MenuItemAccount style={{position:"relative"}}>
                        <Account onClick={handleClickAccount}>
                            <PersonOutline/>
                            <span style={{fontSize:"14px"}}>Account</span>
                        </Account>
                        <DropDownAccount DropDownAccount={dropDownAccount} />
                    </MenuItemAccount>
                    
                    <MenuItem>
                        <Badge badgeContent={5} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                        <span style={{fontSize:"14px"}}>Cart</span>
                    </MenuItem>
                  
                   
                </Right>
            </Top>
            <Bottom>
              <List>
                  <Item>Offes</Item>
                  <Item>Women</Item>
                  <Item>Man</Item>
                  <Item>Kids</Item>
                  <Item>BABY</Item>
                  <Item>ACCESSORIES</Item>
                  <Item style={{color:'crimson'}}>up to 50% Discount</Item>
              </List>
              
            

            </Bottom>

        </Container>
    )
}

export default Navbar
