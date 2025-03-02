import Link from 'next/link';
import NavBar from '../../components/NavBar';

export default function MushroomPage() {
  return (
    <div className="page">
      <h1>Mushroom Page</h1>
      <Link href="/comparison">
        <button>Go to Mushroom Comparison Page</button>
      </Link>
      <NavBar />
    </div>
  );
}
