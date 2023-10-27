import React from "react";
import SingIn from "../../component/SignIn/SignIn";
import SingUp from "../../component/SignUp/SignUp";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";

const Login = () => {
  const [alignment, setAlignment] = React.useState<string>("singin");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="singin">SignIn</ToggleButton>
        <ToggleButton value="singup">SingUp</ToggleButton>
      </ToggleButtonGroup>

      {alignment === "singin" ? (
        <SingIn setAlignment={setAlignment} />
      ) : (
        <SingUp />
      )}
    </>
  );
}

export default Login;
