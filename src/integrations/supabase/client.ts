// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://rageubrgduuszjqnedns.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhZ2V1YnJnZHV1c3pqcW5lZG5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExOTgzNTYsImV4cCI6MjA2Njc3NDM1Nn0.0lkb0hRCXYoyzsKMfyu0BgaRc0JMkpeL3DWD6jXlz70";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);