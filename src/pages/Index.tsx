
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Clipboard, 
  ArrowRight, 
  Home, 
  Construction, 
  Droplets, 
  Package, 
  Bath, 
  Sofa, 
  Warehouse,
  Hammer
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  // Define report type cards
  const reportCards = [
    {
      title: "Exterior Damage",
      description: "Report damage to roofing, siding, windows, and other exterior elements",
      icon: <Construction className="h-6 w-6 text-teal-500" />,
      image: "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?q=80&w=600&auto=format&fit=crop",
      type: "exterior"
    },
    {
      title: "Interior Damage",
      description: "Report damage to walls, floors, ceilings, and other interior elements",
      icon: <Sofa className="h-6 w-6 text-teal-500" />,
      image: "https://images.unsplash.com/photo-1558211583-d26f610c1eb1?q=80&w=600&auto=format&fit=crop",
      type: "interior"
    },
    {
      title: "Contents Cleaning",
      description: "Inventory and document items requiring cleaning or replacement",
      icon: <Home className="h-6 w-6 text-teal-500" />,
      image: "https://images.unsplash.com/photo-1626863905121-3b0c0ed7b8c4?q=80&w=600&auto=format&fit=crop",
      type: "contents"
    },
    {
      title: "Kitchen & Bath Add-On",
      description: "Specialized damage assessment for kitchens, bathrooms and laundry",
      icon: <Bath className="h-6 w-6 text-teal-500" />,
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop",
      type: "add-on"
    },
    {
      title: "Packout Worksheet",
      description: "Document items that need to be packed and moved during restoration",
      icon: <Package className="h-6 w-6 text-teal-500" />,
      image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=600&auto=format&fit=crop",
      type: "packout"
    },
    {
      title: "Structural Cleaning",
      description: "Assessment of structural elements requiring cleaning",
      icon: <Hammer className="h-6 w-6 text-teal-500" />,
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600&auto=format&fit=crop",
      type: "structural"
    },
    {
      title: "Water Mitigation",
      description: "Document water damage and required mitigation steps",
      icon: <Droplets className="h-6 w-6 text-teal-500" />,
      image: "https://images.unsplash.com/photo-1525358180237-7399f908a1d6?q=80&w=600&auto=format&fit=crop",
      type: "water"
    }
  ];

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <section className="text-center space-y-4 fade-in">
        <h1 className="text-4xl font-bold tracking-tight">Damage Reporting System</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A streamlined solution for documenting and submitting property damage reports.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {reportCards.map((card, index) => (
          <Card 
            key={card.type}
            className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow slide-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <CardHeader className="flex flex-row items-center gap-2">
              <div className="bg-teal-50 p-2 rounded-full">
                {card.icon}
              </div>
              <div>
                <CardTitle className="text-lg">{card.title}</CardTitle>
                <CardDescription className="text-xs line-clamp-1">
                  {card.description}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
                <img 
                  src={card.image}
                  alt={card.title} 
                  className="h-full w-full object-cover rounded-md transition-transform hover:scale-105 duration-300"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Link to={`/reports?type=${card.type}`} className="w-full">
                <Button className="w-full" variant="outline">
                  <span>Create Report</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <section className="mt-16 bg-teal-50 p-6 rounded-lg shadow-sm slide-in delay-300">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Ready to file a damage report?</h2>
            <p className="text-gray-600 mt-2">
              Our streamlined process makes it easy to document and submit property damage claims
            </p>
          </div>
          <Link to="/reports">
            <Button className="px-6 bg-teal-600 hover:bg-teal-700" size="lg">
              <Clipboard className="mr-2 h-5 w-5" />
              Start New Report
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
