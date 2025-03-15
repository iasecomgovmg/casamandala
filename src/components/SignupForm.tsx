
import { useState } from 'react';
import { motion } from 'framer-motion';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle the form submission
    console.log({ name, email, phone });
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setName('');
      setEmail('');
      setPhone('');
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto bg-white shadow-xl p-8 md:p-12 rounded-sm"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-light text-center mb-8">
            Reserve sua prática gratuita
          </h2>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center p-8"
            >
              <svg 
                className="w-16 h-16 text-green-500 mx-auto mb-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="text-2xl font-medium mb-2">Obrigado pelo seu interesse!</h3>
              <p className="text-slate-600">
                Entraremos em contato em breve para agendar sua prática gratuita.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="border-b border-green-700">
                    <input
                      type="text"
                      placeholder="Seu nome"
                      className="w-full py-3 px-2 outline-none bg-transparent"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <div className="border-b border-green-700">
                    <input
                      type="email"
                      placeholder="Seu email"
                      className="w-full py-3 px-2 outline-none bg-transparent"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="border-b border-green-700">
                    <input
                      type="tel"
                      placeholder="Seu telefone"
                      className="w-full py-3 px-2 outline-none bg-transparent"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="px-10 py-3 bg-green-700 text-white uppercase tracking-wider text-sm font-medium hover:bg-green-800 transition-all inline-block"
                >
                  Inscrever-se
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SignupForm;
