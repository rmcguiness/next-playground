
export default function Loading() {
  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto p-8">
        <div className="animate-pulse">
          <div className="h-8 w-48 bg-gray-200 rounded mb-8"></div>
          <div className="space-y-4">
            <div className="p-4 bg-gray-100 rounded-lg">
              <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
            </div>

            <div className="p-4 bg-gray-100 rounded-lg">
              <div className="h-6 w-48 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
