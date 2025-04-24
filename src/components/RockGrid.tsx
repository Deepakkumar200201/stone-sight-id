
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface Rock {
  id: number;
  name: string;
  scientificName: string;
  image: string;
  type: string;
  color: string;
  hardness: string;
  luster: string;
}

interface RockGridProps {
  rocks: Rock[];
}

const RockGrid: React.FC<RockGridProps> = ({ rocks }) => {
  if (rocks.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-xl font-medium">No rocks found</h3>
        <p className="text-muted-foreground mt-2">Try adjusting your search criteria</p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rocks.map(rock => (
          <Card key={rock.id} className="overflow-hidden">
            <div className="aspect-square overflow-hidden">
              <img
                src={rock.image}
                alt={rock.name}
                className="h-full w-full object-cover transition-all hover:scale-105"
              />
            </div>
            <CardContent className="pt-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">{rock.name}</h3>
                  <p className="text-sm text-muted-foreground italic">{rock.scientificName}</p>
                </div>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                  {rock.type}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
                <div>
                  <span className="font-medium">Color:</span> {rock.color}
                </div>
                <div>
                  <span className="font-medium">Hardness:</span> {rock.hardness}
                </div>
                <div>
                  <span className="font-medium">Luster:</span> {rock.luster}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link 
                to={`/rocks/${rock.id}`} 
                className="text-primary hover:underline text-sm w-full text-center"
              >
                View Details
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <p className="text-center text-muted-foreground mt-8">
        Showing {rocks.length} result{rocks.length !== 1 && 's'}
      </p>
    </div>
  );
};

export default RockGrid;
