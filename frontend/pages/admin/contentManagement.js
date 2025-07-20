import { useAuth } from '../../hooks/useAuth';

export default function ContentManagement() {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Content Management</h1>
      {user ? <p>Welcome, {user.name}</p> : <p>Please log in</p>}
    </div>
  );
}