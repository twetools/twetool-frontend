const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seedAdditionalContacts() {
  console.log("🌱 Seeding 20 additional contacts with test data...");

  try {
    // Get existing lookup data
    const roles = await prisma.contact_role.findMany();
    const clientTypes = await prisma.client_type.findMany();
    const contactSources = await prisma.contact_source.findMany();
    const buyerStages = await prisma.buyer_stage.findMany();
    const buyerStatuses = await prisma.buyer_status.findMany();

    console.log(
      `Found ${roles.length} roles, ${clientTypes.length} client types, ${contactSources.length} sources`
    );

    // Validate required lookup data exists
    if (clientTypes.length === 0) {
      throw new Error(
        "❌ No client types found! Please seed client types first."
      );
    }

    // Warn about missing optional lookup data but proceed with defaults
    if (roles.length === 0) {
      console.warn("⚠️ No roles found - will use default role ID 1");
    }
    if (contactSources.length === 0) {
      console.warn(
        "⚠️ No contact sources found - will use default source ID 1"
      );
    }
    if (buyerStages.length === 0) {
      console.warn(
        "⚠️ No buyer stages found - will use default stage ID 1 for buyers"
      );
    }
    if (buyerStatuses.length === 0) {
      console.warn(
        "⚠️ No buyer statuses found - will use default status ID 1 for buyers"
      );
    }

    const buyerTypeId = clientTypes.find(
      (t) => t.label.toLowerCase() === "buyer"
    )?.id;
    const sellerTypeId = clientTypes.find(
      (t) => t.label.toLowerCase() === "seller"
    )?.id;
    const leadTypeId = clientTypes.find(
      (t) => t.label.toLowerCase() === "lead"
    )?.id;

    // Additional contact test data
    const additionalContacts = [
      {
        first_name: "Sarah",
        last_name: "Johnson",
        email: "sarah.johnson@email.com",
        mobile_phone: "(555) 123-4567",
        client_type_id: buyerTypeId,
        street_address: "789 Oak Street",
        city: "Atlanta",
        state: "GA",
        zip_code: "30309",
      },
      {
        first_name: "Michael",
        last_name: "Chen",
        email: "michael.chen@email.com",
        mobile_phone: "(555) 234-5678",
        client_type_id: sellerTypeId,
        street_address: "456 Pine Avenue",
        city: "Savannah",
        state: "GA",
        zip_code: "31401",
      },
      {
        first_name: "Jennifer",
        last_name: "Williams",
        email: "jennifer.williams@email.com",
        mobile_phone: "(555) 345-6789",
        client_type_id: buyerTypeId,
        street_address: "123 Maple Drive",
        city: "Augusta",
        state: "GA",
        zip_code: "30901",
      },
      {
        first_name: "David",
        last_name: "Brown",
        email: "david.brown@email.com",
        mobile_phone: "(555) 456-7890",
        client_type_id: leadTypeId,
        street_address: "321 Elm Street",
        city: "Columbus",
        state: "GA",
        zip_code: "31901",
      },
      {
        first_name: "Amanda",
        last_name: "Davis",
        email: "amanda.davis@email.com",
        mobile_phone: "(555) 567-8901",
        client_type_id: buyerTypeId,
        street_address: "654 Cedar Lane",
        city: "Macon",
        state: "GA",
        zip_code: "31201",
      },
      {
        first_name: "Robert",
        last_name: "Miller",
        email: "robert.miller@email.com",
        mobile_phone: "(555) 678-9012",
        client_type_id: sellerTypeId,
        street_address: "987 Birch Road",
        city: "Albany",
        state: "GA",
        zip_code: "31701",
      },
      {
        first_name: "Lisa",
        last_name: "Wilson",
        email: "lisa.wilson@email.com",
        mobile_phone: "(555) 789-0123",
        client_type_id: buyerTypeId,
        street_address: "147 Willow Way",
        city: "Valdosta",
        state: "GA",
        zip_code: "31601",
      },
      {
        first_name: "Christopher",
        last_name: "Moore",
        email: "christopher.moore@email.com",
        mobile_phone: "(555) 890-1234",
        client_type_id: leadTypeId,
        street_address: "258 Hickory Hill",
        city: "Warner Robins",
        state: "GA",
        zip_code: "31088",
      },
      {
        first_name: "Jessica",
        last_name: "Taylor",
        email: "jessica.taylor@email.com",
        mobile_phone: "(555) 901-2345",
        client_type_id: buyerTypeId,
        street_address: "369 Magnolia Drive",
        city: "Roswell",
        state: "GA",
        zip_code: "30075",
      },
      {
        first_name: "Matthew",
        last_name: "Anderson",
        email: "matthew.anderson@email.com",
        mobile_phone: "(555) 012-3456",
        client_type_id: sellerTypeId,
        street_address: "741 Peachtree Street",
        city: "Marietta",
        state: "GA",
        zip_code: "30060",
      },
      {
        first_name: "Ashley",
        last_name: "Thomas",
        email: "ashley.thomas@email.com",
        mobile_phone: "(555) 123-7890",
        client_type_id: buyerTypeId,
        street_address: "852 Dogwood Circle",
        city: "Alpharetta",
        state: "GA",
        zip_code: "30009",
      },
      {
        first_name: "Daniel",
        last_name: "Jackson",
        email: "daniel.jackson@email.com",
        mobile_phone: "(555) 234-8901",
        client_type_id: leadTypeId,
        street_address: "963 Azalea Avenue",
        city: "Duluth",
        state: "GA",
        zip_code: "30096",
      },
      {
        first_name: "Emily",
        last_name: "White",
        email: "emily.white@email.com",
        mobile_phone: "(555) 345-9012",
        client_type_id: buyerTypeId,
        street_address: "159 Camellia Court",
        city: "Smyrna",
        state: "GA",
        zip_code: "30080",
      },
      {
        first_name: "Ryan",
        last_name: "Harris",
        email: "ryan.harris@email.com",
        mobile_phone: "(555) 456-0123",
        client_type_id: sellerTypeId,
        street_address: "357 Jasmine Lane",
        city: "Johns Creek",
        state: "GA",
        zip_code: "30097",
      },
      {
        first_name: "Michelle",
        last_name: "Martin",
        email: "michelle.martin@email.com",
        mobile_phone: "(555) 567-1234",
        client_type_id: buyerTypeId,
        street_address: "468 Gardenia Way",
        city: "Lawrenceville",
        state: "GA",
        zip_code: "30043",
      },
      {
        first_name: "Kevin",
        last_name: "Thompson",
        email: "kevin.thompson@email.com",
        mobile_phone: "(555) 678-2345",
        client_type_id: leadTypeId,
        street_address: "579 Forsythia Drive",
        city: "Gainesville",
        state: "GA",
        zip_code: "30501",
      },
      {
        first_name: "Nicole",
        last_name: "Garcia",
        email: "nicole.garcia@email.com",
        mobile_phone: "(555) 789-3456",
        client_type_id: buyerTypeId,
        street_address: "680 Iris Street",
        city: "Cumming",
        state: "GA",
        zip_code: "30040",
      },
      {
        first_name: "Brandon",
        last_name: "Martinez",
        email: "brandon.martinez@email.com",
        mobile_phone: "(555) 890-4567",
        client_type_id: sellerTypeId,
        street_address: "791 Lily Pad Lane",
        city: "Buford",
        state: "GA",
        zip_code: "30518",
      },
      {
        first_name: "Stephanie",
        last_name: "Robinson",
        email: "stephanie.robinson@email.com",
        mobile_phone: "(555) 901-5678",
        client_type_id: buyerTypeId,
        street_address: "802 Rose Garden Road",
        city: "Sugar Hill",
        state: "GA",
        zip_code: "30518",
      },
      {
        first_name: "Jason",
        last_name: "Clark",
        email: "jason.clark@email.com",
        mobile_phone: "(555) 012-6789",
        client_type_id: leadTypeId,
        street_address: "913 Sunflower Circle",
        city: "Suwanee",
        state: "GA",
        zip_code: "30024",
      },
    ];

    const createdContacts = [];

    for (const contactData of additionalContacts) {
      console.log(
        `Creating contact: ${contactData.first_name} ${contactData.last_name}`
      );

      // Create address first
      const address = await prisma.address.create({
        data: {
          street_address: contactData.street_address,
          city: contactData.city,
          state: contactData.state,
          zip_code: contactData.zip_code,
          country: "USA",
          address_type: "primary",
        },
      });

      // Ensure every contact has required fields (no nulls)
      const assignedRole =
        roles.length > 0
          ? roles[Math.floor(Math.random() * roles.length)]
          : null;
      const assignedSource =
        contactSources.length > 0
          ? contactSources[Math.floor(Math.random() * contactSources.length)]
          : null;

      if (!assignedRole) {
        console.warn(
          `⚠️ No roles available - contact ${contactData.first_name} ${contactData.last_name} will need manual role assignment`
        );
      }
      if (!assignedSource) {
        console.warn(
          `⚠️ No contact sources available - contact ${contactData.first_name} ${contactData.last_name} will need manual source assignment`
        );
      }

      // Create contact with guaranteed non-null required fields
      const contact = await prisma.contact.create({
        data: {
          first_name: contactData.first_name,
          last_name: contactData.last_name,
          email: contactData.email,
          mobile_phone: contactData.mobile_phone,
          client_type_id: contactData.client_type_id, // Always has value from contact data
          primary_address_id: address.id,
          role_id: assignedRole?.id || 1, // Default to role ID 1 if no roles exist
          contact_source_id: assignedSource?.id || 1, // Default to source ID 1 if no sources exist
          last_contact_date: new Date(),
          notes: `Test contact created on ${new Date().toLocaleDateString()}. Role: ${
            assignedRole?.name || "Default"
          }, Source: ${assignedSource?.label || "Default"}`,
        },
      });

      // Create buyer record if contact is a buyer - ALWAYS assign status and stage
      if (contactData.client_type_id === buyerTypeId) {
        const assignedStage =
          buyerStages.length > 0
            ? buyerStages[Math.floor(Math.random() * buyerStages.length)]
            : null;
        const assignedStatus =
          buyerStatuses.length > 0
            ? buyerStatuses[Math.floor(Math.random() * buyerStatuses.length)]
            : null;

        if (!assignedStage) {
          console.warn(
            `⚠️ No buyer stages available - buyer ${contactData.first_name} ${contactData.last_name} will need manual stage assignment`
          );
        }
        if (!assignedStatus) {
          console.warn(
            `⚠️ No buyer statuses available - buyer ${contactData.first_name} ${contactData.last_name} will need manual status assignment`
          );
        }

        await prisma.buyer.create({
          data: {
            contact_id: contact.id,
            stage_id: assignedStage?.id || 1, // Default to stage ID 1 if no stages exist
            status_id: assignedStatus?.id || 1, // Default to status ID 1 if no statuses exist
            preapproval_amt: Math.floor(Math.random() * 500000) + 200000, // Random amount between 200k-700k
            financing_type: ["Conventional", "FHA", "VA", "Cash"][
              Math.floor(Math.random() * 4)
            ],
            buying_timeline: ["Immediately", "3 months", "6 months", "1 year"][
              Math.floor(Math.random() * 4)
            ],
            notes: `Buyer created on ${new Date().toLocaleDateString()}. Stage: ${
              assignedStage?.label || "Default"
            }, Status: ${assignedStatus?.name || "Default"}`,
          },
        });
      }

      createdContacts.push(contact);
    }

    console.log(
      `✅ Successfully created ${createdContacts.length} additional contacts with addresses and buyer records`
    );

    // Summary
    const totalContacts = await prisma.contact.count();
    const totalBuyers = await prisma.buyer.count();
    const totalAddresses = await prisma.address.count();

    console.log("\n📊 Database Summary:");
    console.log(`Total Contacts: ${totalContacts}`);
    console.log(`Total Buyers: ${totalBuyers}`);
    console.log(`Total Addresses: ${totalAddresses}`);
  } catch (error) {
    console.error("❌ Error seeding contacts:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the seeding function
if (require.main === module) {
  seedAdditionalContacts()
    .then(() => {
      console.log("🎉 Additional contact seeding completed successfully!");
      process.exit(0);
    })
    .catch((error) => {
      console.error("💥 Seeding failed:", error);
      process.exit(1);
    });
}

module.exports = { seedAdditionalContacts };
