import BlogList from "@/components/BlogList";
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <section className="bg-gray-50 py-12 mb-8">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome to React-Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            This is a simple blog system built as part of an assignment project using React, Tailwind CSS, and shadcn/ui.
            It integrates public APIs like{" "}
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
            </a>{" "}
            to demonstrate core frontend concepts.
          </p>

        </div>
      </section>
      <BlogList />
    </div>
  );
}

export default Home;