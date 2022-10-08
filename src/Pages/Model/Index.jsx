// import React from 'react'
// import Card from '../../Component/Card/Card'

// function Index() {
//   return (
//     <>
//         <Card/>
//     </>
//   )
// }

// export default Index
import { ModelCard } from "../../Component/Card/Card";
import styled from "styled-components";
import Search from '../Search Bar/search';
const websites = [
  {
    "postion":"center",
    "hexa": "#1D1148",
    "title": "Watch",
    "stack": ["Watch", "Brown", "High-Res"],
    "description": "A Watch",
    "madeBy":"Pranav",
    "price":"800",
    "image": "https://res.cloudinary.com/vinzcelavi/image/upload/w_320,dpr_2.0/v1613408078/codesandbox/swile_x8mcnc.png"
  }
]

export default function Projects(){
    return(
      <>
        <Search/>
        <Container>
        <Grid>
        {websites.map((website, index) => (
            <ModelCard
              key={website.description}
              hexa={website.hexa}
              title={website.title}
              description={website.description}
              image={website.image}
              stack={website.stack}
              position={website.postion}
            />
          ))}
          </Grid>
        </Container>
      </>
    );
}

const Container = styled.div`
  width:100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 200px;
  /* min-height: 400vh; */
  height:fit-content ;
  /* margin-top:-130px ; */
`
const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;;
  padding-left: calc(10vw - 160px);
  height: fit-content ;
  
  /* Fake padding-right */
  &::after {
    content: '';
    position: relative;
    display: block;
    flex-shrink: 0;
    width: calc(50vw - 160px);
    height: 1px;
  }
  > button {
    margin-right: 40px;
  }
  /* Hide the others cards */
  > button:not(:first-child) {
    visibility: visible; /* switch to 'visible' */
  }
`;