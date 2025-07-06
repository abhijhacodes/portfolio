import type { Props as ExperienceProps } from "../components/ExperienceSection/ExperienceCard.astro";

export const ExperienceData: ExperienceProps[] = [
	{
		companyName: "Setu (Pine Labs)",
		companyLogo: "/images/setu.jpg",
		companyWebsite: "https://setu.co/",
		positions: [
			{
				jobTitle: "Software Engineer 2 - Full Stack",
				duration: "April 2025 - Present"
			},
			{
				jobTitle: "Software Engineer 1 - Full Stack",
				duration: "June 2023 - March 2025"
			},
		],
	},
	{
		companyName: "Microsoft",
		companyLogo: "/images/microsoft.png",
		companyWebsite: "https://www.microsoft.com/en-us/research/",
		positions: [
			{
				jobTitle: "Research Intern",
				duration: "April 2023 - June 2023"
			},
		],
	},
	{
		companyName: "Setu (Pine Labs)",
		companyLogo: "/images/setu.jpg",
		companyWebsite: "https://setu.co/",
		positions: [
			{
				jobTitle: "Software Engineer Intern - Frontend",
				duration: "September 2022 - April 2023"
			},
		],
	},
];
