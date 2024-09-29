import type { Props as SocialLinkProps } from "../components/SocialLinks/SocialIconWithLink.astro";

export const SocialLinksData: SocialLinkProps[] = [
	{
		title: "LeetCode",
		url: "https://leetcode.com/u/bitmasker/",
		iconName: "simple-icons:leetcode",
	},
	{
		title: "Gitlab",
		url: "https://gitlab.com/abhijhacodes",
		iconName: "simple-icons:gitlab",
	},
	{
		title: "GitHub",
		url: "https://github.com/abhijhacodes",
		iconName: "ri:github-line",
	},
	{
		title: "Linkedin",
		url: "https://www.linkedin.com/in/abhijhacodes/",
		iconName: "ri:linkedin-fill",
	},
	{
		title: "Email",
		url: "mailto:abhi.jha.cs@gmail.com?subject=Hii%20from%20portfolio%20👋",
		iconName: "simple-icons:gmail",
	},
	{
		title: "Twitter/X",
		url: "https://x.com/abhitics",
		iconName: "ri:twitter-x-line",
	},
];
