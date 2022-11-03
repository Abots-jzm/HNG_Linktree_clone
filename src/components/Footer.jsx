import React from "react";
import ZuriLogo from "../assets/Zuri.Internship_Logo.svg";
import I4GLogo from "../assets/Ingressive-for-good-logo.svg";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
	return (
		<>
			<Outlet />
			<Container>
				<Zuri>
					<img src={ZuriLogo} alt="zuri internship logo" />
				</Zuri>
				<Text>HNG Internship 9 Frontend Task</Text>
				<I4G>
					<img src={I4GLogo} alt="ingressive for good logo" />
				</I4G>
			</Container>
		</>
	);
}

const Container = styled.footer`
	margin: 13.6rem 7.8vw 4.8rem;
	padding-top: 3.2rem;
	border-top: 1px solid #eaecf0;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media only screen and (max-width: 768px) {
		margin: 8.8rem 1.6rem 3.2rem;
		flex-direction: column;
		align-items: flex-start;
		gap: 1.6rem;
		justify-content: flex-start;
	}
`;

const Zuri = styled.div`
	@media only screen and (max-width: 768px) {
		width: 13.8rem;
	}
`;

const I4G = styled.div`
	@media only screen and (max-width: 768px) {
		width: 9.9rem;
	}
`;

const Text = styled.div`
	color: #667085;

	@media only screen and (max-width: 768px) {
		font-size: 1.4rem;
	}
`;
