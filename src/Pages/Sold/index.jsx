import React, { useEffect, useState } from "react";
import { CreatedItemCard } from "../../Component/Card/Card";
import axios from "axios";
import config from "../../config";
import styled from "styled-components";
import { Button, Paper, Space, Title } from "@mantine/core";

function SoldPage() {
	const [items, setItems] = useState([]);
	const [dueAmount, setDueAmount] = useState(0);

	useEffect(() => {
		axios
			.get(`${config.backendLocation}/sellableitem/created`, {
				headers: { token: localStorage.token },
			})
			.then((res) => {
				setItems(res.data);
			});

		axios
			.get(`${config.backendLocation}/payout/due`, {
				headers: { token: localStorage.token },
			})
			.then((res) => {
				setDueAmount(res.data.dueAmount);
			});
	}, []);

	return (
		<>
			{dueAmount && (
				<Paper px="10vw" py="md" mt="130px" mb="-100px" mx="470px">
					<Title order={2} align="center">
						Balance ₹{dueAmount}
					</Title>
					<Button
						fullWidth
						onClick={() => {
							axios
								.post(
									`${config.backendLocation}/payout/withdraw`,
									{},
									{
										headers: { token: localStorage.token },
									}
								)
								.then((res) => {
									console.log(res.data);
									alert("transfered balance to account");
									setDueAmount(0);
								});
						}}
					>
						Transfer To Account
					</Button>
				</Paper>
			)}
			<Title
				order={1}
				align="center"
				mt="130px"
				mb="-150px"
				color={"#f0f0f0"}
			>
				Created Items
			</Title>
			<Container>
				<Grid>
					{items.map((website, index) => (
						<CreatedItemCard
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
							sold={website.purchaces}
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

export default SoldPage;
