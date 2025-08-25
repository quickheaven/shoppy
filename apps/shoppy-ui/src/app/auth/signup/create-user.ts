"use server";

import { API_URL } from "@/app/constants/api";
import { redirect } from "next/navigation";

export default async function createUser(_prevState: any, formData: FormData) {
    const res = await fetch(`${API_URL}`, {
        method: "POST",
        body: formData,
    });
    const parsedRes = await res.json();
    if (!parsedRes.ok) {
        return { error: ""};
    }
    redirect("/");
}