-- Direct SQL Insert for testing contact data display
-- This will add sample contact data to verify PipelineTable functionality

-- Check current contact count
SELECT COUNT(*) as 'Current Contact Count' FROM contact;

-- Insert a basic test contact
INSERT INTO contact (
    first_name, 
    last_name, 
    email, 
    mobile_phone, 
    created_at, 
    updated_at
) VALUES (
    'Test', 
    'User', 
    'test.user@example.com', 
    '555-0123',
    GETDATE(),
    GETDATE()
);

-- Insert another contact with more details
INSERT INTO contact (
    first_name, 
    middle_name,
    last_name, 
    email, 
    mobile_phone,
    home_phone,
    notes,
    created_at, 
    updated_at
) VALUES (
    'Jane', 
    'M',
    'Smith', 
    'jane.smith@example.com', 
    '555-0124',
    '555-0125',
    'Sample contact for testing pipeline display',
    GETDATE(),
    GETDATE()
);

-- Verify the inserts
SELECT COUNT(*) as 'New Contact Count' FROM contact;

-- Show the inserted contacts
SELECT 
    id,
    first_name,
    middle_name,
    last_name,
    email,
    mobile_phone,
    created_at
FROM contact 
ORDER BY id DESC;
