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
const PythonSkill = allSkills[12];
const TypeScriptSkill = allSkills[13];
const ReactSkill = allSkills[14];
const CloudflareSkill = allSkills[15];
const SupabaseSkill = allSkills[16];
const SQLSkill = allSkills[17];

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
						src="../web_checkers.png"
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
						src="../3d_engine.png"
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
				<video className="video-content" src="../power_app.mp4" width="100%" controls="controls" autoplay="true" />
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
					<video className="video-content" src="../a_la_kart.mp4" width="100%" height="100%" controls="controls" autoplay="true" />
					<p></p>
					<hr height= "9px" />
					<h1>Project History</h1>
					<div className="paragraph"> This project began when a friend of mine pitched me the idea. He was a game development major, but did not have
					much experience working in Unity or with any asset creation so he asked if I would help him build a demo. We were fairly pressed for time as we 
					had planned to pitch the project idea to RIT's game funding program. 
					<p></p>
					 </div>
					 <img
						src="../greek_truck.png"
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
						src="../aak_trucks.jpg"
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
				<video className="video-content" src="../java_game.mp4" width="100%" height="100%" controls="controls" autoplay="true" />
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
function project_6() {
	return {
		date: "2026",
		title: "Wheremart",
		description:
			"In progress. A first-person game where you pick up store items and dock into machines to solve them.",
		keywords: [
			"Wheremart",
			"Athyros",
			"Maxwell",
			"Maxwell S",
			"Maxwell Shenk",
		],
		skills: [CSSkill, UnitySkill, BlenderSkill],
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
					<video className="video-content" src="../wheremart.mp4" width="100%" controls="controls" />
					<p></p>
					<hr />
					<h1>Project History</h1>
					<div className="paragraph">
						This one is still in progress. Wheremart is a first-person store, built in Unity, where the interesting part is not walking the aisles. It is the machines. You pick up an item, walk up to a puzzle, and the camera docks into it. From there a software cursor lets you drag parts, turn dials, and use whatever you are holding.
					</div>
					<p></p>
					<img src="../wheremart_aisle.jpg" alt="Wheremart aisle" className="randImage" />
					<p></p>
					<div className="paragraph">
						The store art is modeled in Blender: shelving, a water bottle, an ID badge, a combination lock, and a self-checkout kiosk. The Unity project is named Athyros. The player is Stella. Each machine is a small set of reusable pieces. A hotspot is something you can use, a motion is a part that rotates or slides, and a brain script decides when the machine is solved. The checkout and the lock are two of those brains.
					</div>
					<p></p>
					<video className="video-content" src="../wheremart_checkout.mp4" width="100%" controls="controls" />
					<p></p>
					<div className="paragraph">
						The checkout is the centerpiece so far. The kiosk has a screen, a bagging area, and a scanner, and the playtest below is me working through that interaction with a bottle on the belt.
					</div>
					<p></p>
					<img src="../wheremart_kiosk.png" alt="Checkout kiosk sketch" className="randImage" />
					<p></p>
					<video className="video-content" src="../wheremart_lock.mp4" width="100%" controls="controls" />
					<p></p>
					<div className="paragraph">
						The combination lock is the same idea at a smaller scale. You dock the camera, then drag the dials. I am still building the store out around these machines, so the aisles are sparse on purpose. The playtests are there to show the interactions, not a finished level.
					</div>
					<hr className="project-hor-line" />
				</div>
			</React.Fragment>
		),
	};
}

function project_7() {
	return {
		date: "2026",
		title: "Biception",
		description:
			"In progress. A blob you pilot through two independently aimed eyes, with a grapple and a gun.",
		keywords: [
			"Biception",
			"Maxwell",
			"Maxwell S",
			"Maxwell Shenk",
		],
		skills: [CSSkill, UnitySkill, BlenderSkill],
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
					<video className="video-content" src="../biception.mp4" width="100%" controls="controls" />
					<p></p>
					<hr />
					<h1>Project History</h1>
					<div className="paragraph">
						This one is still in progress. Biception is a creature you pilot rather than a person you walk around as. The body is a ball. It has two eyes, and each eye aims on its own. On a gamepad the two sticks drive the two eyes. The same actions also bind to VR controllers, so a headset can stand in for the gamepad.
					</div>
					<p></p>
					<div className="paragraph">
						The left and right views in the playtests are those two eyes. Labels in the corner mark the left eye and the right eye. One eye can look at a grapple point while the other watches where the gun is pointed. Thrust, brake, reel, and payout are separate inputs, so moving and aiming are not the same stick.
					</div>
					<p></p>
					<video className="video-content" src="../biception2.mp4" width="100%" controls="controls" />
					<p></p>
					<div className="paragraph">
						The blob itself and the ground tiles are made in Blender. The grass is hand-painted, including a normal map, because I wanted the floor to read clearly under a camera that is often an inch off the ground. These clips are early playtests of the eye split and the movement, not a finished level.
					</div>
					<hr className="project-hor-line" />
				</div>
			</React.Fragment>
		),
	};
}

function project_8() {
	return {
		date: "2026",
		title: "RCT3 VR",
		description:
			"A C++ Direct3D 9 proxy that adds side-by-side stereo and optional OpenXR to RollerCoaster Tycoon 3.",
		keywords: [
			"RCT3",
			"OpenXR",
			"Maxwell",
			"Maxwell S",
			"Maxwell Shenk",
		],
		skills: [CPPSkill],
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
					<img src="../rct3_vr.jpg" alt="RCT3 VR" className="randImage" />
					<p></p>
					<hr />
					<h1>Project History</h1>
					<div className="paragraph">
						When I was young I was a big fan of the Roller Coaster Tycoon series. Roller Coaster Tycoon 3 was the first game I ever purchased on my own and I played it for many hours. It was always my dream to be able to really ride the rides that I constructed.
						The goal of this modification was to help make that a reality. It sits in front of Direct3D 9 as a proxy DLL named d3d9.dll, next to RCT3.exe, and renders the frame twice for side-by-side stereo. An optional path submits the left and right images to a PC VR runtime through OpenXR, so SteamVR, Oculus, or Windows Mixed Reality can display them.
					</div>
					<p></p>
					<div className="paragraph">
						The build is CMake and Visual Studio 2022. The original game is 32-bit, and the Complete Edition can be 64-bit, so the project builds for both. A small ini file sets the interpupillary distance and a scale from meters to game units, because RCT3's world is not in meters. F11 toggles stereo while the game is running, and F9 toggles a debug overlay. A log file next to the DLL reports whether OpenXR actually came up.
					</div>
					<hr className="project-hor-line" />
				</div>
			</React.Fragment>
		),
	};
}

function project_9() {
	return {
		date: "2025",
		title: "Game for Wilma",
		description:
			"A floor-projected 2D game of mice, cheese, and mushrooms, made for my cat Wilma to chase.",
		keywords: [
			"Wilma",
			"Maxwell",
			"Maxwell S",
			"Maxwell Shenk",
		],
		skills: [CSSkill, UnitySkill],
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
					<video className="video-content" src="../wilma_game.mp4" width="100%" controls="controls" />
					<p></p>
					<hr />
					<h1>Project History</h1>
					<div className="paragraph">
						I had never been much of a cat person before I moved in with my roommate. However, after a couple months of living together, I quickly became very attached to her cat Wilma. I was drawn in by her curiosity and her intellect. Having only grown up with dogs, I was amazed by her problem solving skills and her ability to learn.
						I also became aware of her draw towards these Youtube videos commonly referred to as "CatTV." Videos of animals designed to specifically to entertain cats, and it worked. She would sit there for hours just watching the squirrels, mice and birds. Occasionally she would get up and swat at the screen and that is what inspired me.
						I wanted to be involved, and I wanted her to have the satisfaction of not just chasing the prey but actually catching it. I wanted a game that allowed both of us to be active participants and take a solo activity for her and turn it into something we could both enjoy together.
					</div>
					<p></p>
					<div className="paragraph">
						As a fan of Tom and Jerry the first thing that sprung to mind was a literal game of cat and mouse. The human player would control the mouse while the cat chase and capture the mouse. 
						The concept was fairly simple but proved to be engaging for both the player and the cat. I remember the first test play session we had, Wilma caught over 90 mouse before she grew tired.
						Through much expermentation I found that the movement of the tail was very important, as well as the ability for the mouse to hide underneath objects and foliage. Most of all, I found her
						drawn to the gore and enjoyed the visceral explosion of blood and guts on the screen, it is apparent that cats do not share the same moral and ethical hang ups that might concern us humans.
						I also found that like humans, her desire for diversity and variation was strong, she eventually grew bored of the forest scene and was re-engaged with the new underwater level.
					</div>
					<p></p>
					<video className="video-content" src="../wilma_attack.mp4" width="100%" controls="controls" />
					<p></p>
					<div className="paragraph">
						All the art was done by me using the open source software Krita.
					</div>
					<p></p>
					<video className="video-content" src="../wilma_watching.mp4" width="100%" controls="controls" />
					<p></p>
					<div className="paragraph">
						The phone videos are Wilma actually playing with it. One is her attacking the projection, and the other is her sitting on it and watching the mice. I also built Mac and Windows players so I could take the game off the dev machine and point a projector at the floor.
					</div>
					<hr className="project-hor-line" />
				</div>
			</React.Fragment>
		),
	};
}

function project_10() {
	return {
		date: "2023",
		title: "Ignorance Abolisher",
		description:
			"A world-map quiz. A capital is called out, and you click the right city before you run out of strikes.",
		keywords: [
			"Ignorance Abolisher",
			"Maxwell",
			"Maxwell S",
			"Maxwell Shenk",
		],
		skills: [CSSkill, UnitySkill],
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
					<img src="../ignorance_map.png" alt="World map" className="randImage" />
					<p></p>
					<hr />
					<h1>Project History</h1>
					<div className="paragraph">
						Ignorance Abolisher is a capitals quiz on a world map. The game picks a capital at random and asks for it. Clicking the right city removes it from the remaining list. Clicking the wrong one marks that city and adds a strike. Escape pauses the game, and a menu scene sits in front of the map.
					</div>
					<p></p>
					<div className="paragraph">
						The map can be dragged around, which matters once the cities are small. I used a high-resolution world image so country borders stay readable when the camera is pulled in on Europe or the Caribbean. It is a smaller project than the games around it, but it is a complete loop: question, guess, strike, and a shrinking set of cities until the list is gone.
					</div>
					<hr className="project-hor-line" />
				</div>
			</React.Fragment>
		),
	};
}

function project_11() {
	return {
		date: "2026",
		title: "MemoType",
		description:
			"Typing practice and flashcards, built in TypeScript and React, with a Python desktop app too.",
		url: "https://memotype.maxwell-shenk.workers.dev/",
		keywords: ["MemoType", "Maxwell", "Maxwell S", "Maxwell Shenk"],
		skills: [TypeScriptSkill, ReactSkill, PythonSkill, SQLSkill, SupabaseSkill, CloudflareSkill],
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
					<img src="../memo_type_library.jpg" alt="MemoType passage library" className="randImage" />
					<p></p>
					<hr />
					<h1>Project History</h1>
					<div className="paragraph">
						If there is one thing in this world I have a passion for, it is learning. Learning is not easy, if you expect to just read a couple books or watch a couple tutorial videos and retain that knowledge forever, you can expect to be disappointed.
						Learning is practice and hardwork. Unfortunately, many of the best tools out there are hidden behind paywalls and boged down by unnecessary features and distractions. What I hope to accomplish with this web application is to create an entirely free
						application focused on effective, tried and true learning strategies. 
					</div>
					<p></p>
					<img src="../memo_type.jpg" alt="MemoType typing practice" className="randImage" />
					<p></p>
					<div className="paragraph">
						In Hyperion, one of my favorite characters in fiction, Martin Silenus, on the topic of poetry, says that the only true way to appreciate poetry is through memorization. To build a complete mental image of a poem in one's mind allows the subtler appreciation
						of its interconnectivity and nuance. As a student of literature I was facinated by this idea, reading poetry without memorization is like examining individual parts of painting through a magnifying and expecting to grasp the message of the whole.
						So, I through trial and error developed a method that helps me memorize best. It is reminicent of the typing training games of my third grade computer lab, but I have found it to be very effective at teaching.
						With two different modes, the first just typing along with the passage, and the second when the passage is hidden and you must type to reveal it. The ability to learn a passage is so rapid and ingrained so effectively, I feel as though up until this point I had been learning with one arm tied behind my back.
					</div>
					<p></p>
					<img src="../memo_type_flash.jpg" alt="MemoType dictionary deck builder" className="randImage" />
					<p></p>
					<div className="paragraph">
						In my honest opinion, learning tools should be free, full-stop. Quizlet proved to be a very effective tool for me throughout school and beyond. However, I was often frustrated by the pay-wall nature of the application
						and after years of paying for Quizlet Plus, I decided to build my own version, because at it's core there is nothing complicated about it at all. I opted for three modes, chunked, ordered and weighted, for varied learning styles.
						You can create your own decks in application, upload and share JSON formatted cards, see extensive progress statistics and create auto-generated vocabulary decks based on frequency in the english language, to learn more uncommon, challenging words. 
					</div>
					<p></p>
					<p></p>
					<div className="paragraph">
						It was built in Python originally as a simple desktop application, but later converted to Typescript and React PWA so that I could easily put it on any phone and use it in any browser. It is hosted on Cloudflare with a Supabase database, all for free, but scalable. You can use it at <a href="https://memotype.maxwell-shenk.workers.dev/" target="_blank" rel="noreferrer">memotype.maxwell-shenk.workers.dev</a>.
					</div>
					<p></p>
					<hr className="project-hor-line" />
				</div>
			</React.Fragment>
		),
	};
}

function project_12() {
	return {
		date: "2026",
		title: "Rhymigo",
		description:
			"A poetry editor in Python and JavaScript. It counts syllables, marks rhymes and scansion, and suggests the next word.",
		keywords: ["Rhymigo", "Rap Writer", "Maxwell", "Maxwell S", "Maxwell Shenk"],
		skills: [PythonSkill, JavaScriptSkill],
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
					<img src="../rhymigo.jpg" alt="Rhymigo rhyme editor" className="randImage" />
					<p></p>
					<hr />
					<h1>Project History</h1>
					<div className="paragraph">
						As the youngest child, I didn't get a lot of choice in much of my childhood, especially when it came to music. I listened to whatever my sister, brothers or parents had on and that was that.
						It wasn't until I was a teenager that I started spending more time on my own and discovering my own taste in music and the first genre I discovered that no one else in my family had already claimed was hip-hop.
						Hip-hop had such a huge influence on my appreciation for music as a whole, I was facinated by the intricate lyricism and the intoxicating beats. Naturally, overtime I developed a budding desire to write and create my own rap music.
						To help in the process I developed a tool that helped with flow, rhyming and structure. Based on rap lyrics and the book Sound and Sense, a breakdown of poetry. 
					</div>
					<p></p>
					<img src="../rhymigo_light.jpg" alt="Rhymigo multi-word rhymes and suggestions" className="randImage" />
					<p></p>
					<div className="paragraph">
						Every line gets a syllable count and a scansion pattern, real-time as you type. Rhymes between nearby lines are colored by vowel sound and graded as perfect, slant, or assonance. End rhymes are stronger than rhymes in the middle of a line, and short phrases can match as one rhyme, so "hit her" lines up with "hitter." A rap-pronunciation toggle drops the g in -ing and treats -er more like -a before it matches. The sidebar suggests rhymes for the word you are working from. Raps save as plain text files.
					</div>
					<hr className="project-hor-line" />
				</div>
			</React.Fragment>
		),
	};
}

function project_13() {
	return {
		date: "2026",
		title: "Shopping Cat",
		description:
			"A TypeScript and React meal calendar that facilitates both meal planning, recipe management and grocery shopping.",
		url: "https://grocery-calendar.maxwell-shenk.workers.dev/",
		keywords: ["Shopping Cat", "Grocery Calendar", "Maxwell", "Maxwell S", "Maxwell Shenk"],
		skills: [TypeScriptSkill, ReactSkill, SQLSkill, SupabaseSkill, CloudflareSkill],
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
					<img src="../grocery_month.jpg" alt="Shopping Cat month calendar" className="randImage" />
					<p></p>
					<hr />
					<h1>Project History</h1>
					<div className="paragraph">
						Shopping Cat is a TypeScript and React app for planning meals on a month calendar. Open a day and you get breakfast, lunch, dinner, and a snack, stacked as cards you can swipe between. Each meal is a list of items, with amounts and units, or a saved recipe. A recipe quantity multiplies its ingredients, so cooking for four does not mean typing the list four times.
					</div>
					<p></p>
					<img src="../grocery_calendar.jpg" alt="Shopping Cat breakfast card" className="randImage" />
					<p></p>
					<div className="paragraph">
						Days you select roll up into one master grocery list, with checks for what is already in the cart, and the list can be exported. Recipes live in their own manager. Change a recipe and you can push that change onto the days that already use it. The planner keeps itself in the browser, and it can sign in if you want the same calendar on another device. You can use it at <a href="https://grocery-calendar.maxwell-shenk.workers.dev/" target="_blank" rel="noreferrer">grocery-calendar.maxwell-shenk.workers.dev</a>.
					</div>
					<p></p>
					<img src="../grocery_list.jpg" alt="Shopping Cat grocery list" className="randImage" />
					<hr className="project-hor-line" />
				</div>
			</React.Fragment>
		),
	};
}

const myProjects = [project_11, project_12, project_13, project_9, project_6, project_7, project_8, project_1, project_2, project_3, project_4, project_5, project_10];

export default myProjects;
