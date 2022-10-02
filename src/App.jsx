import logo from "./logo.svg";
import "./App.css";
import FacebookLogin from "react-facebook-login";
import { useTranslation } from "react-i18next";
import Header from "./component/header";

function App() {
  const { t, i18n } = useTranslation();

  const responseFacebook = (response) => {
    console.log(response);
  };
  const componentClicked = (data) => {
    console.warn(data);
  };

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="App">
      <Header />
      <p>{t("hello.1")}</p>
      <p>{t("I am.1")}</p>

      <FacebookLogin
        appId="1096906297833416"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
      <div className="language" style={{ display: "flex" }}>
        <button onClick={() => handleChangeLanguage("en")}>English</button>
        <button onClick={() => handleChangeLanguage("vi")}>VietNamese</button>
        <button onClick={() => handleChangeLanguage("kr")}>Korea</button>
      </div>
    </div>
  );
}

export default App;
