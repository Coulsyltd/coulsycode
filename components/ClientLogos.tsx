export default function ClientLogos() {
  // Trades that benefit from local SEO and enquiry-focused websites
  const trades = [
    { name: "Plumbers", industry: "Plumbing" },
    { name: "Electricians", industry: "Electrical" },
    { name: "Builders", industry: "Construction" },
    { name: "Heating Engineers", industry: "HVAC" },
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Built for Tradespeople
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Websites that help you get found when customers search — and turn those searches into phone calls and enquiries
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trades.map((trade, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all duration-200"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <p className="text-base font-semibold text-gray-900 mb-1">{trade.name}</p>
                <p className="text-sm text-gray-600">{trade.industry}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            Plus roofers, carpenters, landscapers, and more — any trade that needs to be found locally
          </p>
        </div>
      </div>
    </section>
  );
}

