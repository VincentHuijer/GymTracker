import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://bliycjhihbzbizkmkaur.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsaXljamhpaGJ6Yml6a21rYXVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NTc5OTMsImV4cCI6MjAyNjMzMzk5M30.Qj-jnC2PN7AheRPoAwbk71WT2Ccd_wvMrW1HaDE9-0k";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})