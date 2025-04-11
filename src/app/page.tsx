import NavBar from "@/components/navbar/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="max-w-7xl mx-auto p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to My Next Playground</h2>
          <p className="text-gray-600">Select a demo from the navigation menu to explore different Next.js features</p>
        </div>
        <div className="mt-12 p-6 bg-gray-100 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold mb-4 text-gray-700">Getting Started</h3>
          <div className="space-y-4 font-mono text-sm">
            <div className="bg-gray-800 text-white p-4 rounded-md">
              <p className="text-green-400 mb-2"># Clone and install dependencies</p>
              <code>git clone https://github.com/yourusername/next-playground.git</code><br />
              <code>cd next-playground</code><br />
              <code>npm install</code>
            </div>

            <div className="bg-gray-800 text-white p-4 rounded-md">
              <p className="text-green-400 mb-2"># Run the development server</p>
              <code>npm run dev</code>
            </div>

            <div className="bg-gray-800 text-white p-4 rounded-md">
              <p className="text-green-400 mb-2"># Open your browser and navigate to:</p>
              <code className="text-blue-600">http://localhost:3000</code>
            </div>
          </div>

          <div className="mt-6 text-gray-600">
            <p className="mb-2">This playground includes examples of:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Suspense vs Loading Layout patterns</li>
              <li>Promise-based Modal implementations</li>
              <li>And more features coming soon!</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
