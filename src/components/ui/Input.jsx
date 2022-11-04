import React from "react";
import styled from "styled-components";

export default function Input({ label, children, id, type }) {
	if (type === "text-area")
		return (
			<div>
				<Label htmlFor={id}>{label}</Label>
				<TextArea name={id} id={id} cols="30" rows="10" placeholder={children} />
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
	width: 100%;

	&::placeholder {
		color: #667085;
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

	&::placeholder {
		color: #667085;
	}
`;
