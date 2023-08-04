import React from "react";
import allSkills from "./skills";
const PowerAppsSkill = allSkills[0];
const DataVerseSkill = allSkills[1];
const PowerFXSkill = allSkills[2];
const TeamsSkill = allSkills[3];
const JavaSkill = allSkills[4];
const JavaScriptSkill = allSkills[5];
const SlackSkill = allSkills[6];
const CPPSkill = allSkills[7];
const OpenGLSkill = allSkills[8];
const CSSkill = allSkills[9];

function project_1() {
	return {
		date: "Fall 2020",
		title: "Webcheckers",
		description:
			"An online checkers game suite. Includes multiplayer, tournament style and AI opponents",
		keywords: [
			"Webcheckers",
			"Maxwell",
			"Maxwell S",
			"Maxwell Shenk",
		],
		skills: [
			JavaSkill,JavaScriptSkill,SlackSkill
		],
		style: `
				.project-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					width: 100%;
					align-self: center;
					outline: 2px solid black;
				}
				`,
		body: (
			<React.Fragment>
				<div className="project-content">
				<img
						src="../WebCheckers.PNG"
						alt="random"
						className="randImage"
				/>
				<p></p>
				<hr height= "9px" />
				<p></p>
				<h1>Project History</h1>

					
				</div>
			</React.Fragment>
		),
	};
}

function project_2() {
	return {
		date: "Spring 2021",
		title: "3D Rendering Engine",
		description:
			"A three dimensional graphics engine created from scratch using C++ and OpenGL Libraries.",
		style: ``,
		keywords: [
			"3D Engine",
			"Maxwell",
			"Maxwell S",
			"Maxwell Shenk",
		],
		skills: [
			CPPSkill,
			OpenGLSkill
		],
		body: (
			<React.Fragment>
				<img
						src="../3D Engine.PNG"
						alt="random"
						className="randImage"
				/>
				<p></p>
				<hr height= "9px" />
				<p></p>
				<h1>Project History</h1>
			</React.Fragment>
		),
	};
}
function project_3() {
	return {
		date: "Spring 2023",
		title: "PowerApps Games",
		description:
			"A collection of 3 games built entirely using Microsoft PowerApps.",
		style: ``,
		keywords: [
			"PowerApps",
			"Maxwell",
			"Maxwell S",
			"Maxwell Shenk",
		],
		skills: [
			PowerAppsSkill,
			DataVerseSkill,PowerFXSkill,TeamsSkill
		],
		body: (
			<React.Fragment>
				<div className="project-content">
				<video className="video-content" src="../PowerApp.mp4" width="614" height="992" controls="controls" autoplay="true" />
				<p></p>
				<hr height= "9px" />
				<p></p>
				<h1>Project History</h1>
				<div className="paragraph"> During my time at Lubrizol, I discovered that the company employed this Microsoft tool called PowerApps.
				 I was curious about the tool itself, but thought that most of the applications of PowerApps at Lubrizol, were less than impressive.
				 After I discussed this with the two leads of the PowerApps development team, and shared with them the potential I saw for the app, 
				 they told me it was more of a business user interest issue than a problem with the dev team themselves. They told me that they had
				 had trouble driving engagement and getting end users excited about the software. It was then that I had the idea to create games with it.
				 While no one had ever seen this done before, I believed that it was completely possible and would absolutely get people talking about PowerApps.
				 At the time of development PowerApps did not allow you to create functions and is not an object oriented language, at least in the traditional
				 sense. I developed a propritery object system using relational databases in the background and procedurally generated ID keys in the front end.
				 It was quite the challenge.
				 </div>
				 <p></p>
				 <div className="paragraph"> I began by creating the platformer game, I had to use complex lookups and imitate matrix math to accomplish,
				 the seamless movements and collisions. I also wanted to build it to last so I ensured that it would be simple to create more levels and 
				 add complexities. 
				 </div>
				 <p></p>
				 <div className="paragraph"> After I created the platformer, having learned a lot, I began work on the confetti screen. While I could have
				 downloaded a gif overlay of confetti off google in five minutes, I was curious about pushing PowerApps to its limit. I created a particle
				 simulation system for the confetti. Each piece of confetti is randomly generated and continually simulated using wind forces, gravity and 
				 inital velocities. It is also entirely scalable, there can be an infinite number of confettis, although it starts to slow down quite quickly. 
				 </div>
				 <p></p>
				 <div className="paragraph"> After the confetti, I had a better idea of how the object system would work, and what PowerApps function were 
				 efficient and which functions to avoid. I began the second game, the Driving Mania. Using the confetti system I added obstacles that the car 
				 could encounter and colide with. This collision system was far simpler than the platformer as there are only three possible positions for the car.
				 All sprites were created entirely by me. There was also a new system I had to create for this game for the explosion animation. Up to this point 
				 I had only used static images, but using a two tables I was able to create an animation system, that tracked the delta frames and pulled new images,
				 from a table based on the frame. I also created a highscore system, that synced through Microsoft Teams.
				 </div>
				 <p></p>
				 <div className="paragraph"> I began work on the final playable game, the RPG. I was nearing the end of my time at Lubrizol, and thus, the end of 
				 my PowerApps license. I created a new system for movement in this one based on world and camera cooridnates, allowing the player to traverse an 
				 area far bigger than the area of the screen. I also implemented the animation engine.
				 </div>
				 <p></p>
				 <div className="paragraph"> There were two unfinished games, that I could not show. One was a multiplayer game that had each player accessing shared tables
				 in the relational database. This was a challenge to keep in sync and prevent synchronous editing, as that lead to errors. In the end I was able to get
				 two moving spheres, one controlled by each player, but it was slow and buggy. Finally I also created the framework for a rudementary 3D engine, but it was so slow I stopped.
				 </div>
				 <hr className="project-hor-line"/>
				</div>
			</React.Fragment>
		),
	};
}

const myProjects = [project_1, project_2,project_3];

export default myProjects;
