import { Canvas } from "@react-three/fiber";
import { Watch } from "./model";
import {
	useGLTF,
	PresentationControls,
	Environment,
	ContactShadows,
	Scroll,
	ScrollControls,
	OrbitControls,
} from "@react-three/drei";
import styled from "styled-components";
import "../PricingCard/pricecard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config";
import { Button } from "@mantine/core";
export default function ModelScene() {
	const [product, setProduct] = useState();

	useEffect(() => {
		const id = window.location.href.split("id=")[1];
		axios
			.get(`${config.backendLocation}/sellableitem/${id}`)
			.then((res) => {
				console.log(res.data);
				setProduct(res.data);
			});
	}, []);

	console.log(OrbitControls);
	return (
		<>
			{product && (
				<>
					<ModelContainer>
						<Canvas
							shadows
							dpr={[1, 2]}
							camera={{ position: [0, 0, 8], fov: 50 }}
						>
							<ambientLight intensity={0.5} />
							<spotLight
								position={[10, 10, 10]}
								angle={0.15}
								penumbra={1}
								shadow-mapSize={[512, 512]}
								castShadow
							/>
							<OrbitControls />
							<Watch
								// asset="/watch-v1.glb"
								asset={`${config.backendLocation}/file/download/${product.objectUrl}`}
								rotation={[-Math.PI / 2, 0, 0]}
								position={[0, 0.25, 0]}
								scale={0.003}
							/>
							<ScrollControls pages={0}>
								<Scroll html>
									<div className="CardPricing"></div>
									<div className="price-card">
										<div className="name">
											Name: {product.title}
										</div>
										<div className="price">
											Price: ₹{product.price}
										</div>
										<Button
											mt="xl"
											sx={{
												width: 100,
												height: 30,
												borderRadius: 20,
												marginBottom: 20,
											}}
										>
											Buy Now
										</Button>
									</div>

									<div className="disc">
										<div className="title">Discription</div>
										<div className="text">
											{product.description}
										</div>
									</div>
								</Scroll>
							</ScrollControls>
							<ContactShadows
								position={[0, -1.4, 0]}
								opacity={0.75}
								scale={10}
								blur={2.5}
								far={4}
							/>
							<Environment preset="city" />
						</Canvas>
					</ModelContainer>
				</>
			)}
		</>
	);
}

const ModelContainer = styled.div`
	height: 100vh;
	width: 100vw;
`;
