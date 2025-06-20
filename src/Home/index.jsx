import Hero from "./components/Hero";
import ContactSection from "./components/ContactSection";

const Home = () => {
  return (
    <Register />
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
            Our Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Quality", "Innovation", "Support"].map((feature) => (
              <div
                key={feature}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-indigo-600 text-xl">✨</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature}
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <ContactSection />
    </div>
  );
};

export default Home;
