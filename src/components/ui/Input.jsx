import React from "react";
import styled from "styled-components";
import { useState } from "react";

export default function Input({ label, children, id, type, error, isError, enteredValue, onChange, onBlur }) {
	return (
		<div>
			<Label htmlFor={id}>{label}</Label>
			<InputStyle
				type={type || "text"}
				name={id}
				id={id}
				placeholder={children}
				onChange={onChange}
				value={enteredValue}
				onBlur={onBlur}
				isError={isError}
			/>
			{isError && <ErrorText>{error}</ErrorText>}
		</div>
	);
}

const ErrorText = styled.div`
	font-size: 1.4rem;
	color: #f83f23;
	margin-top: 0.6rem;
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
	border: ${(props) => (props.isError ? "1px solid #F89687" : "1px solid #d0d5dd")};
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
