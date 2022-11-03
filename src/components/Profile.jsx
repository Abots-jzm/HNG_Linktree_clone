import React from "react";
import ShareIcon from "./icons/ShareIcon";
import CameraSVG from "../assets/camera-icon.svg";
import styled from "styled-components";

export default function Profile({ image, name }) {
	return (
		<Container>
			<ShareMobile>&middot;&middot;&middot;</ShareMobile>
			<PictureContainer>
				<ShareDesktop>
					<ShareIcon />
					<ToolTip>Share Link</ToolTip>
				</ShareDesktop>
				<Picture id="profile__img">
					<PictureOverlay>
						<div>
							<img src={CameraSVG} alt="cameraIcon" />
						</div>
					</PictureOverlay>
					<img src={image} alt="profile picture" />
				</Picture>
			</PictureContainer>
			<Name id="twitter">{name}</Name>
			<div className="hidden" id="slack">
				abotsjzm
			</div>
		</Container>
	);
}

const Container = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2.4rem;
	position: relative;

	@media only screen and (max-width: 768px) {
		margin-bottom: 3.2rem;
	}
`;

const Share = styled.div`
	position: absolute;
	top: -2rem;
	border-radius: 50%;
	width: 4rem;
	height: 4rem;
	background-color: #ffffff;
	border: 1px solid #d0d5dd;
	color: #98a2b3;
	border-style: dashed;
	display: grid;
	place-items: center;
	cursor: pointer;

	transition: all 0.2s;

	&:hover {
		background-color: #f9fafb;
		color: #667085;
	}

	&:active,
	&:focus {
		background-color: #ffffff;
		color: #98a2b3;
		box-shadow: 0px 0px 0px 4px #f2f4f7;
	}
`;

const ShareMobile = styled(Share)`
	right: 0;
	font-size: 2.4rem;
	display: none;
	user-select: none;

	@media only screen and (max-width: 768px) {
		display: grid;
	}
`;

const ShareDesktop = styled(Share)`
	right: -28.4rem;

	&:hover span {
		visibility: visible;
		opacity: 1;
	}

	@media only screen and (max-width: 768px) {
		display: none;
	}
`;

const ToolTip = styled.span`
	background-color: #101828;
	font-size: 1.2rem;
	font-weight: 600;
	color: #fff;
	padding: 0.8rem 1.2rem;
	width: max-content;
	border-radius: 8px;
	position: absolute;
	z-index: 1;
	right: 130%;
	visibility: hidden;
	opacity: 0;

	transition: opacity 0.2s;

	&::after {
		content: "";
		position: absolute;
		top: 50%;
		left: 100%;
		margin-top: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: transparent transparent transparent #101828;
	}
`;

// .shareDesktop:hover .toolTip {
// 	visibility: visible;
// 	opacity: 1;
// }

const PictureContainer = styled.div`
	position: relative;
`;

const Picture = styled.div`
	width: 8.8rem;
	height: 8.8rem;
	overflow: hidden;
	border-radius: 50%;
	cursor: pointer;

	&:hover > div {
		visibility: visible;
		opacity: 1;
	}

	&:focus,
	&:active {
		outline: 5.5px solid #ebe9fe;
	}
`;

const PictureOverlay = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	border-radius: 50%;
	background-color: rgba(52, 64, 84, 0.75);
	opacity: 0;
	visibility: none;

	transition: opacity 0.2s;

	div {
		margin: 5.8rem auto 0;
		width: 2rem;
	}
`;

// .picture:hover .pictureOverlay {
// 	visibility: visible;
// 	opacity: 1;
// }

const Name = styled.div`
	font-size: 2rem;
	font-weight: 700;
	color: #101828;

	@media only screen and (max-width: 768px) {
		font-size: 1.8rem;
	}
`;
