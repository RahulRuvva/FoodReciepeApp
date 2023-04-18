import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';



function Popular() {

    const[popular, setPopular] = useState([]);

    useEffect(()=> {
        getPopular();
    }, []);
    const getPopular = async() => {

        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=a9db63d77f444e87b9432207309cd0f1&number=9`)
        const data = await api.json();
        setPopular(data.recipes);
    };
  return (
    <div>
      
            <Wrapper>
              <h3>Popular Picks</h3>

              <Splide options={{
                perPage:4,
                arrows:false,
                pagination: false,
                drag: "free",
                gap: "5rem",

              }}>
              {popular.map((reciepe) => {
                return(
                  <SplideSlide>
                    <Card key={reciepe.index}>
                      <p>{reciepe.title}</p>
                      <img src={reciepe.image} alt={reciepe.title}/>
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

  img {
    border-radius: 2rem;
  }
`

export default Popular