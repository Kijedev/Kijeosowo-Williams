// ProjectWalkthrough.js
import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { FiChevronLeft, FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "../utils/projects";

const ProjectWalkthrough = () => {
	const { id } = useParams();

	const project = useMemo(() => projects?.mobile?.find((item) => item.slug === id)?.walkthrough)

	return (
		<div className="min-h-screen bg-[#0A192F] text-[#8892B0] py-20 px-6">
			<div className="max-w-4xl mx-auto">
				{/* Back Button */}
				<Link
					to="/projects"
					className="flex items-center text-[#64FFDA] hover:text-[#52e3c7] mb-12"
					aria-label="Return to projects list">
					<FiChevronLeft className="mr-2" />
					All Projects
				</Link>

				{/* Project Header */}
				<header className="mb-16 animate-fade-in">
					<h1 className="text-4xl font-bold text-[#CCD6F6] mb-4">
						{project.title}
					</h1>
					<p className="text-xl text-[#64FFDA]">{project.elevatorPitch}</p>
				</header>
				<section
					className="my-20 animate-fade-in"
					style={{ animationDelay: "0.4s" }}
					aria-labelledby="video-demo-heading"
				>
					<h2
						className="text-3xl text-[#CCD6F6] mb-8 border-l-4 border-[#64FFDA] pl-4"
						id="video-demo-heading"
					>
						System Walkthrough
					</h2>
					<div className="bg-[#112240] p-4 rounded-lg shadow-xl">
						<div className="aspect-video overflow-hidden rounded-lg">
							<iframe
								width="100%"
								height="100%"
								src="https://www.youtube.com/embed/your-video-id"
								title="BlinkPay Mobile App Demo"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
								className="rounded-lg"
							></iframe>
						</div>
						<p className="mt-4 text-sm text-[#64FFDA] text-center">
							Full demo (3:26) - <a href="#" className="hover:text-[#52e3c7]">View transcript</a>
						</p>
					</div>
				</section>

				{/* Main Walkthrough Content */}
				<div className="space-y-20">
					{project.sections.map((section, index) => (
						<section
							key={index}
							className="animate-fade-in"
							style={{ animationDelay: `${index * 0.1}s` }}
							aria-labelledby={`section-${index}`}>
							<h2
								className="text-3xl text-[#CCD6F6] mb-8 border-l-4 border-[#64FFDA] pl-4"
								id={`section-${index}`}>
								{section.title}
							</h2>

							<section
								className="my-20 animate-fade-in"
								style={{ animationDelay: "0.4s" }}
								aria-labelledby="features-heading"
							>

								{section.title === 'Core Features' ? <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
									{section.content?.features?.map((feature, index) => (
										<article
											key={index}
											className="bg-[#112240] p-8 rounded-lg shadow-xl hover:-translate-y-2 transition-transform duration-300 border border-[#233554]"
										>
											{/* Feature Header */}
											<div className="flex items-center mb-6">
												<span className="text-2xl mr-3">{feature.icon}</span>
												<h3 className="text-xl text-[#CCD6F6] font-semibold">
													{feature.name}
												</h3>
											</div>

											{/* Components */}
											<div className="mb-6">
												<h4 className="text-[#64FFDA] text-sm font-mono mb-3">MAIN COMPONENTS</h4>
												<ul className="space-y-2">
													{feature.components.map((component, i) => (
														<li
															key={i}
															className="flex items-start text-sm"
														>
															<span className="text-[#64FFDA] mr-2 mt-1">▹</span>
															{component}
														</li>
													))}
												</ul>
											</div>

											{/* Implementation */}
											<div className="mb-6">
												<h4 className="text-[#64FFDA] text-sm font-mono mb-3">TECH STACK</h4>
												<div className="flex flex-wrap gap-2">
													{feature.implementation.tech.map((tech, i) => (
														<span
															key={i}
															className="px-2 py-1 text-xs bg-[#64FFDA]/10 text-[#64FFDA] rounded"
														>
															{tech}
														</span>
													))}
												</div>
											</div>


										</article>
									))}
								</div> : null}

							</section>


							{section.title === "The Challenge" && (
								<div className="bg-[#112240] p-8 rounded-lg">
									<div className="grid md:grid-cols-2 gap-8">
										<div>
											<h3 className="text-xl text-[#CCD6F6] mb-4">
												Problem Statement
											</h3>
											<p className="leading-relaxed">
												{section.content.problem}
											</p>
										</div>
										<div>
											<h3 className="text-xl text-[#CCD6F6] mb-4">
												Project Goals
											</h3>
											<ul className="space-y-3">
												{section.content.goals.map((goal, i) => (
													<li key={i} className="flex items-start">
														<span className="text-[#64FFDA] mr-2">▹</span>
														{goal}
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>
							)}

							{section.title === "My Role & Contributions" && (
								<div className="space-y-8">
									<div className="bg-[#112240] p-8 rounded-lg">
										<h3 className="text-xl text-[#CCD6F6] mb-4">
											Key Responsibilities
										</h3>
										<ul className="grid md:grid-cols-2 gap-6">
											{section.content.contributions.map((contribution, i) => (
												<li
													key={i}
													className="flex items-start p-4 border border-[#233554] rounded-lg">
													<span className="text-[#64FFDA] mr-2">▸</span>
													{contribution}
												</li>
											))}
										</ul>
									</div>

									<div className="grid md:grid-cols-3 gap-6 text-center">
										{Object.entries(section.content.metrics).map(
											([key, value], i) => (
												<div
													key={i}
													className="bg-[#112240] p-6 rounded-lg border border-[#233554]">
													<div className="text-[#64FFDA] text-2xl font-bold mb-2">
														{value}
													</div>
													<div className="text-sm text-[#8892B0] uppercase tracking-wide">
														{key}
													</div>
												</div>
											)
										)}
									</div>
								</div>
							)}

							{section.title === "Technical Deep Dive" && (
								<div className="space-y-8">
									<div className="bg-[#112240] p-8 rounded-lg">
										<h3 className="text-xl text-[#CCD6F6] mb-6">
											System Architecture
										</h3>
										<div className="grid md:grid-cols-3 gap-6">
											{Object.entries(section.content.architecture).map(
												([key, value], i) => (
													<div
														key={i}
														className="border border-[#233554] p-4 rounded-lg">
														<div className="text-[#64FFDA] font-mono text-sm mb-2">
															{key}
														</div>
														<div className="text-sm">{value}</div>
													</div>
												)
											)}
										</div>
									</div>

									<div className="space-y-6">
										<h3 className="text-xl text-[#CCD6F6]">
											Key Challenges & Solutions
										</h3>
										{section.content.challenges.map((challenge, i) => (
											<div
												key={i}
												className="bg-[#112240] p-6 rounded-lg border border-[#233554]">
												<div className="text-[#FF6363] mb-2">
													Problem: {challenge.problem}
												</div>
												<div className="text-[#64FFDA] mb-2">
													Solution: {challenge.solution}
												</div>
												<div className="text-sm text-[#8892B0]">
													Outcome: {challenge.result}
												</div>
											</div>
										))}
									</div>
								</div>
							)}
						</section>
					))}
				</div>



				{/* Project Links */}
				<div className="mt-20 border-t border-[#233554] pt-12">
					<div className="flex flex-col sm:flex-row gap-6 justify-center">
						<a
							href="#live-demo"
							className="flex items-center justify-center bg-[#64FFDA] text-[#0A192F] px-8 py-3 rounded-lg hover:bg-[#52e3c7] transition-colors"
							aria-label="View live demo">
							<FiExternalLink className="mr-2" />
							Live Demo
						</a>
						<a
							href="#github"
							className="flex items-center justify-center border border-[#64FFDA] text-[#64FFDA] px-8 py-3 rounded-lg hover:bg-[#64FFDA]/10 transition-colors"
							aria-label="View source code">
							<FiGithub className="mr-2" />
							Source Code
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectWalkthrough;
