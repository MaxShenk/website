import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Article from "../components/stories/story";

import INFO from "../data/user";
import SEO from "../data/seo";
import myStories from "../data/stories";

import "./styles/stories.css";

const Stories = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "stories");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Stories | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="stories" />
				<div className="content-wrapper">
					<div className="stories-logo-container">
						<div className="stories-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="stories-main-container">
						<div className="title stories-title">
							{INFO.stories.title}
						</div>

						<div className="subtitle stories-subtitle">
							{INFO.stories.description}
						</div>

						<div className="stories-container">
							<div className="stories-wrapper">
								{myStories.map((story, index) => (
									<div
										className="stories-story"
										key={(index + 1).toString()}
									>
										<Article
											key={(index + 1).toString()}
											date={story().date}
											title={story().title}
											description={story().description}
											link={"/story/" + (index + 1)}
										/>
									</div>
								))}
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

export default Stories;
