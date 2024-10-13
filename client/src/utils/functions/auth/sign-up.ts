import { SERVER_BASE_URL } from "@/utils/config";

interface TSignUpUser {
  name: string;
  email: string;
  password: string;
}

export const signUpUser = async ({ name, password, email }: TSignUpUser) => {
  const resp = await fetch(SERVER_BASE_URL + "/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password, name }),
    headers: {
      "Content-type": "application/json"
    }
  })

  return resp.status;
}