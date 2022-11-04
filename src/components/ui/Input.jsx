import React from "react";
import styled from "styled-components";

export default function Input({ label, children, id, type }) {
	if (type === "text-area")
		return (
			<div>
				<Label htmlFor={id}>{label}</Label>
				<TextArea name={id} id={id} placeholder={children} />
			</div>
		);

	return (
		<div>
			<Label htmlFor={id}>{label}</Label>
			<InputStyle type={type || "text"} name={id} id={id} placeholder={children} />
		</div>
	);
}

const TextArea = styled.textarea`
	font: inherit;
	margin-top: 0.6rem;
	border-radius: 8px;
	padding: 1rem 1.4rem;
	border: 1px solid #d0d5dd;
	width: 100%;
	color: #101828;
	height: 13.2rem;
	resize: none;

	&::placeholder {
		color: #667085;
	}

	&:focus,
	&:active {
		border: 1px solid #84caff;
		outline: none;
		box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
	}
`;

const Label = styled.label`
	color: #344054;
	font-weight: 500;
	font-size: 1.4rem;
`;

const InputStyle = styled.input`
	font: inherit;
	margin-top: 0.6rem;
	border-radius: 8px;
	padding: 1rem 1.4rem;
	border: 1px solid #d0d5dd;
	width: 100%;
	color: #101828;

	&::placeholder {
		color: #667085;
	}

	&:focus,
	&:active {
		border: 1px solid #84caff;
		outline: none;
		box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
	}
`;
