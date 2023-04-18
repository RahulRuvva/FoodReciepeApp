import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';



function Veggie() {
  const[veggie, setVeggie] = useState([]);

  useEffect(()=> {
      getVeggie();
  }, []);
  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");

    if(check) 
    {
      setVeggie(JSON.parse(check));
    }else 
    {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=a9db63d77f444e87b9432207309cd0f1&number=9&tags=vegetarian`)
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
      console.log(data.recipes);

  };
}
  return (
    <div>
      
            <Wrapper>
              <h3>Veggies all-over</h3>

              <Splide options={{
                perPage:3,
                arrows:false,
                pagination: false,
                drag: "free",
                gap: "5rem",

              }}>
              {veggie.map((reciepe) => {
                return(
                  <SplideSlide key={reciepe.id}>
                    <Card key={reciepe.index}>
                      <p>{reciepe.title}</p>
                      <img src={reciepe.image} alt={reciepe.title}/>
                      <Gradient/>
                    </Card>
                    </SplideSlide>  
                );
              })}
              </Splide>
            </Wrapper>
         
     
    </div>
  )
}

const Wrapper = styled.div `
  margin: 4rem 0rem;
  
`;
const Card = styled.div `
  min-height : 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left:0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p 
  {
    position: absolute;
    z-index : 10;
    left: 50%;
    bottom: 0%;
    transform : translate(-50%, 0%);
    color: #fff;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1.5rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Gradient = styled.div `
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;


export default Veggie