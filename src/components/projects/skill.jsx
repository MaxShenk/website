import React from "react";

import "./styles/skill.css";

const Skill = (props) => {
	const {  title,image } = props;

	return (
		<React.Fragment>
			<div className="skill">
					<div className="skill-container">
						<div className="skill-logo">
							<img className= "skill-image" src={image} alt="logo" />
						</div>
						<div className="skill-title">{title}</div>
					</div>
			</div>
		</React.Fragment>
	);
};

export default Skill;