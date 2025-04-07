export default decoveProject() = {
  id: "decove",
  title: "Decove - Local Services Marketplace",
  elevatorPitch:
    "Led development of a Flutter-based marketplace app connecting users with local services through map integration and secure payments",
  sections: [
    {
      title: "The Challenge",
      content: {
        problem:
          "Existing platforms lacked real-time service discovery, integrated payments, and location-based filtering - leading to fragmented user experiences.",
        goals: [
          "Create unified marketplace with live location tracking",
          "Implement in-app payments with PCI compliance",
          "Develop intelligent search with geo-fencing",
          "Achieve <2s loading time for service listings",
          "Support 50k+ concurrent users",
        ],
      },
    },
    {
      title: "My Role & Team Leadership",
      content: {
        role: "Technical Lead & Project Manager",
        contributions: [
          "Architected Flutter layered architecture (presentation > business logic > data)",
          "Coordinated 8-member cross-functional team (4 devs, 2 QA, 1 designer, 1 DevOps)",
          "Implemented CI/CD pipeline reducing deployment time by 40%",
          "Conducted bi-weekly code reviews maintaining 98% code quality",
          "Mentored junior developers in clean architecture patterns",
        ],
        metrics: {
          performance: "1.8s average API response time",
          reliability: "99.95% uptime in first 6 months",
          adoption: "4.7/5 Play Store rating (8k+ reviews)",
        },
      },
    },
    {
      title: "Core Features",
      content: {
        architecture: {
          frontend: "Flutter (Dart) + Bloc State Management",
          mapping: "Google Maps Platform + Geofencing",
          payments: "Stripe SDK with Custom UI Elements",
          search: "ElasticSearch + Location-based Ranking",
          backend: "Node.js + Firebase Firestore",
        },
        features: [
          {
            name: "Smart Map Integration",
            icon: "🗺",
            components: [
              "Real-time service provider tracking",
              "15km radius geo-fencing",
              "Cluster markers for dense areas",
              "Offline map caching",
            ],
            implementation: {
              tech: [
                "Google Maps SDK",
                "Geolocator Package",
                "Mapbox GL Native",
                "Quad-tree spatial partitioning",
              ],
              challenges: [
                "Battery optimization for continuous tracking",
                "Marker clustering performance",
              ],
            },
            metrics: {
              loadTime: "1.2s initial render",
              accuracy: "5m radius precision",
              efficiency: "40% memory reduction",
            },
          },
          {
            name: "Payment System",
            icon: "💳",
            components: [
              "Stripe Connect integration",
              "PCI-compliant tokenization",
              "Multi-currency support",
              "Instant payout system",
            ],
            implementation: {
              tech: [
                "Stripe SDK",
                "Firebase Cloud Functions",
                "Payment State Machine",
                "3D Secure Authentication",
              ],
              challenges: [
                "Handling payment disputes",
                "Cross-border transaction fees",
              ],
            },
            metrics: {
              successRate: "99.1%",
              processingTime: "2.3s avg",
              chargebacks: "<0.5%",
            },
          },
          {
            name: "Search Engine",
            icon: "🔍",
            components: [
              "Type-ahead suggestions",
              "Geo-fenced results",
              "Relevance scoring",
              "Search analytics",
            ],
            implementation: {
              tech: [
                "ElasticSearch",
                "Haversine Formula",
                "TF-IDF Ranking",
                "Search-as-a-Service",
              ],
              challenges: [
                "Real-time index updates",
                "Multilingual search support",
              ],
            },
            metrics: {
              latency: "720ms avg",
              accuracy: "92% relevance",
              conversions: "35% increase",
            },
          },
        ],
      },
    },
    {
      title: "Key Challenges & Solutions",
      content: {
        challenges: [
          {
            problem: "Map performance degradation with 500+ markers",
            solution:
              "Implemented marker clustering and quad-tree spatial partitioning",
            result: "60% FPS improvement on low-end devices",
          },
          {
            problem: "Payment dispute handling",
            solution: "Built escrow system with smart release conditions",
            result: "Reduced chargebacks by 75%",
          },
          {
            problem: "Search relevance across geo-zones",
            solution: "ElasticSearch custom scoring + Haversine formula",
            result: "35% increase in booking conversion",
          },
        ],
      },
    },
  ],
};
