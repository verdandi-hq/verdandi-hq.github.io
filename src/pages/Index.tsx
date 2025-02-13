
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-verdandi-blue text-white font-cormorant">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b')] bg-cover bg-center opacity-5" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center relative z-10"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="animate-shimmer text-xl mb-6"
          >
            Welcome to
          </motion.p>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-semibold mb-8 animate-shimmer"
          >
            Verdandi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed"
          >
            Time is an ever-evolving tapestry, woven from what has been, what is,
            and what has yet to be. At Verdandi, we stand where possibility
            converges with the momentum of now.
          </motion.p>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-verdandi-blue-light/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-verdandi-gold text-3xl md:text-4xl font-semibold mb-8">
              Our Story
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              We are a forward-thinking holding company dedicated to shaping our
              world's future through strategic investments. Our approach combines
              deep market insight with a commitment to sustainable growth and
              innovation.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <div className="p-8 border border-verdandi-gold/20 rounded-lg backdrop-blur-sm">
                <h3 className="text-verdandi-gold text-xl font-semibold mb-4">
                  Innovation
                </h3>
                <p className="text-white/80">
                  We embrace emerging technologies and innovative solutions that
                  drive positive change in various sectors.
                </p>
              </div>
              <div className="p-8 border border-verdandi-gold/20 rounded-lg backdrop-blur-sm">
                <h3 className="text-verdandi-gold text-xl font-semibold mb-4">
                  Integrity
                </h3>
                <p className="text-white/80">
                  Our decisions are guided by strong ethical principles and a
                  commitment to transparency in all our dealings.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-verdandi-gold text-3xl md:text-4xl font-semibold mb-4">
              Connect With Us
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              We're always interested in discussing new opportunities and
              partnerships. Reach out to start a conversation.
            </p>
          </motion.div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-verdandi-gold/20">
        <div className="container mx-auto px-6 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Verdandi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
