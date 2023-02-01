import { Container, Grid, Box, Typography, Stack, Link as MuiLink, FormControlLabel, Checkbox, Icon } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { FC, useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { literal, object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../Components/form/Form";
// import { ReactComponent as GoogleLogo } from "../assets/google.svg";
// import { ReactComponent as GitHubLogo } from "../assets/github.svg";
import styled from "@emotion/styled";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleIcon from "@mui/icons-material/Google"
import GitHubIcon from '@mui/icons-material/GitHub';

// 👇 Styled React Route Dom Link Component
export const LinkItem = styled(Link)`
    text-decoration: none;
    color: #3683dc;
    &:hover {
        text-decoration: underline;
        color: #5ea1b6;
    }
`;


// 👇 Login Schema with Zod
const loginSchema = object({
    email: string().min(1, "Email is required").email("Email is invalid"),
    password: string().min(1, "Password is required").min(8, "Password must be more than 8 characters").max(32, "Password must be less than 32 characters"),
    persistUser: literal(true).optional(),
});

// 👇 Infer the Schema to get the TS Type
type ILogin = TypeOf<typeof loginSchema>;

const LoginPage: FC = () => {
    // 👇 Default Values
    const defaultValues: ILogin = {
        email: "",
        password: "",
    };

    // 👇 The object returned from useForm Hook
    const methods = useForm<ILogin>({
        resolver: zodResolver(loginSchema),
        defaultValues,
    });

    // 👇 Submit Handler
    const onSubmitHandler: SubmitHandler<ILogin> = (values: ILogin) => {
        console.log(values);
    };

    // 👇 Signning in with Google
    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState(false);

    const signInWithGoogle = async () => {
        setAuthing(true);

        signInWithPopup(auth, new GoogleAuthProvider())
            .then((response) => {
                console.log(response.user.uid);
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
                setAuthing(false);
            });
    };

    // 👇 JSX to be rendered
    return (
        <Container maxWidth={false} sx={{ height: "100vh", backgroundColor: { xs: "#fff", md: "#f4f4f4" } }}>
            <Grid container justifyContent="center" alignItems="center" sx={{ width: "100%", height: "100%" }}>
                <Grid item sx={{ maxWidth: "70rem", width: "100%", backgroundColor: "#fff" }}>
                    <FormProvider {...methods}>
                        <Grid
                            container
                            sx={{
                                boxShadow: { sm: "0 0 5px #ddd" },
                                py: "6rem",
                                px: "1rem",
                            }}
                        >
                            <Grid
                                item
                                container
                                justifyContent="space-between"
                                rowSpacing={5}
                                sx={{
                                    maxWidth: { sm: "45rem" },
                                    marginInline: "auto",
                                }}
                            >
                                <Grid item xs={12} sm={6} sx={{ borderRight: { sm: "1px solid #ddd" } }}>
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        component="form"
                                        noValidate
                                        autoComplete="off"
                                        sx={{ paddingRight: { sm: "3rem" } }}
                                        onSubmit={methods.handleSubmit(onSubmitHandler)}
                                    >
                                        <Typography variant="h6" component="h1" sx={{ textAlign: "center", mb: "1.5rem" }}>
                                            Log into your account
                                        </Typography>

                                        <FormInput label="Enter your email" type="email" name="email" focused required />
                                        <FormInput type="password" label="Password" name="password" required focused />

                                        <FormControlLabel
                                            control={<Checkbox size="small" aria-label="trust this device checkbox" required {...methods.register("persistUser")} />}
                                            label={
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        fontSize: "0.8rem",
                                                        fontWeight: 400,
                                                        color: "#5e5b5d",
                                                    }}
                                                >
                                                    Trust this device
                                                </Typography>
                                            }
                                        />

                                        <LoadingButton
                                            loading={false}
                                            type="submit"
                                            variant="contained"
                                            sx={{
                                                py: "0.8rem",
                                                mt: 2,
                                                width: "80%",
                                                marginInline: "auto",
                                            }}
                                        >
                                            Login
                                        </LoadingButton>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography
                                        variant="h6"
                                        component="p"
                                        sx={{
                                            paddingLeft: { sm: "3rem" },
                                            mb: "1.5rem",
                                            textAlign: "center",
                                        }}
                                    >
                                        Log in with another provider:
                                    </Typography>
                                    <Box display="flex" flexDirection="column" sx={{ paddingLeft: { sm: "3rem" }, rowGap: "1rem" }}>
                                    <LoadingButton
                                            loading={false}
                                            // type="submit"
                                            variant="outlined"
                                            sx={{
                                                py: "0.8rem",
                                                mt: 2,
                                                width: "80%",
                                                marginInline: "auto",
                                            }}
                                            startIcon={<GoogleIcon />}
                                            onClick={() => signInWithGoogle()}
                                            disabled={authing}
                                        >
                                            Google
                                        </LoadingButton>
                                        <LoadingButton
                                            loading={false}
                                            // type="submit"
                                            variant="outlined"
                                            sx={{
                                                py: "0.8rem",
                                                mt: 2,
                                                width: "80%",
                                                marginInline: "auto",
                                            }}
                                            startIcon={<GitHubIcon />}
                                            onClick={() => signInWithGoogle()}
                                            disabled={authing}
                                        >
                                            Github
                                        </LoadingButton>
            
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent="center">
                                <Stack sx={{ mt: "3rem", textAlign: "center" }}>
                                    <Typography sx={{ fontSize: "0.9rem", mb: "1rem" }}>
                                        Need an account? <LinkItem to="/signup">Sign up here</LinkItem>
                                    </Typography>
                                    <Typography sx={{ fontSize: "0.9rem" }}>
                                        Forgot your <LinkItem to="/forgotPassword">password?</LinkItem>
                                    </Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                    </FormProvider>
                </Grid>
            </Grid>
        </Container>
    );
};

export default LoginPage;
