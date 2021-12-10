import React from 'react';

function Home(props)
{
  return(
    <div>
    <h1>Hello {props.name}{props.children}</h1>
    </div>
  )
}
export default Home;