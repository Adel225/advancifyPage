
import { MessageSquare, Dock, Calendar } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Calendar className="w-12 h-12 text-[#4D7DDA]" />,
      title: "Intelligent Consultation Scheduling",
      description: "Automate your firm's scheduling. Our AI agent books qualified client consultations 24/7 directly into your calendar, eliminating administrative overhead and capturing every lead.",
      features: ["24/7 Automated Booking", "DSeamless Calendar Integration", "Automated Client Reminders"]
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-[#4D7DDA]" />,
      title: "24/7 Virtual Legal Assistant",
      description: "Never miss a potential client. Our AI chatbot engages website visitors 24/7, answering questions, qualifying leads, and gathering crucial case details to optimize your intake workflow.",
      features: ["Automated Client Intake", "nstant FAQ Responses", "Lead Qualification & Routing"]
    },
    {
      icon: <Dock className="w-12 h-12 text-[#4D7DDA]" />,
      title: "AI-Powered Document Analysis",
      description: "Save hours of non-billable work. Our secure AI instantly analyzes and summarizes complex legal documents, extracting key facts and insights to help you build stronger cases, faster..",
      features: ["Rapid Case File Summarization", "Key Information Extraction", "Secure & Confidential"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our AI Solutions for <span className="gradient-text">Law Firms</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive automation services designed to streamline your business operations and enhance customer experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <div className="w-2 h-2 bg-[#4D7DDA] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
