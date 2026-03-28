const initialProducts = [
    {
        id: 1,
        title: "Ultimate Graphic Bundle",
        description: "Over 500+ premium graphics, vectors, and icons for your next big project.",
        price: "₹499",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
        badge: "Best Seller",
        type: "image",
        category: "Graphic Bundles",
        gridClass: "span-col-2 span-row-2"
    },
    {
        id: 2,
        title: "Modern UI Kit Pro",
        description: "A complete dashboard and landing page UI kit with 200+ components.",
        price: "₹799",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop",
        type: "image",
        category: "UI Kits",
        gridClass: "span-col-1 span-row-1"
    },
    {
        id: 3,
        title: "Social Media Templates",
        description: "100+ stunning, ready-to-use templates for Instagram, Twitter & LinkedIn.",
        price: "₹299",
        image: "https://images.unsplash.com/photo-1626908013351-800ddd734b8a?q=80&w=1000&auto=format&fit=crop",
        type: "image",
        category: "Social Media",
        gridClass: "span-col-1 span-row-2"
    },
    {
        id: 4,
        title: "Startup Presentation Deck",
        description: "Win over investors with this highly converting, professionally designed deck.",
        price: "₹399",
        image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1000&auto=format&fit=crop",
        type: "image",
        category: "Graphic Bundles",
        gridClass: "span-col-1 span-row-1"
    },
    {
        id: 5,
        title: "3D Icon Pack",
        description: "Beautiful, high-resolution 3D icons for modern interfaces.",
        price: "₹199",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        type: "image",
        category: "3D Items",
        gridClass: "span-col-2 span-row-1"
    },
    {
        id: 6,
        title: "App UI Interactions",
        description: "Premium Framer and After Effects source files for UI animations.",
        price: "₹599",
        videoUrl: "https://cdn.dribbble.com/uploads/39417/original/49dbf46eae15d227fc95a69cee31251e.mp4?1657824906",
        type: "video",
        category: "Video Templates",
        gridClass: "span-col-2 span-row-2"
    },
    {
        id: 7,
        title: "3D Animation Pack",
        description: "Ready-to-use 3D animation loop assets.",
        price: "₹899",
        videoUrl: "https://cdn.dribbble.com/uploads/39418/original/fcc62bc6d8dbfd9dc0cd05d6cb443217.mp4?1657824925",
        type: "video",
        category: "3D Items",
        gridClass: "span-col-2 span-row-1"
    },
    {
        id: 8,
        title: "Dashboard Interactions",
        description: "SaaS dashboard component interaction libraries.",
        price: "₹699",
        videoUrl: "https://cdn.dribbble.com/uploads/39421/original/23ebdaccff0884efbb17df474d2b2cd3.mp4?1657824986",
        type: "video",
        category: "UI Kits",
        gridClass: "span-col-2 span-row-1"
    }
];

// Generate 32 additional products seamlessly mimicking premium SaaS layouts
const categoriesList = ['UI Kits', 'Graphic Bundles', '3D Items', 'Video Templates', 'Social Media'];
const bgImages = [
    "https://images.unsplash.com/photo-1626908013351-800ddd734b8a?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000"
];

for(let i = 9; i <= 40; i++) {
    const randomCat = categoriesList[i % categoriesList.length];
    initialProducts.push({
        id: i,
        title: `Premium ${randomCat} Vol. ${i}`,
        description: `High-quality ${randomCat.toLowerCase()} asset designed for professionals. Fully customizable and layered.`,
        price: `₹${(Math.floor(Math.random() * 6) + 2) * 199}`,
        image: bgImages[i % bgImages.length],
        type: "image",
        category: randomCat
    });
}

export const productsData = initialProducts;
