import  styled  from 'styled-components'
import React, { useState ,useEffect} from 'react'
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import NewsLetter from '../Components/NewsLetter'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../responsive'
import {useLocation} from 'react-router-dom'
import { publicRequest } from '../RequestMethodes'
import { useDispatch } from 'react-redux'
import {addProduct} from '../redux/cartRedux'



const Container=styled.div`

`
const Warpper=styled.div`
padding: 50px;
display:flex;
${mobile({padding:"10px",flexDirection:"column"})};

`
const ImgContainer=styled.div`
flex:1;
`
const Image=styled.img`
width:100%;
height: 90vh;
object-fit:cover;
${mobile({height:"40vh",})};

`
const InfoContainer=styled.div`
flex:1;
padding: 0px 50px;
${mobile({padding:"10px",})};

`
const Title=styled.h1`
font-weight: 20px;
`
const Desc=styled.p`
margin: 20px 0px;
`
const Price=styled.span`
font-weight: 100;
font-size: 40px;
`

const FilterContainer=styled.div`
width:50%;
margin: 30px 0px;
display:flex;
justify-content:space-between;
${mobile({width:"100%",})};

`
const Filter=styled.div`
display: flex;
align-items:center;
`
const FilterTitle=styled.span`
font-size: 20px;
font-weight: 200;
`
const FilterColor=styled.div`
width: 20px;
height: 20px;
border-radius:50%;
background-color:${props=>props.color};
margin: 0px 5px;
cursor: pointer;
`
const FilterSize=styled.select`
margin-left:10px;
padding: 5px;
`
const FilterSizeOption=styled.option`

`
const AddContainer=styled.div`
display: flex;
align-items:center;
width: 50%;
justify-content: space-between;
${mobile({width:"100%",})};

`
const AmountContainer=styled.div`
display: flex;
align-items:center;
font-weight: 700;`

const Amount=styled.span`
width: 30px;
height: 30px;
border-radius:10px;
border:1px solid teal;
display: flex;
align-items:center;
justify-content: center;
margin: 0 5px;
`
const Button=styled.div`
padding: 15px;
border:2px solid teal;
background-color:white;
cursor: pointer;
font-weight: 500;
transition:all .2s ease;
&:hover{
    background: teal;
    color:white;
}
`


const Product = () => {
  
        const location = useLocation();
        const id = location.pathname.split("/")[2];
        const [product, setProduct] = useState({});
        const [quantity, setQuantity] = useState(1);
        const [color, setColor] = useState("");
        const [size, setSize] = useState("");
        const dispatch = useDispatch();
      
        useEffect(() => {
          const getProduct = async () => {
            try {
              const res = await publicRequest.get("/products/find/" + id);
              setProduct(res.data);
            } catch {}
          };
          getProduct();
        }, [id]);
      
    
      
        const handleClick = () => {
          dispatch(
            addProduct({ ...product, quantity, color, size })
          );
        };

    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Warpper>
                <ImgContainer>
                    <Image src={product.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.desc}</Desc>
                    <Price>${product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {product.color?.map((c) => (
                                <FilterColor color={c} key={c} onClick={setColor(c)}/>
                            ))}
                            
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onClick={(e)=>{setSize(e.target.value)}}>
                            {product.size?.map((s) => (
                                <FilterSizeOption key={s} >{s}</FilterSizeOption>
                            ))}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={()=>{quantity>1 && setQuantity(quantity-1)}}/>
                            <Amount>{quantity}</Amount>
                            <Add onClick={()=>{setQuantity(quantity+1)}}/>
                        </AmountContainer>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Warpper>
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}

export default Product
