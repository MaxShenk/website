import React, { useCallback, useEffect } from "react";
import { Helmet } from "react-helmet";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import galleryItems from "../data/blendergallery";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/gallery.css";

const isVideoItem = (item) =>
	item.type === "video" ||
	/\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(item.original ?? "");

const pauseGalleryVideos = () => {
	document
		.querySelectorAll(".gallery-video-slide video")
		.forEach((video) => video.pause());
};

const Gallery = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "gallery");

	const renderItem = useCallback((item) => {
		if (isVideoItem(item)) {
			return (
				<div className="gallery-video-slide">
					<video
						className="image-gallery-image gallery-video"
						src={item.original}
						poster={item.thumbnail}
						controls
						playsInline
						preload="metadata"
					/>
					{item.description && (
						<span className="image-gallery-description">
							{item.description}
						</span>
					)}
				</div>
			);
		}

		return (
			<img
				className="image-gallery-image"
				src={item.original}
				alt={item.description || ""}
			/>
		);
	}, []);

	const renderThumbInner = useCallback((item) => (
		<span className="image-gallery-thumbnail-inner gallery-thumb-inner">
			<img
				className="image-gallery-thumbnail-image"
				src={item.thumbnail}
				alt={item.description || ""}
			/>
			{isVideoItem(item) && (
				<span className="gallery-thumb-play" aria-hidden="true">
					▶
				</span>
			)}
		</span>
	), []);

	const galleryKey = galleryItems
		.map(
			(item) =>
				`${item.type ?? "image"}|${item.original}|${item.thumbnail}|${item.description ?? ""}`
		)
		.join(";");

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

					<div className="gallery-container">
						<div className="gallery-wrapper">
							<ImageGallery
								key={galleryKey}
								items={galleryItems}
								renderItem={renderItem}
								renderThumbInner={renderThumbInner}
								onSlide={pauseGalleryVideos}
								showPlayButton={false}
								showFullscreenButton={true}
								lazyLoad={import.meta.env.PROD}
							/>
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
