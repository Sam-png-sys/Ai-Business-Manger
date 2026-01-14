import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 flex flex-col">
      {/* Navbar */}
      <div className="flex justify-between items-center px-10 py-6">
        <h1 className="text-2xl font-bold">DukaanGPT</h1>
        <button
          onClick={() => navigate("/auth")}
          className="px-5 py-2 bg-black text-white rounded-xl"
        >
          Login / Sign up
        </button>
      </div>

      {/* Hero */}
      <div className="flex flex-1 items-center justify-center text-center px-6">
        <div>
          <h2 className="text-5xl font-extrabold mb-6">
            Smart Invoice & Business Assistant
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            Upload invoices, track inventory, and get AI-powered insights —
            all in one place.
          </p>
          <button
            onClick={() => navigate("/auth")}
            className="px-8 py-4 bg-black text-white rounded-2xl text-lg"
          >
            Get Started →
          </button>
        </div>
      </div>
    </div>
  );
}
