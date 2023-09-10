import {
  Alert,
  CssBaseline,
  Typography,
} from "@mui/material";
import {
  AuthPageWrapper,
} from "../../../components";
import {
  FormWrapper,
} from "../../../components/atoms/StyledComponents";
import React, { useRef, useState } from "react";

import Head from "next/head";
import { Stack } from "@mui/system";
import { useRouter } from "next/router";

import ReCAPTCHA from "react-google-recaptcha"
import { verifyCaptcha } from "src/captcha/ServerActions";

const reCaptcha = () => {
  //state for errors
  const [error, setError] = useState("");

  //React Router Navigator
  const navigate = useRouter();

  const { redirectPath } = navigate.query as { redirectPath: string };

  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const [isVerified, setIsverified] = useState<boolean>(false)

  async function handleCaptchaSubmission(token: string | null) {
    // Server function to verify captcha
    await verifyCaptcha(token)
      .then(() => {
        if (isVerified) {
          setIsverified(true);
          if (redirectPath) {
            navigate.push(redirectPath);
          } else {
            navigate.push("/");
          }
        } else {
          console.log("Google ReCaptcha verification failed.");
        }
      })
      .catch(() => setIsverified(false))
  }

  return (
    <AuthPageWrapper>
      <Head>
        <title>Sign In</title>
      </Head>
      <CssBaseline />
      <FormWrapper
        component="form"
        target="none"
      >
        {error && (
          <Alert severity="error" sx={{ marginBottom: 4 }}>
            {error}
          </Alert>
        )}

        <Typography variant="h1" fontWeight="bold">
          Sign In
        </Typography>
        <Typography variant="body1" marginTop={3}>
          Welcome to itsourvoice.com, please enter your login credentials below
          to start using the app.
        </Typography>
        {/* <Stack direction="row"> */}

        <Stack direction="row" justifyContent="center" marginTop={15}>
          <ReCAPTCHA
            sitekey="6LfnRPonAAAAAE3TDg3y4PdWV36lFmGCfM4sHqkL"
            ref={recaptchaRef}
            onChange={handleCaptchaSubmission}
          />
        </Stack>
      </FormWrapper>
    </AuthPageWrapper>
  );
};

export default reCaptcha;
