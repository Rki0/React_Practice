import { useNavigate, Outlet } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const backward = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate("/");
  };

  return (
    <div>
      <header style={{ background: "lightgray", fontSize: 24, padding: 16 }}>
        <button onClick={backward}>Backward</button>
        <button onClick={goHome}>Go Home</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Header;
