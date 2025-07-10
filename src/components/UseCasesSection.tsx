
const UseCasesSection = () => {
  const useCases = [
    {
      title: "Streamlined Client Intake & Scheduling",
      description: "Our AI agent integrated with a law firm's calendar to automatically qualify and book new client consultations, drastically reducing staff workload and eliminating scheduling conflicts.",
      result: "Freed up [~10 hours] of administrative time per week and reduced consultation no-shows by 40%",
      image: "🗓️" // Suggestion: A calendar icon
    },
    {
      title: "AI-Accelerated Discovery Analysis",
      description: "For a complex litigation case, our AI analyzed thousands of pages of discovery documents to pinpoint key evidence, names, and dates, turning a weeks-long task into a matter of hours.",
      result: "Reduced document review time from [80+] manual hours to just 3 hours of AI-assisted verification",
      image: "📄" // Suggestion: A document icon
    },
    {
      title: "24/7 Virtual Intake Assistant",
      description: "By implementing an AI chatbot on their website, a personal injury firm was able to instantly answer common questions and capture lead details around the clock, ensuring no potential client was missed.",
      result: "Handled [70%] of routine inbound queries automatically, increasing qualified lead capture by 25%",
      image: "💬" // You can reuse the chat icon
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#4D7DDA]/5 to-transparent" id="use-cases">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Real-World <span className="gradient-text">Impact for Legal Practices</span>
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
