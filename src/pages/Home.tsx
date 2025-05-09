import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Server, Globe, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const HeroImage = "https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img
            src={HeroImage}
            alt="San Andreas cityscape at night"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-20">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Welcome to <span className="text-primary-500">Strive Roleplay</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-neutral-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The ultimate San Andreas Multiplayer roleplaying experience. 
              Join our vibrant community and immerse yourself in a realistic 
              virtual world filled with endless possibilities.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button size="lg">
                Join Now
              </Button>
              <Link to="/server-status">
                <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                  Check Server Status
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeIn}
            >
              Why Choose <span className="text-primary-600">Strive Roleplay</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeIn}
            >
              Experience the most immersive and feature-rich San Andreas roleplaying server available.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-10 w-10 text-primary-600" />,
                title: "Active Community",
                description: "Join hundreds of active players in a vibrant and welcoming community."
              },
              {
                icon: <Server className="h-10 w-10 text-primary-600" />,
                title: "High Performance",
                description: "Enjoy lag-free gameplay with our optimized server infrastructure."
              },
              {
                icon: <MessageSquare className="h-10 w-10 text-primary-600" />,
                title: "Immersive Roleplay",
                description: "Engage in deep, story-driven roleplay with unique character development."
              },
              {
                icon: <Globe className="h-10 w-10 text-primary-600" />,
                title: "Regular Updates",
                description: "Experience new content, features, and improvements on a regular basis."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-neutral-50 dark:bg-neutral-700 p-6 rounded-lg shadow-sm transition-transform hover:transform hover:-translate-y-1"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index + 2}
                variants={fadeIn}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p 
            className="text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join Strive Roleplay today and become part of our growing community.
            Create your story in the world of San Andreas.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              Join Server Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;