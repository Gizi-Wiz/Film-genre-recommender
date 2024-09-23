// hooks/useAuth.js
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = supabase.auth.getSession();
    session.then(({ data: { session } }) => {
      setUser(session ? session.user : null);
    });

    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session ? session.user : null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return { user };
};

export default useAuth;