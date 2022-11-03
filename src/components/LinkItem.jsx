import React from "react";
import styled from "styled-components";

export default function LinkItem({ children, url, id, title }) {
	return (
		<Anchor id={id} href={url} target="_blank" title={children}>
			{title}
		</Anchor>
	);
}

const Anchor = styled.a`
	&,
	&:link,
	&:visited {
		width: 100%;
		padding: 2.4rem;
		text-align: center;
		background-color: #eaecf0;
		border-radius: 8px;
		cursor: pointer;
		text-decoration: none;
		color: #101828;
		font-size: 1.8rem;
		font-weight: 500;

		transition: all 0.2s;

		@media only screen and (max-width: 600px) {
			font-size: 1.4rem;
		}
	}

	&:hover {
		background-color: #d0d5dd;
	}

	&:active,
	&:focus {
		outline: 1px solid #98a2b3;
		background-color: #eaecf0;
	}
`;