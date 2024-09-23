import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Planning",
      description:
        "We'll define your website's goals, audience, and key features, including structure, navigation, and content.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Strategy & research",
      description:
        "Conducting research to develop a strategic plan that aligns your website with audience needs and business goals.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Development",
      description:
        "After research and planning, I dive straight into development to bring your vision to life.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Progress Updates",
      description:
        "I'll provide regular progress updates to keep you informed at every stage of the development process.",
      icon: <IconCloud />,
    },
    {
      title: "Fast Customer Support",
      description:
        "Enjoy fast, responsive customer support to address your needs quickly and efficiently.",
      icon: <IconHelp />,
    },
    {
      title: "Money back guarantee",
      description:
        "I offer a money-back guarantee to ensure your complete satisfaction with the project.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Design Approved & Launch",
      description:
        "Once the design is approved, I'll seamlessly move forward to launch your website.",
      icon: <IconHeart />,
    },
    {
      title: "Secure & Reliable",
      description:
        "Ensuring top-notch security and reliability for your website, giving you peace of mind.",
      icon: <IconRouteAltLeft />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l border-neutral-800",
        index < 4 && "lg:border-b border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
