import Link from "next/link";
const Logo = () => (
    <div className="flex items-center space-x-2">
      <span className="text-2xl">🛍️</span>
      <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
        TokoMenarik
      </span>
    </div>
  );
const NavigationAtas = () => (
  <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-800 transition-colors">
            <span className="text-xl">🔍</span>
          </button>
          <button className="text-gray-600 hover:text-gray-800 transition-colors">
            <span className="text-xl">🛒</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
);

export default NavigationAtas;
