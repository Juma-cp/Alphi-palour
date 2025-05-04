import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="p-4 shadow bg-white flex justify-between">
      <Link to="/" className="font-bold">Alphi Parlour</Link>
      <div className="space-x-4">
        <Link to="/services">Services</Link>
        <Link to="/booking">Book</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
