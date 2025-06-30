
import { MessageSquare, Phone, Calendar } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Calendar className="w-12 h-12 text-[#4D7DDA]" />,
      title: "CRM Syncing Automation",
      description: "Seamlessly integrate and automate your customer relationship management with intelligent data syncing and workflow optimization.",
      features: ["Automated lead routing", "Data synchronization", "Workflow optimization"]
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-[#4D7DDA]" />,
      title: "WhatsApp Business Bots",
      description: "Deploy intelligent WhatsApp bots that handle customer inquiries, bookings, and support 24/7 in multiple languages.",
      features: ["24/7 customer support", "Multi-language support", "Automated bookings"]
    },
    {
      icon: <Phone className="w-12 h-12 text-[#4D7DDA]" />,
      title: "AI Call & Text Agents",
      description: "Advanced AI agents that handle phone calls and text communications, providing human-like interactions at scale.",
      features: ["Human-like conversations", "Appointment scheduling", "Customer service"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">AI Solutions</span>
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
