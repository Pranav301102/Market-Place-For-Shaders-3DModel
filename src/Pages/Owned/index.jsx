import React, { useEffect, useState } from "react";
import { OwnedItemCard } from "../../Component/Card/Card";
import axios from "axios";
import config from "../../config";
import styled from "styled-components";
import { Space, Title } from "@mantine/core";

function OwnedPage() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		axios
			.get(`${config.backendLocation}/sellableitem/owned`, {
				headers: { token: localStorage.token },
			})
			.then((res) => {
				setItems(res.data);
			});
	}, []);

	return (
		<>
			<Title
				order={1}
				align="center"
				mt="130px"
				mb="-150px"
				color={"#f0f0f0"}
			>
				Owned Items
			</Title>
			<Container>
				<Grid>
					{items.map((website, index) => (
						<OwnedItemCard
							id={website._id}
							hexa="#1D1148"
							title={website.title}
							price={website.price}
							description={website.description}
							image={website.image}
							stack={website.stack}
							asset={website.objectUrl}
							type={website.sellableType}
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

export default OwnedPage;
