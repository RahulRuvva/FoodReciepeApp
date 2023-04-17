import React, { useEffect } from 'react'


function Popular() {

    useEffect(()=> {
        getPopular();
    }, []);
    const getPopular = async() => {

        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=a9db63d77f444e87b9432207309cd0f1&number=9`)
        const data = await api.json();
        console.log(data);
    }
  return (
    <div>Popular</div>
  )
}

export default Popular