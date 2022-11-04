import React from "react";
import styled from "styled-components";
import Profile from "../components/Profile";
import Links from "../components/Links";
// import ProfileImg from "../assets/profile__img.jpg";
import ProfileImg from "../assets/1666880703784.jpg";

export default function Home() {
	return (
		<Container>
			<Profile name="@The_Jazzmann" image={ProfileImg} />
			<Links />
		</Container>
	);
}

const Container = styled.div`
	padding: 6.4rem 10vw 13.6rem;

	@media only screen and (max-width: 768px) {
		padding: 6.4rem 1.6rem 8.8rem;
	}
`;
