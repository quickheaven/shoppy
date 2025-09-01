"use server";

import { CreateUserState } from "@/app/common/types/interfaces/create-user-state.interface";
import { post } from "@/app/util/fetch";
import { redirect } from "next/navigation";

export default async function createUser(_prevState: CreateUserState | undefined, formData: FormData) {
   const { error } = await post("users", formData);
   if (error) {
        return { error };
   }
   return redirect('/');

}