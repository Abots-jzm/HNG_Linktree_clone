import React from "react";
import styled from "styled-components";

export default function Contact() {
	return (
		<Container>
			<Heading>
				<h2>Contact Me</h2>
				<p>Hi there, contact me to ask me about anything you have in mind.</p>
			</Heading>
			<Form>yo</Form>
		</Container>
	);
}

const Form = styled.form`
	margin-top: 4.8rem;
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
