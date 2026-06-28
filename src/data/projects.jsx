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
const UnitySkill = allSkills[10];
const BlenderSkill = allSkills[11];

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
				<hr height= "9px" />
				<p></p>
				<h1>Project History</h1>
				<div className="paragraph"> This was a team project for a Software Engineering class. This biggest takeaways from this project was learning
				to work with a team and the Agile product development model. It was a challenge to coordinate and divide the work. I think this was one project
				where I really had the opportunity to flex my leadership skills as I was responsible for a big portion of the work division process. It was fun to
				assign work based on each team memebers specific skills.
				 </div>
				 <p></p>
				 <div className="paragraph"> Besides being a leader, I also worked a lot on the back end of the software. I was responsible for coding the groundwork for the 
				 checkers game. I also was the sole programmer behind the AI opponent. While my main focus was the backend, we all worked on a portion of the front end to
				 help develop javascript skills. 
				 </div>
					
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
			.video-content {
				width: 100%;
				align-self: center;
				outline: 2px solid black;
			}
			`,
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
				<div className="paragraph"> This project is one of my favorite things that I have done. It was the final project for a computer graphics class.
				I have always had a strong interest in computer graphics, especially after discovering blender, so it was really interesting to learn how graphics engines
				work. We created every step of this project from the ground up. It is capable of Gouraud and Phong shading. The 3D models were created in blender then converted
				to a proprietary format before being read into the program. The project was coded entirely in C++ using some OpenGL libraries. Although the final result 
				may look old by modern standards, I believe that this project really gave me a better idea of how graphics and lighting work in general, and I believe that 
				it has improved my computer graphics skills across the board especially in Blender, as I have a better understanding of the why behind the scenes.
				 </div>
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
		keywords: [
			"PowerApps",
			"Maxwell",
			"Maxwell S",
			"Maxwell Shenk",
		],
		skills: [
			PowerAppsSkill,
			DataVerseSkill,PowerFXSkill,TeamsSkill
		],style: `
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
		.video-content {
			width: 100%;
			align-self: center;
			outline: 2px solid black;
		}
		`,
		body: (
			<React.Fragment>
				<div className="project-content">
				<video className="video-content" src="../PowerApp.mp4" width="100%" controls="controls" autoplay="true" />
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
				 downloaded a gif overlay of confetti off google in five minutes, I was curious about pushing PowerApps to its limit. I created a pstory
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
	function project_4() {
		return {
			date: "Spring 2023",
			title: "A La Kart",
			description:
				"A co-op competitive karting and cooking game. Created in Unity and Blender.",
			keywords: [
				"Unity",
				"Maxwell",
				"Maxwell S",
				"Maxwell Shenk",
			],
			skills: [
				CSSkill, UnitySkill, BlenderSkill
				
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
			.video-content {
				width: 100%;
				align-self: center;
				outline: 2px solid black;
			}
			`,
			body: (
				<React.Fragment>
					<div className="project-content">
					<video className="video-content" src="../ALaKart.mp4" width="100%" height="100%" controls="controls" autoplay="true" />
					<p></p>
					<hr height= "9px" />
					<h1>Project History</h1>
					<div className="paragraph"> This project began when a friend of mine pitched me the idea. He was a game development major, but did not have
					much experience working in Unity or with any asset creation so he asked if I would help him build a demo. We were fairly pressed for time as we 
					had planned to pitch the project idea to RIT's game funding program. 
					<p></p>
					 </div>
					 <img
						src="../GreekTruck.PNG"
						alt="Greek Truck"
						className="randImage"
						/>
					 <p></p>
					 <div className="paragraph"> Although there were two of us working on the project,
					 100% of the code and art work was created by me. I used Blender to make the assets,
					 I didn't want to spend much time on the graphics as in the end we would redo them anyway
					 as once the project began we would bring a full-time artist on board. 
					 </div>
					 <p></p>
					 <img
						src="../AAKTrucks.jpg"
						alt="Greek Truck"
						className="randImage"
						/>
					 <p></p>
					 <div className="paragraph"> The programming was completed entirely in C#, with use of the Photon Networking addon for multiplayer connectivity.
					 It was quite a challenge to program the karting physics, and again, this was merely supposed to be a quick demo, there
					 was actually no required demo for the application, we were trying to go above and beyond. The cooking mechanic was also 
					 a big challenge, I wasn't sure exactly how the mechanic was meant to work as I haven't played many cooking games, but I was pretty satisfied with the result. 
					 </div>
					 <p></p>
					 <div className="paragraph"> Overall I believe there was a lot of potential with the idea, but we were ultimately rejected.
					In the end, I stopped working on the project as my partner and I had a difficult time balancing the workload between the two of us,
					I wasn't happy with the amount he was contributing and the onesided effort. Upon reflection I think it would have been a good opportunity
					to work on my management skills and delegate more effectively. 
					 </div>
					 <p></p>
					 <hr className="project-hor-line"/>
					</div>
				</React.Fragment>
			),
		};
}
function project_5() {
	return {
		date: "Spring 2023",
		title: "Java Game",
		description:
			"A co-op 2D platformer programmed entirely in Java.",
		keywords: [
			"Unity",
			"Maxwell",
			"Maxwell S",
			"Maxwell Shenk",
		],
		skills: [
			JavaSkill,
			
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
		.video-content {
			width: 100%;
			align-self: center;
			outline: 2px solid black;
		}
		`,
		body: (
			<React.Fragment>
				<div className="project-content">
				<video className="video-content" src="../Java Game.mp4" width="100%" height="100%" controls="controls" autoplay="true" />
				<p></p>
				<hr height= "9px" />
				<h1>Project History</h1>
				<div className="paragraph"> The Java Game was the first time I programmed a game engine from scratch, this was my junior year of high school. It is 
				old but it still has a special place in my heart. I had no real idea how to make a game engine so some of the code is a bit out there, but I am proud to
				have created it without any tutorials or outside knowledge beyond my already established general programming knowledge. I used JavaFX for the graphics library,
				but I still had to figure out how to do all the collisions and the scrolling world by myself. I also programmed the enemies and their play patterns. 
				<p></p>
				 </div>
				 <div className="paragraph"> I created most of the assets myself, sauf for the four characters who were created by a friend of mine. Each character has a different play style
				. The score multiplier is changed based on which character you select, as some characters are more difficult than others. There are two projectile firing characters, and two
				melee characters. 
				<p></p>
				 </div>
				 <div className="paragraph"> I think this project was one of the most challenging projects I have done because of my lack of knowledge on the subject. I had
				 used many game engines before but had no real idea how they worked behind the scenes. The collision system was quite challenging to make efficiently. The level builder 
				 was also interesting, I would not do it the way I did then, now, but I think it's interesting to see why I did it that way. Each object or tile is represented by
				 a number in an array. So the walls were 1 and empty spaces were 0, and so on. I really had fun making this project.
				<p></p>
				 </div>
				 <hr className="project-hor-line"/>
				</div>
			</React.Fragment>
		),
	};
}
const myProjects = [project_1, project_2,project_3,project_4,project_5];

export default myProjects;
