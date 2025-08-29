// Using the existing TypeORM createContact function to add test data
require("dotenv").config({ path: ".env.local" });
require("dotenv").config({ path: ".env" });

const { createContact } = require("../../src/lib/contacts/typeorm-actions.js");

async function createTestContacts() {
  console.log("🌱 Creating test contacts using existing TypeORM function...");

  const testContacts = [
    {
      first_name: "John",
      last_name: "Smith",
      email: "john.smith@example.com",
      mobile_phone: "555-0101",
      notes: "Sample buyer contact for testing pipeline",
    },
    {
      first_name: "Sarah",
      last_name: "Johnson",
      email: "sarah.johnson@example.com",
      mobile_phone: "555-0102",
      notes: "Sample seller contact for testing pipeline",
    },
    {
      first_name: "Michael",
      middle_name: "A",
      last_name: "Davis",
      email: "michael.davis@example.com",
      mobile_phone: "555-0103",
      home_phone: "555-0104",
      notes: "First-time buyer contact for testing",
    },
  ];

  try {
    for (const contactData of testContacts) {
      console.log(
        `Creating contact: ${contactData.first_name} ${contactData.last_name}`
      );
      const contact = await createContact(contactData);
      console.log(`✅ Created contact with ID: ${contact.id}`);
    }

    console.log("🎉 All test contacts created successfully!");
    console.log("💡 Refresh your pipeline page to see the contacts");
  } catch (error) {
    console.error("❌ Error creating contacts:", error.message);
    console.error("Full error:", error);
  }
}

createTestContacts();
