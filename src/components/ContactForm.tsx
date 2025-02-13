
import { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto space-y-6"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-verdandi-gold font-cormorant mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-verdandi-blue-light border border-verdandi-gold/30 rounded px-4 py-2 text-white font-cormorant focus:border-verdandi-gold focus:outline-none transition-colors duration-300"
          required
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-verdandi-gold font-cormorant mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full bg-verdandi-blue-light border border-verdandi-gold/30 rounded px-4 py-2 text-white font-cormorant focus:border-verdandi-gold focus:outline-none transition-colors duration-300"
          required
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-verdandi-gold font-cormorant mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={4}
          className="w-full bg-verdandi-blue-light border border-verdandi-gold/30 rounded px-4 py-2 text-white font-cormorant focus:border-verdandi-gold focus:outline-none transition-colors duration-300"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-verdandi-gold text-verdandi-blue font-cormorant font-semibold py-2 rounded hover:bg-verdandi-gold-light transition-colors duration-300"
      >
        Send Message
      </button>
    </motion.form>
  );
};

export default ContactForm;
