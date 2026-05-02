import { authClient } from "./auth-client";

export const handleGoogleLogIn = async () => {
  await authClient.signIn.social({
    provider: "google",
  });
};
