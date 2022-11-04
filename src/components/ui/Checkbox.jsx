import React from "react";
import styled from "styled-components";
import Checkmark from "../icons/Checkmark";

export default function Checkbox({ children, id, onChange }) {
	return (
		<Container>
			<Input type="checkbox" name={id} id={id} onChange={onChange} />
			<Label htmlFor={id}>
				<span>
					<div className="checkmark">
						<Checkmark />
					</div>
				</span>
				{children}
			</Label>
		</Container>
	);
}

const Input = styled.input`
	display: none;

	&:checked + label span {
		border: 1px solid #1570ef;

		.checkmark {
			opacity: 1;
		}
	}

	&:focus + label span {
		border: 1px solid #84caff;
		box-shadow: 0px 0px 0px 4px #d1e9ff;
	}
`;

const Label = styled.label`
	cursor: pointer;
	position: relative;
	padding-left: 3.2rem;

	span {
		height: 2rem;
		width: 2rem;
		display: inline-block;
		border: 1px solid #d0d5dd;
		border-radius: 6px;
		position: absolute;
		left: 0;
		top: -0.1rem;

		.checkmark {
			position: absolute;
			top: -0.2rem;
			right: 0.3rem;
			opacity: 0;
		}
	}
`;

const Container = styled.div`
	display: flex;
	gap: 1.2rem;
`;
