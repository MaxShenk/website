import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/story.css";

const Article = (props) => {
	const { title, description, link } = props;

	return (
		<React.Fragment>
			<div className="homepage-story">
				<div className="homepage-story-content">
					<div className="homepage-story-title">{title}</div>
					<div className="homepage-story-description">
						{description}
					</div>
					<div className="homepage-story-link">
						<Link to={link}>
							Read story{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Article;
