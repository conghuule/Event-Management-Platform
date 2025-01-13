import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Event Management Platform</h1>
        <nav>
          <Link href="/auth/login">
            <h1 className="px-4 py-2 bg-white text-blue-500 rounded hover:bg-gray-100">Login</h1>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
