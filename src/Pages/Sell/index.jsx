import {
	Button,
	Container,
	Header,
	Input,
	NativeSelect,
	Paper,
	Space,
	Textarea,
	Title,
} from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";
import { Select } from "@react-three/drei";
import axios from "axios";
import React from "react";
import config from "../../config";
import uploadImage from "../../utils/uploadImage";

function Sell() {
	return (
		<Container size="xs">
			<Space h="xl" />
			<Space h="xl" />
			<Space h="xl" />
			<Space h="xl" />
			<Space h="xl" />

			<Paper px="md" py="lg">
				<Title order={2}>Sell Item</Title>

				<form
					onSubmit={(e) => {
						(async () => {
							e.preventDefault();

							const data = {
								title: e.target.title.value,
								price: e.target.price.value,
								description: e.target.description.value,
								sellableType: e.target.sellableType.value,
								image: await uploadImage(
									e.target.image.files[0]
								),
								objectUrl: await uploadImage(
									e.target.asset.files[0]
								),
							};

							console.log(data);

							axios
								.post(
									`${config.backendLocation}/sellableitem/`,
									data,
									{ headers: { token: localStorage.token } }
								)
								.then((res) => {
									console.log(res.data);
									window.location = "/sold";
								})
								.catch((err) => {
									console.log(err);
									if (err.response)
										alert(err.response.data.msg);
								});
						})();
					}}
				>
					<Space h="md" />
					<Input
						placeholder="title"
						name="title"
						type="text"
						required
					/>
					<Space h="md" />
					<Input
						placeholder="price"
						name="price"
						type="number"
						required
					/>
					<Space h="md" />
					<Textarea
						placeholder="description"
						name="description"
						required
					/>
					<Space h="md" />
					image:
					<Space h="xs" />
					<Input type="file" name="image" required />
					<Space h="md" />
					asset:
					<Space h="xs" />
					<Input type="file" name="asset" required />
					<Space h="md" />
					<NativeSelect
						data={["model", "shader"]}
						placeholder="category"
						name="sellableType"
						required
					/>
					<Space h="md" />
					<input
						type="submit"
						style={{ display: "none" }}
						id="submit-sellable-item"
					/>
					<Button
						onClick={() =>
							document
								.getElementById("submit-sellable-item")
								.click()
						}
					>
						Sell Item
					</Button>
				</form>
			</Paper>
		</Container>
	);
}

export default Sell;
