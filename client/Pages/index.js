import Link from 'next/link';
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Crypto Trader Pro</h1>
      <Link href="/auth/login">
        <button className="bg-blue-600 px-6 py-2 rounded-lg mr-4">Login</button>
      </Link>
      <Link href="/auth/register">
        <button className="bg-gray-600 px-6 py-2 rounded-lg">Register</button>
      </Link>
    </div>
  );
}