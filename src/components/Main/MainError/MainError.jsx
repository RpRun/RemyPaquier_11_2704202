import React from "react";
import BackHome from "../../BackHome/BackHome";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import "./MainError.scss";
const MainError = () => {
  return (
    <main className="mainError">
      <ErrorMessage text="404" />
      <div><p>Oups! La page que vous demandez n'existe pas</p></div>
      

      <BackHome text="Retourner sur la page d'accueil" />
    </main>
  );
};

export default MainError;
