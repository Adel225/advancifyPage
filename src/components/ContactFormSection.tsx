import { useState, FormEvent } from "react"; 
import emailjs from '@emailjs/browser'; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './PhoneNumberInput.css';

const WEBHOOK_URL = 'https://a7anek.advancify.shop/webhook/3a3dec8d-070a-4ee4-911a-34cad60f6fda'; 

// Access Vite environment variables
// const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
// const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
// const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    preferredLanguage: '',
    message: '',
    PreferedContact: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please enter your phone number.",
        variant: "default",
      });
      return; 
    }
    

    if (!formData.PreferedContact) {
      toast({
        title: "Missing Information",
        description: "Please select your preferred contact method.",
        variant: "default",
      });
      return; 
    }

    // Only require email if preferred contact is not phone-call
    if (formData.PreferedContact !== "phone-call" && !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please enter your email address.",
        variant: "default",
      });
      return;
    }

    setIsSubmitting(true);

    // if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    //   toast({
    //     title: "Configuration Error",
    //     description: "Email sending is not configured. Please ensure environment variables are set and the server was restarted.",
    //     variant: "destructive",
    //   });
    //   setIsSubmitting(false);
    //   return;
    // }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      businessType: formData.businessType,
      preferredLanguage: formData.preferredLanguage,
      message: formData.message,
      PreferedContact: formData.PreferedContact
    };

    try {
      await Promise.all([
        // emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY),

        fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData), 
        })
      ]);
      
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        businessType: '',
        preferredLanguage: '',
        message: '',
        PreferedContact: ''
      });
    } 
    catch (error) {
      console.error('Failed to send email:', error);
      toast({
        title: "Error Sending Message",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
    } 
    finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Unlock your AI edge — tailored for your business.</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Our focus is quality, not quantity. We're offering a tailored 2-week demo to a limited group of businesses — tell us your goals and let's build your AI agent.
          </p>
        </div>

        <div className="glass-card p-8 sm:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">Name *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="Your full name"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required={formData.PreferedContact !== "phone-call"}
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone-input" className="text-white">Phone *</Label>
                <PhoneInput
                  id="phone-input"
                  international
                  defaultCountry="AE"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={(value) => handleInputChange('phone', value || '')} 
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="PreferedContact" className="text-white">Prefere contact via ? </Label>
                <Select value={formData.PreferedContact} onValueChange={(value) => handleInputChange('PreferedContact', value)}>
                  <SelectTrigger className="bg-white/5 border-white/20 text-white">
                    <SelectValue placeholder="Select your favourit contact" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="emailing">Emailing</SelectItem>
                    <SelectItem value="phone-call">Phone call</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* <div className="space-y-2">
                <Label htmlFor="businessType" className="text-white">Business Type</Label>
                <Select value={formData.businessType} onValueChange={(value) => handleInputChange('businessType', value)}>
                  <SelectTrigger className="bg-white/5 border-white/20 text-white">
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="real-estate">Real Estate</SelectItem>
                    <SelectItem value="hospitality">Hospitality</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="language" className="text-white">Preferred Language</Label>
                <Select value={formData.preferredLanguage} onValueChange={(value) => handleInputChange('preferredLanguage', value)}>
                  <SelectTrigger className="bg-white/5 border-white/20 text-white">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="arabic">العربية (Arabic)</SelectItem>
                    <SelectItem value="both">Both</SelectItem>
                  </SelectContent>
                </Select>
              </div>*/}
            </div> 

            <div className="space-y-2">
              <Label htmlFor="message" className="text-white">Tell Us more about your business</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 min-h-[120px]"
                placeholder="Describe your current challenges and how we can help automate your business processes..."
              />
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full btn-primary py-4 text-lg"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-400 mb-4">Prefer to talk directly?</p>
          <Button 
            className="btn-secondary"
            onClick={() => window.open('https://cal.com/adel-sameh/call', '_blank')}
          >
            Schedule a Call Instead
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;