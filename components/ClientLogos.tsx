export default function ClientLogos() {
  // Placeholder logos - replace with actual client logos when available
  const clients = [
    { name: "Fire Door Services", industry: "Fire Safety" },
    { name: "Joinery Services", industry: "Construction" },
    { name: "Property Services", industry: "Property" },
    { name: "Local Business", industry: "Services" },
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Built for Yorkshire Businesses
            </h2>
            <p className="text-gray-600">
              A small, hands-on team — focused on rankings and enquiries (not vanity metrics)
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
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
                  <p className="text-sm font-medium text-gray-700">{client.name}</p>
                  <p className="text-xs text-gray-500">{client.industry}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            * Names anonymised for privacy. Happy to share references on request.
          </p>
        </div>
      </div>
    </section>
  );
}

