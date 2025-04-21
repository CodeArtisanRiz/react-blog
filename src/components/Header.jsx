export default function Header() {
  return (
    <header className="bg-white py-10 mb-8 border-b">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Welcome to <span className="text-blue-600">React-Blog</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          A simple blog app built with React, Tailwind CSS, and shadcn/ui.<br />
          Powered by{" "}
          <a
            href="https://jsonplaceholder.typicode.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            JSONPlaceholder
          </a>{" "}
          and{" "}
          <a
            href="https://picsum.photos/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Picsum Photos
          </a>.
        </p>
      </div>
    </header>
  );
}