import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Info=styled.div`
opacity:0;
width: 100%;
height: 100%;
position:absolute;
top: 0;
left: 0;
background-color:rgba(0,0,0,.2);
z-index:3;
display: flex;
align-items: center;
justify-content: center;
transition:all 0.5s ease;
cursor: pointer;
`

const Container=styled.div`
flex:1;
margin:20px 10px;
width:300px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color:#B4BFB2;
position: relative;

&:hover ${Info}{
opacity:1;
}
`
const Circle=styled.div`
position:absolute;
width: 200px;
height: 200px;
border-radius:50%;
background-color:#DCE0DB;
`
const Image=styled.img`
height:90%;
z-index:2;
`

const Icon=styled.div`
width: 40px;
height: 40px;
border-radius:50%;
background-color:white;
display:flex;
align-items: center;
justify-content: center;
margin: 10px;
transition:all 0.3s ease;

&:hover{
    color:#fff;
    background-color:#318162;
    transform:scale(1.1);
}
`

const Product = ({item}) => {
    return (
        <div>
            <Container>
                <Circle/>
                <Image src={item.img} key={item.id}/>
                <Info>
                    <Icon>
                        <ShoppingCartOutlined/>
                    </Icon>
                    <Icon>
                        <Link to={`/product/${item._id}`}>
                        <SearchOutlined/>
                        </Link>
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlined/>
                    </Icon>
                </Info>
            </Container>
        </div>
    )
}

export default Product
