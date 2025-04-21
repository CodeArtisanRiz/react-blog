import BlogList from "@/components/BlogList";
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <BlogList />
    </div>
  );
}

export default Home;