import { authClient } from "./auth-client";

export const handleGoogleLogIn = async (callbackUrl) => {
  await authClient.signIn.social({
    provider: "google",
    callbackURL: callbackUrl,
  });
};
