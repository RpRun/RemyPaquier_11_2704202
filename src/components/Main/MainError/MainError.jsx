import React from "react";
import BackHome from "../../BackHome/BackHome";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import "./MainError.scss";
const MainError = () => {
  return (
    <main className="mainError">
      <ErrorMessage text="404" />
      <p>Oups! La page que vous demandez n'existe pas</p>

      <BackHome text="Retourner sur la page d'accueil" />
    </main>
  );
};

export default MainError;
