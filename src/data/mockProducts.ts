
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Weights' | 'Machines' | 'Accessories';
  imageUrl: string;
  featured: boolean;
  inStock: boolean;
  specifications: {
    weight?: string;
    dimensions?: string;
    material?: string;
    color?: string;
    adjustable?: boolean;
  };
}

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Adjustable Dumbbell Set",
    description: "Versatile adjustable dumbbells that can replace multiple pairs of weights. Quick adjustment mechanism allows you to change weight with the turn of a dial.",
    price: 299.99,
    category: "Weights",
    imageUrl: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?q=80&w=1287&auto=format&fit=crop",
    featured: true,
    inStock: true,
    specifications: {
      weight: "5-52.5 lbs per dumbbell",
      dimensions: "16.9 x 8.3 x 9.5 inches",
      material: "Steel, rubber grip",
      color: "Black/Red",
      adjustable: true
    }
  },
  {
    id: "2",
    name: "Olympic Barbell",
    description: "Professional-grade Olympic barbell with knurled grip for better handling during heavy lifts. Perfectly balanced for various exercises.",
    price: 179.99,
    category: "Weights",
    imageUrl: "https://images.unsplash.com/photo-1581009137042-c552e485697a?q=80&w=1470&auto=format&fit=crop",
    featured: true,
    inStock: true,
    specifications: {
      weight: "45 lbs",
      dimensions: "7ft long, 28mm diameter",
      material: "Stainless steel",
      color: "Silver",
    }
  },
  {
    id: "3",
    name: "Weight Plate Set",
    description: "Premium rubber-coated weight plates with easy-grip design. Set includes pairs of 45, 35, 25, 10, and 5 lb plates.",
    price: 399.99,
    category: "Weights",
    imageUrl: "https://images.unsplash.com/photo-1638536531295-b3fcd2fb27aa?q=80&w=1287&auto=format&fit=crop",
    featured: false,
    inStock: true,
    specifications: {
      weight: "230 lbs total",
      material: "Cast iron with rubber coating",
      color: "Black",
    }
  },
  {
    id: "4",
    name: "Cable Crossover Machine",
    description: "Commercial grade cable machine for versatile upper and lower body workouts. Dual adjustable pulleys with smooth operation.",
    price: 1299.99,
    category: "Machines",
    imageUrl: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=1325&auto=format&fit=crop",
    featured: true,
    inStock: false,
    specifications: {
      dimensions: "86 x 130 x 68 inches",
      weight: "450 lbs",
      material: "Heavy-duty steel frame",
      color: "Black/Silver",
      adjustable: true
    }
  },
  {
    id: "5",
    name: "Treadmill Pro 2000",
    description: "Advanced treadmill with 15% incline, 3% decline, and speeds up to 12 mph. Features a 10-inch touchscreen with virtual training programs.",
    price: 1499.99,
    category: "Machines",
    imageUrl: "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?q=80&w=1471&auto=format&fit=crop",
    featured: true,
    inStock: true,
    specifications: {
      dimensions: "77.3 x 35.3 x 62.2 inches",
      weight: "300 lbs",
      material: "Steel frame, rubber belt",
      color: "Black/Silver",
    }
  },
  {
    id: "6",
    name: "Indoor Cycling Bike",
    description: "Studio-quality indoor cycling bike with magnetic resistance and belt drive system. Includes performance tracking and app connectivity.",
    price: 799.99,
    category: "Machines",
    imageUrl: "https://images.unsplash.com/photo-1591311630200-ffa9120a540f?q=80&w=1288&auto=format&fit=crop",
    featured: false,
    inStock: true,
    specifications: {
      dimensions: "48 x 23 x 46 inches",
      weight: "135 lbs",
      material: "Steel frame",
      color: "Black/Red",
      adjustable: true
    }
  },
  {
    id: "7",
    name: "Resistance Bands Set",
    description: "Complete set of 5 resistance bands of varying resistance levels. Perfect for strength training, physical therapy, or travel workouts.",
    price: 29.99,
    category: "Accessories",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop",
    featured: true,
    inStock: true,
    specifications: {
      weight: "Light to Extra Heavy resistance",
      material: "Natural latex",
      color: "Multi-colored",
    }
  },
  {
    id: "8",
    name: "Foam Roller",
    description: "High-density foam roller for muscle recovery and myofascial release. Textured surface provides targeted pressure for effective self-massage.",
    price: 34.99,
    category: "Accessories",
    imageUrl: "https://images.unsplash.com/photo-1616279969856-759f316a5ac1?q=80&w=1480&auto=format&fit=crop",
    featured: false,
    inStock: true,
    specifications: {
      dimensions: "13 x 5.5 inches",
      material: "High-density EVA foam",
      color: "Black/Blue"
    }
  },
  {
    id: "9",
    name: "Kettlebell Set",
    description: "Set of vinyl-coated kettlebells for swing exercises and functional training. Includes 10, 15, and 20 lb weights.",
    price: 89.99,
    category: "Weights",
    imageUrl: "https://images.unsplash.com/photo-1578763363228-6e8428de69b2?q=80&w=1289&auto=format&fit=crop",
    featured: false,
    inStock: true,
    specifications: {
      weight: "10, 15, 20 lbs",
      material: "Cast iron with vinyl coating",
      color: "Black",
    }
  },
  {
    id: "10",
    name: "Adjustable Workout Bench",
    description: "Versatile weight bench with multiple angle adjustments for flat, incline, and decline positions. Foldable design for easy storage.",
    price: 169.99,
    category: "Accessories",
    imageUrl: "https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?q=80&w=1558&auto=format&fit=crop",
    featured: true,
    inStock: true,
    specifications: {
      dimensions: "50 x 16 x 20 inches",
      weight: "45 lbs",
      material: "Steel frame with padded upholstery",
      color: "Black",
      adjustable: true
    }
  },
  {
    id: "11",
    name: "Power Rack with Lat Pulldown",
    description: "All-in-one power rack with integrated lat pulldown, dip station, and weight storage. Perfect centerpiece for a home gym.",
    price: 899.99,
    category: "Machines",
    imageUrl: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1375&auto=format&fit=crop",
    featured: false,
    inStock: true,
    specifications: {
      dimensions: "86 x 63 x 51 inches",
      weight: "380 lbs",
      material: "Heavy-duty steel",
      color: "Black",
      adjustable: true
    }
  },
  {
    id: "12",
    name: "Exercise Mat",
    description: "Extra thick, non-slip exercise mat for yoga, pilates, and floor workouts. Easy to clean and portable.",
    price: 39.99,
    category: "Accessories",
    imageUrl: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=1469&auto=format&fit=crop",
    featured: false,
    inStock: true,
    specifications: {
      dimensions: "72 x 24 x 0.5 inches",
      material: "NBR Foam",
      color: "Blue",
    }
  }
];
