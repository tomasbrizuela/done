require('dotenv').config();
const { createClient } = require('@supabase/supabase-js')
const supabaseUrl = 'https://cfgbkadwolfpkjmgptwl.supabase.co'
const supabaseKey = process.env.SUPABASE_API_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

module.exports = supabase;

