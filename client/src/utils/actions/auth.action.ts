"use server"

import { type ActionFunctionArgs, redirect } from "react-router";

import { SERVER_BASE_URL } from "@/utils/config";
import { DASHBOARD_PATH } from "@/utils/config/route";

export const logInUserAction = async ({ request } : ActionFunctionArgs) => {
  const formData = await request.formData();

  const email = formData.get("email")?.toString() ?? "";
  const password = formData.get("password")?.toString() ?? ""

  const resp = await fetch(SERVER_BASE_URL + "/auth/signin", {
    method: "POST",
    credentials: "omit",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-type": "application/json",
    }
  })

  const status= resp.status;

  if (status === 401) {
    return status;
  }
  return redirect(DASHBOARD_PATH)
}

export const signUpUserAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const email = formData.get("email")?.toString() ?? "";
  const password = formData.get("password")?.toString() ?? ""
  const name = formData.get("name")?.toString() ?? ""

  const resp = await fetch(SERVER_BASE_URL + "/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password, name }),
    headers: {
      "Content-type": "application/json"
    }
  })

  const status= resp.status;

  if (status === 403) {
    return status;
  }
  return redirect(DASHBOARD_PATH)
}