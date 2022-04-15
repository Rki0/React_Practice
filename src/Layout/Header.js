import { useNavigate, Outlet } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  function goHome() {
    navigate("/");
  }

  return (
    <div>
      <header>
        <button onClick={goBack}>Go back</button>
        <button onClick={goHome}>Go Home</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Header;
