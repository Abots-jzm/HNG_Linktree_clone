import React from "react";
import styled from "styled-components";

function App() {
	return (
		<div>
			<Container>yo</Container>
		</div>
	);
}

export default App;

const Container = styled.div`
	padding: 6.4rem 10vw 0;

	@media only screen and (max-width: 768px) {
		padding: 6.4rem 1.6rem 0;
	}
`;
