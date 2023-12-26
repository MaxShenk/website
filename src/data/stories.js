
function story_1() {
	
	return {
		date: "7 May 2023",
		title: "The Cat's Burden",
		description:
			"A surreal, weird fiction short story.",
		keywords: [
			"The Cat's Burden",
		],
		style: `
				.story-content {
					display: flex;
					flex-direction: column;
					align-items: left;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: "../The Cat's Burden.pdf",
	};
}

function story_2() {
	return {
		date: "7 May 2023",
		title: "The Blinking Man",
		description:
			"A horror short story.",
		style: ``,
		keywords: [
			"The Blinking Man",
		],
		body:  "../The Blinking Man.pdf"
		,
	};
}
function story_3() {
	return {
		date: "7 May 2023",
		title: "The Canyon of Creation",
		description:
			"A few chapters of my unpublished book, The Canyon of Creation.",
		keywords: [
			"The Canyon of Creation",
		],
		style: `
				.story-content {
					display: flex;
					flex-direction: column;
					align-items: left;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: "../Canyon of Creation.pdf",
	};
}

const myStories = [story_1, story_2,story_3];

export default myStories;
