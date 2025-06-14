export default function FeaturedBrands() {
    const brands = [
      { name: 'Tesla', logo: 'https://via.placeholder.com/150x80?text=Tesla' },
      { name: 'Rivian', logo: 'https://via.placeholder.com/150x80?text=Rivian' },
      { name: 'Lucid', logo: 'https://via.placeholder.com/150x80?text=Lucid' },
      { name: 'Ford EV', logo: 'https://via.placeholder.com/150x80?text=Ford+EV' },
      { name: 'GM EV', logo: 'https://via.placeholder.com/150x80?text=GM+EV' },
    ];
  
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {brands.map((brand, index) => (
              <div key={index} className="flex justify-center items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img src={brand.logo} alt={brand.name} className="h-16 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }