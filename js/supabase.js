const SUPABASE_URL = 'https://vgexujxigtynbaccqlco.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZnZXh1anhpZ3R5bmJhY2NxbGNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc3NDM4MDksImV4cCI6MjA5MzMxOTgwOX0.ehiCD6cgXqcTMQDk0k67CBIn9hv_PJsBl-EKjKW01UE';

const { createClient } = supabase;
const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);