import CustomButton from "@/components/buttons/dynamic-nav-button";
import { getUser } from "@/actions/auth-actions";

export default async function Home() {
  const { data } = await getUser()
  const isLoggedIn = data?.user;
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 z-0">
      <div className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              <span className="inline-block text-green-600">Next</span>
              <span className="ml-2 inline-block">Playground</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
              {isLoggedIn
                ? "Explore cutting-edge Next.js features with interactive examples"
                : "Sign in to explore cutting-edge Next.js features with interactive examples"}
            </p>

            {!isLoggedIn && (
              <div className="mt-8 flex justify-center space-x-4">
                <CustomButton text="Login" style="px-6 py-3 text-base font-medium rounded-md text-white bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 shadow-md transition duration-300" />
                <CustomButton text="Sign Up" style="px-6 py-3 text-base font-medium rounded-md text-white bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 shadow-md transition duration-300" />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 z-1">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative z-2 bg-white pb-8">
            <div className="relative pt-8 px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Getting Started
                </h2>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                  Follow these steps to set up your own playground
                </p>
              </div>
            </div>
          </div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-md">
                <div className="px-6 py-5 border-b border-gray-800">
                  <div className="flex items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="ml-4 font-mono text-sm text-gray-400">Terminal</span>
                  </div>
                </div>
                <div className="px-6 py-6">
                  <p className="text-green-400 mb-2 font-mono text-sm"># Clone and install dependencies</p>
                  <code className="text-gray-300 font-mono text-sm break-all">git clone https://github.com/rmcguiness/next-playground.git</code><br />
                  <code className="text-gray-300 font-mono text-sm">cd next-playground</code><br />
                  <code className="text-gray-300 font-mono text-sm">npm install</code>

                  <p className="text-green-400 mb-2 mt-6 font-mono text-sm"># Run the development server</p>
                  <code className="text-gray-300 font-mono text-sm">npm run dev</code>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-md">
                <div className="px-6 py-5 border-b border-gray-800">
                  <div className="flex items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="ml-4 font-mono text-sm text-gray-400">Browser</span>
                  </div>
                </div>
                <div className="px-6 py-6">
                  <p className="text-green-400 mb-2 font-mono text-sm"># Connect to Supabase</p>
                  <code className="text-gray-300 font-mono text-sm">create a project at supabase.com</code><br />
                  <code className="text-gray-300 font-mono text-sm">get your project URL and anon key from the project settings</code><br />
                  <code className="text-gray-300 font-mono text-sm">add these to your .env.local file</code>

                  <p className="text-green-400 mb-2 mt-6 font-mono text-sm"># Open your browser</p>
                  <code className="text-blue-400 font-mono text-sm">http://localhost:3000</code>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-xl bg-gradient-to-r from-slate-50 to-white p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Subjects Include</h3>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-700">Suspense vs Loading Layout patterns</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-700">Promise-based Modal implementations</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-700">Dynamic Navbar with Supabase Auth</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-700">Jest and React Testing Library</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
