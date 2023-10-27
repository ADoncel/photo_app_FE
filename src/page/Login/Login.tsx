import React from "react";
import SingIn from "../../component/SignIn/SignIn";
import SingUp from "../../component/SignUp/SignUp";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";

const Login = () => {
  const [alignment, setAlignment] = React.useState<string>("signin");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    if (newAlignment != null) setAlignment(newAlignment);
  };

  return (
    <>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="signin">SignIn</ToggleButton>
        <ToggleButton value="signup">SignUp</ToggleButton>
      </ToggleButtonGroup>

      {alignment === "signin" ? (
        <SingIn
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          setAlignment={setAlignment}
        />
      ) : (
        <SingUp
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          alignment={alignment}
          setAlignment={setAlignment}
        />
      )}
    </>
  );
};

export default Login;
