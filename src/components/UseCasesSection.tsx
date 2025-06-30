
const UseCasesSection = () => {
  const useCases = [
    {
      title: "Automated Lead Routing to CRM",
      description: "Automatically capture leads from multiple channels and route them to the appropriate CRM system with intelligent categorization and priority scoring.",
      result: "Reduce lead response time by 75% and increase conversion rates",
      image: "📊"
    },
    {
      title: "WhatsApp Bot Client Engagement",
      description: "Deploy intelligent WhatsApp bots that handle customer inquiries, provide instant quotes, and schedule appointments while maintaining personalized communication.",
      result: "Handle 90% of customer inquiries without human intervention",
      image: "💬"
    },
    {
      title: "AI Phone Agent Booking System",
      description: "AI-powered phone agents that handle appointment bookings, follow-up calls, and customer support with natural conversation flow.",
      result: "Book 60% more appointments with 24/7 availability",
      image: "📞"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#4D7DDA]/5 to-transparent" id="use-cases">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Real-World <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            See how businesses like yours are transforming their operations with our AI automation solutions.
          </p>
        </div>

        {/* Use Cases */}
        <div className="space-y-12">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="text-6xl mb-4">{useCase.image}</div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {useCase.title}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {useCase.description}
                </p>
                <div className="bg-gradient-to-r from-[#4D7DDA]/20 to-[#8E1E5F2]/20 p-4 rounded-lg border border-[#4D7DDA]/30">
                  <p className="text-[#4D7DDA] font-semibold">
                    ✨ {useCase.result}
                  </p>
                </div>
              </div>

              {/* Visual placeholder */}
              <div className="flex-1 max-w-md sm:max-w-md w-4/12">
                <div className="glass-card py-5 aspect-video flex items-center justify-center my-2 lg:mx-0 sm:my-5">
                  <div className="text-center">
                    <div className="text-6xl mb-4">{useCase.image}</div>
                    <p className="text-gray-400">Use Case Visualization</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
