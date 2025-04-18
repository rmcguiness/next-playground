import { redirect } from "next/navigation";
import { getUser } from "@/actions/auth-actions";
import { AuthProvider } from "@/context/AuthProvider";


export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { data, error } = await getUser()
    const isLoggedIn = data?.user;
    if (error || !isLoggedIn) {
        redirect('/')
    }
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
}
