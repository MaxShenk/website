import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Worker } from '@react-pdf-viewer/core';
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import INFO from "../data/user";
import myStories from "../data/stories";

import "./styles/readStory.css";


const ReadArticle = () => {
	const navigate = useNavigate();
	let { slug } = useParams();

	const story = myStories[slug - 1];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [story]);


	return (
		<React.Fragment>
			<Helmet>
				<title>{`${story().title} | ${INFO.main.title}`}</title>
				<meta name="description" content={story().description} />
				<meta name="keywords" content={story().keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar />

				<div className="content-wrapper">
					<div className="read-story-logo-container">
						<div className="read-story-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-story-container">
						<div className="read-story-back">
							<img
								src="../back-button.png"
								alt="back"
								className="read-story-back-button"
								onClick={() => navigate(-1)}
							/>
						</div>

						<div className="read-story-wrapper">

							<div className="title read-story-title">
								{story().title}
							</div>
							<Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
								<div className = "pdf-container" >
									<Viewer fileUrl={story().body} className = "pdf-viewer" />;
								</div>
							
							</Worker>
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

export default ReadArticle;
