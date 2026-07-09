/**
 * Local development version - reads from environment variables
 * Replace the import in your files:
 * FROM: import { projectId, publicAnonKey } from './utils/supabase/info'
 * TO:   import { projectId, publicAnonKey } from './utils/supabase/info-local'
 */

export const projectId = import.meta.env.VITE_SUPABASE_URL?.replace('https://', '').replace('.supabase.co', '') || '';
export const publicAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Validation
if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
  console.warn('⚠️  Supabase credentials not found in environment variables. Please create a .env file from .env.example');
}
