// lib/auth.js
import { supabase } from './supabase';

export const signUp = async (email, password) => {
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
    options: { emailRedirectTo: null } // Disable email confirmation
  });
  return { user, error };
};

export const signIn = async (email, password) => {
  const { user, error } = await supabase.auth.signInWithPassword({ email, password });
  return { user, error };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};
