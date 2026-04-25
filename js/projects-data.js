/**
 * ============================================================
 *  LAND FINDER BD — Project Data Store
 * ============================================================
 *  HOW TO ADD A NEW PROJECT:
 *  1. Copy the object template below.
 *  2. Give it a unique `id` (next number in sequence).
 *  3. Fill in all the fields.
 *  4. Add any images to the /images/ folder.
 *  5. Save — the project will automatically appear on the
 *     Projects page AND get its own detail page.
 *     No new HTML file needed!
 * ============================================================
 */

const PROJECTS = [
  {
    id: 1,
    title: "Residential Complex",
    subtitle: "Premium plot community in the heart of Godagari",
    location: "Godagari, Rajshahi",
    status: "Ongoing",        // "Ongoing" | "Completed" | "Upcoming"
    category: "Residential",  // "Residential" | "Commercial" | "Mixed-Use"
    startDate: "January 2026",
    completionDate: "December 2026",
    area: "5,400 sqft",
    plots: "24 plots",
    price: "Starting ৳12 lakh",
    coverImage: "images/plot1.jpeg",
    images: [
      "images/plot1.jpeg",
      "images/plot2.jpg",
      "images/plot3.webp",
      "images/project1.jpg"
    ],
    description: `A premium residential plot community offering 24 individual plots in a planned, gated layout with wide access roads and utility connections. All plots are legally verified with clear title deeds and ready for immediate registration.`,
    highlights: [
      "24 individually verified plots",
      "Wide 20-ft internal roads",
      "Electricity & gas-line ready",
      "Walking distance to Godagari market",
      "All legal paperwork included"
    ],
    featured: true   // shows in the "Running Projects" preview on the homepage
  },

  {
    id: 2,
    title: "Commercial Tower Land",
    subtitle: "High-visibility commercial plot on the main bypass road",
    location: "Godagari Bypass, Rajshahi",
    status: "Ongoing",
    category: "Commercial",
    startDate: "February 2026",
    completionDate: "November 2026",
    area: "8,200 sqft",
    plots: "6 plots",
    price: "Starting ৳28 lakh",
    coverImage: "images/plot2.jpg",
    images: [
      "images/plot2.jpg",
      "images/project2.jpg"
    ],
    description: `Prime commercial land parcels positioned along the Godagari bypass — ideal for retail outlets, showrooms, or multi-storey office buildings. High traffic visibility with easy access to the national highway.`,
    highlights: [
      "Main road frontage (50 ft)",
      "Suitable for 8-storey structures",
      "Rapid appreciation zone",
      "Near bank & government offices",
      "Title mutation already done"
    ],
    featured: true
  },

  {
    id: 3,
    title: "Riverside Office Block",
    subtitle: "Scenic riverfront plots for corporate & office use",
    location: "Padma Riverfront, Godagari",
    status: "Ongoing",
    category: "Commercial",
    startDate: "March 2026",
    completionDate: "March 2027",
    area: "6,800 sqft",
    plots: "10 plots",
    price: "Starting ৳18 lakh",
    coverImage: "images/plot3.webp",
    images: [
      "images/plot3.webp",
      "images/project3.jpg"
    ],
    description: `Exclusive riverfront office plots with panoramic Padma River views. The serene environment and easy accessibility make these plots the perfect choice for corporate headquarters, resorts, or co-working spaces.`,
    highlights: [
      "Padma River view",
      "Corporate zone classification",
      "Utility infrastructure in place",
      "RAJUK-approved layout",
      "Flexible plot sizes available"
    ],
    featured: true
  },

  {
    id: 4,
    title: "Green Valley Residential",
    subtitle: "Eco-friendly residential plots with landscape planning",
    location: "Paba, Rajshahi",
    status: "Upcoming",
    category: "Residential",
    startDate: "June 2026",
    completionDate: "June 2027",
    area: "12,000 sqft",
    plots: "36 plots",
    price: "Starting ৳9 lakh",
    coverImage: "images/project4.jpg",
    images: [
      "images/project4.jpg",
      "images/plot1.jpeg"
    ],
    description: `An upcoming eco-conscious residential plot scheme with planned green belts, community parks, and tree-lined internal roads. Designed for families seeking a quiet, nature-connected lifestyle within easy reach of Rajshahi city.`,
    highlights: [
      "36 plots in a master-planned layout",
      "15% green belt allocation",
      "Community park & playground",
      "Drainage & sewage system pre-installed",
      "Pre-booking discount available"
    ],
    featured: false
  }
];
