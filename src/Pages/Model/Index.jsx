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
import Search from "../Search Bar/search";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config";
// const models = [
//     {
//       "postion":"center",
//       "hexa": "#1D1148",
//       "title": "test",
//       "stack": ["react", "express", "node"],
//       "description": "test",
//       "image": "https://res.cloudinary.com/vinzcelavi/image/upload/w_320,dpr_2.0/v1613408078/codesandbox/swile_x8mcnc.png"
//     },
//     {
//       "postion":"center",
//       "hexa": "#FFCD00",
//       "title": "Typeform",
//       "stack": ["react", "express", "node"],
//       "description": "https://www.welcometothejungle.com/fr/",
//       "image": "https://res.cloudinary.com/vinzcelavi/image/upload/w_320,dpr_2.0/v1613409201/codesandbox/typeform_vqqkob.png"
//     },
//     {
//       "postion":"center",
//       "hexa": "#FFCD00",
//       "title": "Typeform",
//       "stack": ["react", "express", "node"],
//       "description": "https://www.welcometothejungle.com/fr/",
//       "image": "https://res.cloudinary.com/vinzcelavi/image/upload/w_320,dpr_2.0/v1613409201/codesandbox/typeform_vqqkob.png"
//     },
//     { "postion":"center",
//       "hexa": "#FFCD00",
//       "title": "Typeform",
//       "stack": ["react", "express", "node"],
//       "description": "https://www.welcometothejungle.com/fr/",
//       "image": "https://res.cloudinary.com/vinzcelavi/image/upload/w_320,dpr_2.0/v1613409201/codesandbox/typeform_vqqkob.png"
//     },
//     {
//       "postion":"center",
//       "hexa": "#FFCD00",
//       "title": "Typeform",
//       "stack": ["react", "express", "node"],
//       "description": "https://www.welcometothejungle.com/fr/",
//       "image": "https://res.cloudinary.com/vinzcelavi/image/upload/w_320,dpr_2.0/v1613409201/codesandbox/typeform_vqqkob.png"
//     }
// ]

export default function Projects() {
	const [models, setModels] = useState([]);
	const [allModels, setAllModels] = useState([]);
	const [query, setQuery] = useState("");

	useEffect(() => {
		axios.get(`${config.backendLocation}/sellableitem`).then((res) => {
			setModels(res.data.filter((item) => item.sellableType == "model"));
			setAllModels(
				res.data.filter((item) => item.sellableType == "model")
			);
		});
	}, []);

	useEffect(() => {
		console.log({ query });
		const filteredModels = allModels.filter((model) =>
			model.title.includes(query)
		);
		setModels(filteredModels);
	}, [query]);

	return (
		<>
			<Search query={query} setQuery={setQuery} />
			<Container>
				<Grid>
					{models.map((website, index) => (
						<ModelCard
              id={website._id}
							hexa={website.hexa}
							title={website.title}
							price={website.price}
							description={website.description}
							image={website.image}
							stack={website.stack}
							asset={website.objectUrl}
							position={website.postion}
						/>
					))}
				</Grid>
			</Container>
		</>
	);
}

const Container = styled.div`
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 200px;
	/* min-height: 400vh; */
	height: fit-content;
	/* margin-top:-130px ; */
`;
const Grid = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding-left: calc(10vw - 160px);
	height: fit-content;

	/* Fake padding-right */
	&::after {
		content: "";
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
