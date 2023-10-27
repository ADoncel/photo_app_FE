import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit">Adoncca</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

interface inProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setAlignment: React.Dispatch<React.SetStateAction<string>>;
}

const SignIn = ({
  email,
  setEmail,
  password,
  setPassword,
  username,
  setUsername,
  setAlignment,
}: inProps) => {
  const [login, setLogin] = React.useState<boolean>(false);

  // TODO: Change this to HTTPS and correct URL when deployed
  const configuration = {
    method: "post",
    url: "http://localhost:5000/login",
    data: {
      email,
      password,
    },
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios(configuration)
      .then((result) => {
        setLogin(true);
        console.log(result)
      })
      .catch((error) => {
        error = new Error();
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1, alignItems: "center" }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => handleSubmit}
          >
            Sign In
          </Button>
          <Link onClick={() => setAlignment("signup")}>
            {"Don't have an account? Sign Up"}
          </Link>
        </Box>
        {login ? (
          <p className="text-success">You Logged in Succesfully</p>
        ) : (
          <p className="text-danger"></p>
        )}
      </Box>
      <Copyright />
    </Container>
  );
};

export default SignIn;
