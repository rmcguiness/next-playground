'use client'
import { Session, User } from '@supabase/supabase-js';
import { useContext, useState, useEffect, createContext } from 'react';
import { createClient } from '@/utils/supabase/client';

// create a context for authentication
const AuthContext = createContext<{ session: Session | null | undefined, user: User | null | undefined, signOut: () => void }>({ session: null, user: null, signOut: () => { } });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User>()
    const [session, setSession] = useState<Session | null>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const refreshSession = async () => {
            const { error } = await createClient.auth.refreshSession()
            if (error) console.error('Error refreshing session:', error)
        }
        const setData = async () => {
            const { data: { session }, error } = await createClient.auth.getSession();
            if (error) throw error;
            setSession(session)
            setUser(session?.user)
            setLoading(false);
        };

        const { data: listener } = createClient.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            setUser(session?.user)
            setLoading(false)
        });

        setData();
        if (session) {
            const expiresAt = session.expires_at ? session.expires_at * 1000 : 0; // Convert to milliseconds
            const timeToRefresh = expiresAt - Date.now() - (5 * 60 * 1000) // 5 minutes before expiry

            if (timeToRefresh > 0) {
                const refreshTimer = setTimeout(refreshSession, timeToRefresh)
                return () => clearTimeout(refreshTimer)
            } else {
                refreshSession()
            }
        }

        return () => {
            listener?.subscription.unsubscribe();
        };
    }, [session]);

    const value = {
        session,
        user,
        signOut: () => createClient.auth.signOut(),
    };

    // use a provider to pass down the value
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

// export the useAuth hook
export const useAuth = () => {
    return useContext(AuthContext);
};