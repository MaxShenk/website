import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import ImageGallery from "react-image-gallery";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import images_1 from "../data/blendergallery"

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/gallery.css";
const images = [
        {
          original: ".//DrSeuss.png",
          thumbnail: ".//DrSeuss.png",
        },
        {
          original: ".//DrSeussHouse.png",
          thumbnail: ".//DrSeussHouse.png",
        },
        {
          original: "../GreekTruck.png",
          thumbnail: "../GreekTruck.png",
        },
      ];
const Gallery = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "gallery");


	
	return (
		<React.Fragment>
			<Helmet>
				<title>{`Gallery | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

				<div className="page-content">
					<NavBar active="gallery" />
					<div className="content-wrapper">
						<div className="gallery-logo-container">
							<div className="gallery-logo">
								<Logo width={46} />
							</div>
						</div>
						<div className ="gallery-container">

							<div className="gallery-wrapper">
								<ImageGallery items={images} className = "image-gallery" />;
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

export default Gallery;
