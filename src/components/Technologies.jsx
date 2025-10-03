import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Cloud, fetchSimpleIcons, ICloud, renderSimpleIcon, SimpleIcon } from "react-icon-cloud";

// Icon Cloud Props
export const cloudProps = {
	containerProps: {
		style: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			width: "100%",
			paddingTop: 40,
		},
	},
	options: {
		reverse: true,
		depth: 1,
		wheelZoom: false,
		imageScale: 2,
		activeCursor: "default",
		tooltip: "native",
		initial: [0.1, -0.1],
		clickToFront: 500,
		tooltipDelay: 0,
		outlineColour: "#0000",
		maxSpeed: 0.04,
		minSpeed: 0.02,
	},
};

export const renderCustomIcon = (icon, theme) => {
	const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
	const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
	const minContrastRatio = theme === "dark" ? 2 : 1.2;

	return renderSimpleIcon({
		icon,
		bgHex,
		fallbackHex,
		minContrastRatio,
		size: 42,
		aProps: {
			href: undefined,
			target: undefined,
			rel: undefined,
			onClick: (e) => e.preventDefault(),
		},
	});
};

export function IconCloud({ iconSlugs }) {
	const [data, setData] = useState(null);
	const theme = "light";

	useEffect(() => {
		fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
	}, [iconSlugs]);

	const renderedIcons = useMemo(() => {
		if (!data) return null;
		return Object.values(data.simpleIcons).map((icon) =>
			renderCustomIcon(icon, theme)
		);
	}, [data, theme]);

	return (
		<Cloud {...cloudProps}>
			<>{renderedIcons}</>
		</Cloud>
	);
}

function AnimatedText({
	text,
	className = "text-4xl font-bold",
	animationType = "letters",
	duration = 0.6,
	delay = 0,
	staggerDelay = 0.05,
	initialY = 10,
	initialOpacity = 0,
	animateY = 0,
	animateOpacity = 1,
}) {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: staggerDelay,
				delayChildren: delay,
			},
		},
	};

	const itemVariants = {
		hidden: {
			y: initialY,
			opacity: initialOpacity,
		},
		visible: {
			y: animateY,
			opacity: animateOpacity,
			transition: {
				duration: duration,
				ease: "easeOut",
			},
		},
	};

	const renderLetters = () => {
		return text.split("").map((char, index) => (
			<motion.span
				key={`letter-${index}`}
				variants={itemVariants}
				className="inline-block"
				style={{ whiteSpace: char === " " ? "pre" : "normal" }}
			>
				{char}
			</motion.span>
		));
	};

	const renderWords = () => {
		return text.split(" ").map((word, index) => (
			<motion.span key={`word-${index}`} variants={itemVariants} className="mr-2 inline-block">
				{word}
			</motion.span>
		));
	};

	return (
		<motion.div
			className={className}
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			{animationType === "letters" ? renderLetters() : renderWords()}
		</motion.div>
	);
}

function CloudHero({
	title = "Cloud Solutions",
	subtitle = "Powered by Innovation",
	description = "Transform your business with cutting-edge cloud technology. Scale effortlessly, secure your data, and accelerate your digital transformation journey.",
	iconSlugs = [
		"amazonaws",
		"googlecloud",
		"microsoftazure",
		"docker",
		"kubernetes",
		"terraform",
		"jenkins",
		"github",
		"gitlab",
		"bitbucket",
		"nginx",
		"apache",
		"mongodb",
		"postgresql",
		"mysql",
		"redis",
		"elasticsearch",
		"grafana",
		"prometheus",
		"datadog",
	],
}) {
	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
	};

	return (
		<section className="relative min-h-screen bg-gradient-to-br from-white via-white to-blue-50 overflow-hidden">
			<div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
			<div className="container max-w-7xl mx-auto px-6 md:px-10 relative z-10 py-20 md:py-32">
				<motion.div
					className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
				>
					{/* Text Content */}
					<motion.div
						className="flex flex-col items-start gap-6 max-w-2xl"
						variants={itemVariants}
					>
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200">
							<div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
							<span className="text-sm font-medium text-blue-700">{subtitle}</span>
						</div>

						<AnimatedText
							text={title}
							className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
							animationType="words"
							staggerDelay={0.1}
							duration={0.8}
						/>

						<motion.p
							className="text-lg md:text-xl text-gray-600 leading-relaxed"
							variants={itemVariants}
						>
							{description}
						</motion.p>

									<motion.div
										className="mt-8 w-full"
										variants={itemVariants}
									>
										
									</motion.div>
					</motion.div>

					{/* Icon Cloud */}
					<motion.div
						className="relative flex items-center justify-center"
						variants={itemVariants}
					>
						<motion.div
							className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-blue-100/5 rounded-full blur-3xl"
							animate={{
								scale: [1, 1.2, 1],
								opacity: [0.3, 0.5, 0.3],
							}}
							transition={{
								duration: 4,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						/>
						<div className="relative w-full max-w-lg aspect-square">
							<IconCloud iconSlugs={iconSlugs} />
						</div>
						<motion.div
							className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 rounded-full blur-2xl"
							animate={{
								scale: [1, 1.5, 1],
								opacity: [0.2, 0.4, 0.2],
							}}
							transition={{
								duration: 3,
								repeat: Infinity,
								ease: "easeInOut",
								delay: 1,
							}}
						/>
					</motion.div>
				</motion.div>
			</div>
			{/* Decorative Elements */}
			<div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl" />
			<div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl" />
		</section>
	);
}

export default function Technologies() {
	return <CloudHero />;
}
