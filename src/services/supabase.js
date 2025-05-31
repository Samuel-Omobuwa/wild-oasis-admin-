
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pycauoviylaxiklcuoui.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5Y2F1b3ZpeWxheGlrbGN1b3VpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxMzI1OTgsImV4cCI6MjA2MzcwODU5OH0.Ykr8W9Ryg4toWCUbPBsdSL2r8Lp1j6elsmTv27D86RQ"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
