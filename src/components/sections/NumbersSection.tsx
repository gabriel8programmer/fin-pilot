import { PRODUCT_METRICS } from "@/data/metrics";

export default function NumbersSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#123B4A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCT_METRICS.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-[#194D60]/40 border border-[#1E5A6A] space-y-2"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-[#2CB6A3] tracking-tight">
                {item.number}
              </div>
              <h3 className="text-base font-bold text-white tracking-tight">
                {item.label}
              </h3>
              <p className="text-xs sm:text-sm text-[#BDD8E0] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
