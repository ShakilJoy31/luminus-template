import FeaturedVehicles from "@/components/Home/FeaturedVehicles";
import HeroSection from "@/components/Home/HeroSection";
import ServicesSection from "@/components/Home/ServicesSection";
import StatsSection from "@/components/Home/StatsSection";
import { generateDynamicMetadata } from "@/metadata/generateMetadata";

export async function generateMetadata() {
  return generateDynamicMetadata({
    title: "Car Garage | Home",
    description: "Discover luxury and performance vehicles at Auto Elite. New & used cars, professional maintenance, financing solutions. Drive your dream car today with our exclusive deals and premium service.",
    keywords: [
      "luxury cars", "car dealership", "new cars", "used cars",
      "auto financing", "car maintenance", "test drive", "premium vehicles",
      "BMW", "Mercedes", "Audi", "Tesla", "car service", "vehicle inspection",
      "car warranty", "auto elite", "premium cars"
    ],
  });
}

const Home = async () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeaturedVehicles />
      <StatsSection />
      <ServicesSection />
      
      {/* Additional sections can be added here */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Find Your Dream Car?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Visit our showroom today or browse our online inventory. Our expert team is ready to help you find the perfect vehicle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold text-lg transition-colors">
              Browse Inventory
            </button>
            <button className="border-1 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-4 py-2 rounded-xl font-semibold text-lg transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

