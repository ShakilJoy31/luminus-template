"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      number: 150,
      suffix: "+",
      label: "Vehicles in Stock",
      description: "Wide selection of new and pre-owned cars"
    },
    {
      number: 98,
      suffix: "%",
      label: "Customer Satisfaction",
      description: "Rated excellent by our customers"
    },
    {
      number: 15,
      suffix: "+",
      label: "Years Experience",
      description: "Serving the community since 2009"
    },
    {
      number: 5000,
      suffix: "+",
      label: "Happy Customers",
      description: "Driving their dream cars today"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  {inView && (
                    <CountUp
                      start={0}
                      end={stat.number}
                      duration={2.5}
                      separator=","
                      suffix={stat.suffix}
                    />
                  )}
                </div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-blue-100 text-sm">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;