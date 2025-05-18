export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Next.js</h1>
      <p className="text-xl">
        Get started by editing{" "}
        <code className="font-mono">src/app/page.js</code>
      </p>
      <div className="flex justify-center mt-8 gap-4">
        <a
          href="/language-selection"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Go to Language Selection
        </a>
        <a
          href="/home"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Go to Home
        </a>
        <a
          href="/videos-stories"
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
        >
          Go to Videos & Stories
        </a>
        <a
          href="/video"
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Go to Video
        </a>
        <a
          href="/my-lessons"
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
        >
          Go to My Lessons
        </a>
        <a
          href="/about"
          className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors"
        >
          Go to About
        </a>
      </div>
    </main>
  );
}
