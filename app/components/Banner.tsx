import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import bannerImage from "../assets/images/developer.svg";

export default function Banner() {

	const HackerText = ({ defaultText, speed }) => {
		const [text, setText] = useState(defaultText);
		const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

		useEffect(() => {
			hackerEffect();
		}, []);

		const hackerEffect = () => {
			let iterations = 0;

			let interval = setInterval(() => {
				let newText = text
					.split("")
					.map((letter, i) => {
						if (i < iterations) return defaultText[i];
						return letters[Math.floor(Math.random() * 26)];
					})
					.join("");
				setText(newText);

				if (iterations >= defaultText.length) clearInterval(interval);

				iterations += 1 / 3;
			}, speed);
		};

		return <span onMouseEnter={() => hackerEffect()}>{text}</span>;
	};

	return (
		<section className="bg-primary text-white min-h-full flex items-center justify-center">
			<img
				className=" absolute bottom-0 right-0 w-56 md:w-96"
				src={bannerImage}
				alt=""
			/>

      <div className="text-5xl absolute bottom-3 left-3">
          <i className="fa-solid fa-hand-point-down animate-bounce"></i>
      </div>

			<div className="flex flex-col flex-1 gap-5 max-w-xs md:max-w-3xl">
				<span className="text-accent">
					<HackerText defaultText="Hi my name is," speed={15} />
				</span>
				<h1 className="relative text-4xl md:text-5xl cursor-pointer hover:bg-accent hover:p-3 hover:text-black rounded-md transition-all duration-300 font-medium flex flex-col md:flex-row gap-3">
					<span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-accent opacity-75"></span>

					<HackerText defaultText="Mohammed Balfaqih" speed={30} />
				</h1>

				<ul>
					<li className="flex items-center gap-3">
						<i className="fa-solid fa-code text-accent"></i>
						<span>Software Developer </span>
					</li>
					<li className="flex items-center gap-3">
						<i className="fa-solid fa-book-open text-accent"></i>
						<span> Computer Science </span>
					</li>
				</ul>
				<p>
					I am a software developer that loves building unique web
					experience. I am enthusiastic about studying Machine
					Learning and Medical Image Analysis to develop the medical
					field.
				</p>
				<ul className="flex p-2 border-accent text-4xl gap-5 border-l-4 duration-300 items-center h-16">
					<li>
						<a href="https://github.com/HaMoOoOd25">
							<i className="fa-brands fa-github hover:text-5xl hover:text-accent duration-200"></i>
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/mbalfaqih25/">
							<i className="fa-brands fa-linkedin hover:text-5xl hover:text-accent duration-200"></i>
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/hamoodev25/">
							<i className="fa-brands fa-instagram hover:text-5xl hover:text-accent duration-200"></i>
						</a>
					</li>
					<li>
						<a href="https://twitter.com/hamoodev25">
							<i className="fa-brands fa-twitter hover:text-5xl hover:text-accent duration-200"></i>
						</a>
					</li>
				</ul>

				<Link
					to="/projects"
					className=" text-center hover:border-2 text-accent hover:border-accent w-52 rounded-sm p-1  font-medium hover:bg-accent text-lg hover:text-black duration-200"
				>
					<HackerText defaultText="Projects" speed={30} />
				</Link>
			</div>
		</section>
	);
}
