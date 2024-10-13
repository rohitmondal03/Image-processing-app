import { model } from "mongoose";

import { userSchema } from "./schemas/auth.schema";

export const UserModel = model("UserModel", userSchema);