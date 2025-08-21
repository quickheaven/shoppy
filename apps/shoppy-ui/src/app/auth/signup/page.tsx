import { Button, Link, Stack, TextField } from "@mui/material";
import NextLink from "next/link";
import Login from './page';

export default function Signup() {
  return (
    <Stack spacing={2} className="w-full max-w-xs">
        <TextField label="Email" variant="outlined" />
        <TextField label="Password" type="password" variant="outlined" />
        <Button variant="contained">Signup</Button>
        <Link component={NextLink} href="/auth/login" className="self-center">Login</Link>          
    </Stack>
  );
}
