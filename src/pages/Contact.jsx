import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Checkbox from "../components/ui/Checkbox";
import Input from "../components/ui/Input";
import TextArea from "../components/ui/TextArea";

export default function Contact() {
	const [canSubmit, setCanSubmit] = useState(false);

	const [enteredFirstName, setEnteredFirstName] = useState("");
	const [firstNameIsError, setFirstNameIsError] = useState(false);
	const [firstNameIsTouched, setFirstNameIsTouched] = useState(false);

	const [enteredLastName, setEnteredLastName] = useState("");
	const [lastNameIsError, setLastNameIsError] = useState(false);
	const [lastNameIsTouched, setLastNameIsTouched] = useState(false);

	const [enteredEmail, setEnteredEmail] = useState("");
	const [emailIsError, setEmailIsError] = useState(false);
	const [emailIsTouched, setEmailIsTouched] = useState(false);

	const [enteredMessage, setEnteredMessage] = useState("");
	const [messageIsError, setMessageIsError] = useState(false);
	const [messageIsTouched, setMessageIsTouched] = useState(false);

	const [termsIsChecked, setTermsIsChecked] = useState(false);

	function firstNameChangeHandler(e) {
		if (!firstNameIsTouched) setFirstNameIsTouched(true);

		const value = e.target.value;
		setEnteredFirstName(value);
		if (firstNameIsTouched) setFirstNameIsError(!value);
		else setFirstNameIsError(false);
	}

	function lastNameChangeHandler(e) {
		if (!lastNameIsTouched) setLastNameIsTouched(true);

		const value = e.target.value;
		setEnteredLastName(value);
		if (lastNameIsTouched) setLastNameIsError(!value);
		else setLastNameIsError(false);
	}

	function messageChangeHandler(e) {
		if (!messageIsTouched) setMessageIsTouched(true);

		const value = e.target.value;
		setEnteredMessage(value);
		if (messageIsTouched) setMessageIsError(!value);
		else setMessageIsError(false);
	}

	function emailChangeHanlder(e) {
		if (!emailIsTouched) setEmailIsTouched(true);

		const value = e.target.value;
		setEnteredEmail(value);

		if (emailIsTouched)
			setEmailIsError(
				!value
					.toLowerCase()
					.match(
						/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
					)
			);
	}

	useEffect(() => {
		if (
			!firstNameIsError &&
			firstNameIsTouched &&
			!lastNameIsError &&
			lastNameIsTouched &&
			!emailIsError &&
			emailIsTouched &&
			!messageIsError &&
			messageIsTouched &&
			termsIsChecked
		)
			setCanSubmit(true);
		else setCanSubmit(false);
	}, [enteredFirstName, enteredLastName, emailIsError, messageIsError, termsIsChecked]);

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
					<Input
						label="First name"
						id="first_name"
						error="Please enter your first name"
						onChange={firstNameChangeHandler}
						isError={firstNameIsError}
						enteredValue={enteredFirstName}
					>
						Enter your first name
					</Input>
					<Input
						label="Last name"
						id="last_name"
						error="Please enter your last name"
						onChange={lastNameChangeHandler}
						isError={lastNameIsError}
						enteredValue={enteredLastName}
					>
						Enter your last name
					</Input>
				</Names>
				<Input
					label="Email"
					type="email"
					id="email"
					error="Please enter a valid email address"
					onChange={emailChangeHanlder}
					isError={emailIsError}
					enteredValue={enteredEmail}
				>
					yourname@email.com
				</Input>
				<TextArea
					label="Message"
					id="message"
					error="Please enter a message"
					onChange={messageChangeHandler}
					isError={messageIsError}
					enteredValue={enteredMessage}
				>
					Send me a message and I'll reply you as soon as possible...
				</TextArea>
				<Checkbox id="agree" onChange={(e) => setTermsIsChecked(e.target.checked)}>
					You agree to providing your data to abotsjzm who may contact you.
				</Checkbox>
				<BtnSubmit id="btn__submit" type="submit" disabled={!canSubmit}>
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

	&:disabled {
		background-color: #b2ddff;
		cursor: not-allowed;
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
