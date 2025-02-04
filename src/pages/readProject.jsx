import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import myProjects from "../data/projects";

import "./styles/readProject.css";
import SomeSkills from "../components/projects/someSkills";

let ProjectStyle = styled.div``;

const ReadProject = () => {
	const navigate = useNavigate();
	let { slug } = useParams();

	const project = myProjects[slug - 1];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [project]);

	ProjectStyle = styled.div`
		${project().style}
	`;

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${project().title} | ${INFO.main.title}`}</title>
				<meta name="description" content={project().description} />
				<meta name="keywords" content={project().keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar />

				<div className="content-wrapper">
					<div className="read-project-logo-container">
						<div className="read-project-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-project-container">
						<div className="read-project-back">
							<img
								src="../back-button.png"
								alt="back"
								className="read-project-back-button"
								onClick={() => navigate(-1)}
							/>
						</div>

						<div className="read-project-wrapper" style={{color: 'white'}}>

							<div className="title read-project-title">
								{project().title}
							</div>
							<div className="read-project-skills">
								{<SomeSkills 
								 skills = {project().skills} />}
								 
							</div>
							<p></p>
							<p></p>
							<div className="read-project-body" style={{color: '#000000'}}>
								{project().description}
								<p></p>
								<ProjectStyle>{project().body}</ProjectStyle>
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ReadProject;
