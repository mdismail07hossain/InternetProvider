const FeaturesSection = () => {
  const features = [
    {
      title: "Realtime Collaboration",
      description:
        "Collaborate in realtime with other editors in a project. See what other editors are doing and edit even a simple text together.",
    },
    {
      title: "History of Edits",
      description:
        "Go back and forth your history of changes and restore your designs to any point in time.",
    },
    {
      title: "Integrations",
      description:
        "Step up your designs and workflow with integrations with your favourite tools such as Mailchimp, Slack, Jira, etc.",
    },
    {
      title: "Publish Webpage Online",
      description:
        "Effortlessly publish your webpages online and make it available to the world with a click of a button.",
    },
    {
      title: "Forms and Data Collection",
      description:
        "Collect data and information from users with forms built on Windframe and sort through them in a nice interface.",
    },
    {
      title: "Custom Domains",
      description:
        "Attach your own custom domain to your published projects or website on Windframe.",
    },
  ];

  return (
    <section className="py-12 bg-gray-00 text-gray-100 sm:py-12 lg:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight text-gray-500 sm:text-4xl xl:text-5xl mb-6">
            We are just getting started!
          </h2>
          <p className="mb-4 text-gray-500">
            We are creating a tool that helps you be more productive and
            efficient when building websites and web apps.
          </p>
        </div>
        <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
              </div>
              <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full p-9">
                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                  {feature.title}
                </h3>
                <p className="mt-6 text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
