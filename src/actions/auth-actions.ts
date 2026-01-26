"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    phone: (formData.get("phone") as string) || "",
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  if (formData.get("remember-me") === "on") {
    const expirationTime = 60 * 60 * 24 * 30; // 30 days in seconds

    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session?.access_token) {
      redirect("/error");
    }

    (await cookies()).set("session", session.access_token, {
      httpOnly: true,
      expires: new Date(Date.now() + expirationTime * 1000),
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData) {
  const supabase = await createClient();
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    phone: (formData.get("phone") as string) || "",
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);
  if (error) {
    return { error: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/auth/login");
}

export const getUser = async () => {
  // Get additional user data if needed
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  return { data, error };
};

export async function signInWithOAuth(provider: 'github' | 'google' | 'facebook') {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/auth/callback`,
    },
  });

  if (error) {
    redirect("/error");
  }

  if (data.url) {
    redirect(data.url);
  }
}
