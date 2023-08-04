import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./Lubrizol.png"
								alt="Lubrizol"
								className="work-image"
							/>
							<div className="work-title">Lubrizol</div>
							<div className="work-subtitle">
								Process Engineering Intern
							</div>
							<div className="work-duration">Aug 2022 - May 2023</div>
						</div>

						<div className="work">
							<img
								src="./GorillaGlue.png"
								alt="Gorilla Glue"
								className="work-image"
							/>
							<div className="work-title">Gorilla Glue</div>
							<div className="work-subtitle">
								Data Science Intern
							</div>
							<div className="work-duration">May 2022 - Aug 2022</div>
						</div>
						<div className="work">
							<img
								src="./CodeWiz.png"
								alt="CodeWiz"
								className="work-image"
							/>
							<div className="work-title">CodeWiz</div>
							<div className="work-subtitle">
							Computer Science Coach/Teacher
							</div>
							<div className="work-duration">Oct 2020 - Oct 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
