import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useRef } from 'react';
import { motion } from 'framer-motion'

const Contact = () => {
  const formRef = useRef(null);
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "5da5af55-9d76-4856-883d-84028eb54c6a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Message sent successfully!");
    } else {
      console.error("Error", res);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div>
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100}}
          transition={{ duration: 0.5 }}
          className="y-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-700 text-4xl mb-6">Contact Me
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100}}
            transition={{ duration: 1 }}
            className="space-y-6">
              <div>
                <h1 className="mb-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-700">Let's talk</h1>
                <p>I'm currently available for new projects, so feel free to send me a message about anything you want me to work on. You can contact me anytime.</p>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-light-400 w-6 h-6 mr-3" />
                <p className="ml-4">Lekki, Lagos State</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-light-400 w-6 h-6 mr-3" />
                <p className="ml-4">egormarvelous@gmail.com</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="w-6 h-6 mr-3" />
                <p className="ml-4">+234 70 6215 1904</p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100}}
            transition={{ duration: 1 }}
            ref={formRef} onSubmit={onSubmit} className="bg-dark border border-light-400 p-6 rounded-lg shadow-md space-y-4">
              <div>
                <label htmlFor="name" className="block">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"  
                  placeholder="Your Name"
                  className="w-full mt-2 p-3 border rounded-md focus:ring-neutral-400 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label htmlFor="email" className="block">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"  
                  placeholder="Your Email"
                  className="w-full mt-2 p-3 border rounded-md focus:ring-neutral-400 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label htmlFor="message" className="block">Message</label>
                <textarea
                  id="message"
                  name="message"  
                  rows="4"
                  placeholder="Your Message"
                  className="w-full mt-2 p-3 border rounded-md text-dark focus:ring-neutral-400 focus:outline-none focus:ring"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-slate-300 text-black rounded-lg hover:bg-neutral-600 transition"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
