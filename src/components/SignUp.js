import React from "react";

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup">
        <h3>S'inscrire</h3>
        <form>
          <input type="text" placeholder="Pseudo" required />
          <input type="email" required placeholder="Email" />
          <input type="password" required placeholder="Mot de passe" />
          <input type="submit" value="Valider l'inscription" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
