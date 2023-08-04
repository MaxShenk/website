import React from "react";

import Skill from "./skill";


import "./styles/someSkills.css";

const SomeSkills = (props) => {
	const {skills,} = props;
	return (
		<div className="some-skills-container">
			
			{ skills.map((skill, index) => (
				<div className="some-skills-skill" key={index}>
					<Skill
						title={skill().title}
						image={skill().logo}
					/>
				</div>
			))}
		</div>
	);
};

export default SomeSkills;
