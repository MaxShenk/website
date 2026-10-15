import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min.js?url";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import SomeSkills from "../components/projects/someSkills";

import INFO from "../data/user";
import SEO from "../data/seo";
import allSkills from "../data/skills";

import "./styles/resume.css";

const Resume = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "resume");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Resume | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="resume" />
				<div className="content-wrapper">
					<div className="resume-logo-container">
						<div className="resume-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="resume-container">
						<div className="title resume-title">Resume</div>
						<div className="resume-skills">
							<SomeSkills skills={allSkills} />
						</div>
						<Worker workerUrl={pdfjsWorker}>
							<div className="pdf-container">
								<Viewer fileUrl="/maxwell_shenk_resume.pdf" />
							</div>
						</Worker>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Resume;
