import React from "react";

const services = [
  {
    title: "Web Development",
    description: "We build fast and responsive websites tailored to your needs.",
    icon: "🌐",
  },
  {
    title: "Mobile App Development",
    description: "Create seamless and efficient mobile apps for all platforms.",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    description: "Designs that are both beautiful and user-friendly.",
    icon: "🎨",
  },
  {
    title: "SEO Optimization",
    description: "Improve your website ranking with our expert SEO services.",
    icon: "🔍",
  },
  {
    title: "Cloud Services",
    description: "We offer scalable cloud solutions for your business.",
    icon: "☁️",
  },
  {
    title: "API Integration",
    description: "Integrate robust APIs to improve functionality and connectivity.",
    icon: "🔗",
  },
];

const ServicePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 py-12 transition-colors duration-300">
      <h1 className="text-4xl font-bold mb-10 text-gray-900 dark:text-gray-100">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 w-full max-w-6xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-700/30 rounded-lg p-6 flex flex-col items-center justify-between hover:bg-blue-100 dark:hover:bg-gray-700 hover:shadow-xl transition-all duration-300 border border-transparent dark:border-gray-700"
          >
            <div className="text-6xl mb-4">{service.icon}</div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
