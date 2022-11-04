import React from "react";
import styled from "styled-components";
import Checkbox from "../components/ui/Checkbox";
import Input from "../components/ui/Input";

export default function Contact() {
	function handleForm(e) {
		e.preventDefault();
	}

	return (
		<Container>
			<Heading>
				<h2>Contact Me</h2>
				<p>Hi there, contact me to ask me about anything you have in mind.</p>
			</Heading>
			<Form onSubmit={handleForm}>
				<Names>
					<Input label="First name" id="first_name">
						Enter your first name
					</Input>
					<Input label="Last name" id="last_name">
						Enter your last name
					</Input>
				</Names>
				<Input label="Email" type="email" id="email">
					yourname@email.com
				</Input>
				<Input label="Message" type="text-area" id="message">
					Send me a message and I'll reply you as soon as possible...
				</Input>
				<Checkbox id="agree">You agree to providing your data to abotsjzm who may contact you.</Checkbox>
				<BtnSubmit id="btn__submit" type="submit">
					Send message
				</BtnSubmit>
			</Form>
		</Container>
	);
}

const BtnSubmit = styled.button`
	background-color: #1570ef;
	padding: 1.2rem 2rem;
	font-weight: 600;
	color: white;
	border-radius: 8px;
	margin-top: 0.8rem;

	&:hover {
		background-color: #175cd3;
	}

	&:active,
	&:focus {
		box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #d1e9ff;
	}
`;

const Names = styled.div`
	display: flex;
	gap: 2.4rem;

	& > div {
		flex: 1;
	}
`;

const Form = styled.form`
	margin-top: 4.8rem;
	display: flex;
	flex-direction: column;
	gap: 2.4rem;
`;

const Heading = styled.div`
	h2 {
		font-weight: 600;
		font-size: 3.6rem;
		color: #101828;
		margin-bottom: 2rem;
	}

	p {
		font-size: 2rem;
		color: #475467;
	}
`;

const Container = styled.div`
	padding: 15.6rem 25vw 23.6rem;

	@media only screen and (max-width: 768px) {
		padding: 6.4rem 1.6rem 9.8rem;
	}
`;
