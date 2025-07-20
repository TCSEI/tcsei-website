import { useAuth } from '../hooks/useAuth';

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Welcome to TCSEI</h1>
      {user ? <p>Welcome, {user.name}</p> : <p>Please log in</p>}
    </div>
  );
}