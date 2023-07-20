import "./App.css";
import logo from "./assets/logo.png";
import bg from "./assets/bg-img.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./components/Home.css";
function App() {
  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="conteudo">
    
      <div className="logo">
        <img src={logo} />

        <div className="leftContainer">
          <h1>Acesse a plataforma</h1>
          <p>
            Faça login ou registre-se para começar a construir seus projetos
            ainda hoje.
          </p>
          <form method="post" onSubmit={handleForm}>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label>E-mail</label>
            </div>

            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Senha"
              />
              <label>Senha</label>
            </div>

            <button type="submit" className="btn btn-primary">
              Entrar
            </button>
          </form>
        </div>
      </div>

      <div className="rightContainer">
        <img src={bg} />
      </div>
    </div>
  );
}

export default App;
