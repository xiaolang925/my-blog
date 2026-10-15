import type { ProfileConfig } from "../types/config";

// 个人资料配置
export const profileConfig: ProfileConfig = {
	avatar: "assets/images/Image_1782874332585_633.jpg", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
	name: "无敌小朗大王",
	bio: "愿你永远保持弱小",
	typewriter: {
		enable: true, // 启用个人简介打字机效果
		speed: 80, // 打字速度（毫秒）
	},
	links: [
		{
			name: "无敌小朗大王",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/471244053",
		},
		{
			name: "无敌小朗大王",
			icon: "mdi:git",
			url: "https://gitee.com/smartlittlewolf",
		},
		{
			name: "无敌小朗大王",
			icon: "fa7-brands:github",
			url: "https://github.com/xiaolang925",
		},
		/*
		{
			name: "无敌小朗大王",
			icon: "simple-icons:codeberg",
			url: "https://codeberg.org",
		},
		{
			name: "无敌小朗大王",
			icon: "fa7-brands:discord",
			url: "https://discord.gg/MqW6TcQtVM",
		},
		*/
	],
};
