#!/usr/bin/env node

// Simple Supabase data viewer using your service role key
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Missing Supabase credentials in .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
    },
});

async function viewClientIntakes() {
    console.log('📊 Fetching client intake data...\n');

    try {
        const { data, error, count } = await supabase
            .from('client_intake')
            .select('*', { count: 'exact' })
            .order('created_at', { ascending: false });

        if (error) {
            console.error('❌ Error:', error.message);
            return;
        }

        console.log(`✅ Found ${count} client intake records:\n`);

        if (data && data.length > 0) {
            data.forEach((record, index) => {
                console.log(`${index + 1}. ${record.name} - ${record.brand}`);
                console.log(`   Goals: ${record.goals}`);
                console.log(`   Budget: ${record.budget}`);
                console.log(`   Email: ${record.email || 'Not provided'}`);
                console.log(`   Source: ${record.source}`);
                console.log(`   Created: ${new Date(record.created_at).toLocaleString()}`);
                console.log('   ─'.repeat(50));
            });
        } else {
            console.log('No records found.');
        }
    } catch (err) {
        console.error('❌ Connection error:', err.message);
    }
}

async function addTestRecord() {
    console.log('🧪 Adding test record...\n');

    const testData = {
        name: 'CLI Test User',
        brand: 'Test Company',
        goals: 'Test the CLI connection',
        budget: '$1k-5k',
        email: 'test@example.com',
        source: 'cli'
    };

    try {
        const { data, error } = await supabase
            .from('client_intake')
            .insert([testData])
            .select()
            .single();

        if (error) {
            console.error('❌ Error:', error.message);
            return;
        }

        console.log('✅ Test record added successfully!');
        console.log(`   ID: ${data.id}`);
        console.log(`   Created: ${new Date(data.created_at).toLocaleString()}`);
    } catch (err) {
        console.error('❌ Error adding record:', err.message);
    }
}

// Main execution
const command = process.argv[2];

switch (command) {
    case 'view':
    case 'list':
        await viewClientIntakes();
        break;
    case 'test':
        await addTestRecord();
        break;
    default:
        console.log('Usage:');
        console.log('  node supabase-cli.mjs view   - View all client intake records');
        console.log('  node supabase-cli.mjs test   - Add a test record');
        break;
}