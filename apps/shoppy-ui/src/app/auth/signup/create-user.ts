"use server";

import { API_URL } from "@/app/constants/api";
import { getErrorMessage } from "@/app/util/errors";
import { redirect } from "next/navigation";

import { CreateUserState } from "@/app/common/types/interfaces/create-user-state.interface";

export default async function createUser(_prevState: CreateUserState | undefined, formData: FormData) {
    const res = await fetch(`${API_URL}/users`, {
        method: "POST",
        body: formData,
    });
    const parsedRes = await res.json();
    if (!res.ok) {
        return { error: getErrorMessage(parsedRes)};
    }
    redirect("/");
}