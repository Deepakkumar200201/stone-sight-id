
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SearchFilters from '@/components/SearchFilters';
import RockGrid from '@/components/RockGrid';

// Mock data for demo purposes
const mockRocks = [
  {
    id: 1,
    name: 'Granite',
    scientificName: 'Granite',
    image: 'https://images.unsplash.com/photo-1589963046789-64c69b37f2ce',
    type: 'Igneous',
    color: 'Gray/Pink',
    hardness: '6-7',
    luster: 'Vitreous',
  },
  {
    id: 2,
    name: 'Amethyst',
    scientificName: 'Quartz (SiO2)',
    image: 'https://images.unsplash.com/photo-1618768204196-52392fe99039',
    type: 'Mineral',
    color: 'Purple',
    hardness: '7',
    luster: 'Vitreous',
  },
  {
    id: 3,
    name: 'Sandstone',
    scientificName: 'Sandstone',
    image: 'https://images.unsplash.com/photo-1565376392344-7c3aad72e0b1',
    type: 'Sedimentary',
    color: 'Tan/Brown',
    hardness: '4-6',
    luster: 'Dull',
  },
  {
    id: 4,
    name: 'Malachite',
    scientificName: 'Cu2CO3(OH)2',
    image: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375',
    type: 'Mineral',
    color: 'Green',
    hardness: '3.5-4',
    luster: 'Silky to Vitreous',
  },
  {
    id: 5,
    name: 'Obsidian',
    scientificName: 'Obsidian',
    image: 'https://images.unsplash.com/photo-1627131759134-6c0fff908882',
    type: 'Igneous',
    color: 'Black',
    hardness: '5-6',
    luster: 'Vitreous',
  },
  {
    id: 6,
    name: 'Marble',
    scientificName: 'Marble',
    image: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375',
    type: 'Metamorphic',
    color: 'White/Gray',
    hardness: '3-4',
    luster: 'Dull to Pearly',
  },
];

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    type: [],
    color: [],
    hardness: [],
    luster: [],
  });
  const [filteredRocks, setFilteredRocks] = useState(mockRocks);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Filter rocks based on search term and filters
    const filtered = mockRocks.filter(rock => {
      // Search term filtering
      if (
        searchTerm &&
        !rock.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !rock.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return false;
      }

      // Type filtering
      if (filters.type.length > 0 && !filters.type.includes(rock.type)) {
        return false;
      }

      // Color filtering - check if the rock's color contains any of the selected colors
      if (filters.color.length > 0 && !filters.color.some(color => rock.color.toLowerCase().includes(color.toLowerCase()))) {
        return false;
      }

      // Hardness filtering - simplified for demo
      if (filters.hardness.length > 0) {
        const hardnessMatch = filters.hardness.some(range => {
          const [min, max] = range.split('-').map(Number);
          const rockHardness = parseFloat(rock.hardness.split('-')[0]);
          return rockHardness >= min && rockHardness <= max;
        });
        if (!hardnessMatch) return false;
      }

      // Luster filtering
      if (filters.luster.length > 0 && !filters.luster.some(luster => rock.luster.toLowerCase().includes(luster.toLowerCase()))) {
        return false;
      }

      return true;
    });

    setFilteredRocks(filtered);
  };

  const updateFilters = (category: string, values: string[]) => {
    setFilters(prev => ({
      ...prev,
      [category]: values,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight font-display sm:text-4xl md:text-5xl">
              Rock & Mineral Database
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              Search through our comprehensive database of rocks and minerals
            </p>
          </div>

          <Tabs defaultValue="search" className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-2 mb-8">
              <TabsTrigger value="search">Search</TabsTrigger>
              <TabsTrigger value="browse">Browse by Category</TabsTrigger>
            </TabsList>
            
            <TabsContent value="search">
              <div className="grid md:grid-cols-[300px_1fr] gap-8">
                <Card>
                  <CardContent className="pt-6">
                    <form onSubmit={handleSearch}>
                      <div className="mb-6">
                        <Label htmlFor="search">Search</Label>
                        <Input
                          id="search"
                          type="text"
                          placeholder="Search by name..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      
                      <SearchFilters onFilterChange={updateFilters} />
                      
                      <Button type="submit" className="w-full mt-4">
                        Search
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <div>
                  <RockGrid rocks={filteredRocks} />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="browse">
              <div className="grid gap-6">
                <h2 className="text-2xl font-bold">Browse by Rock Type</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <Button variant="outline" className="h-24 text-lg" asChild>
                    <div>Igneous Rocks</div>
                  </Button>
                  <Button variant="outline" className="h-24 text-lg" asChild>
                    <div>Sedimentary Rocks</div>
                  </Button>
                  <Button variant="outline" className="h-24 text-lg" asChild>
                    <div>Metamorphic Rocks</div>
                  </Button>
                </div>
                
                <h2 className="text-2xl font-bold mt-8">Browse by Mineral Class</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  <Button variant="outline" className="h-16" asChild>
                    <div>Silicates</div>
                  </Button>
                  <Button variant="outline" className="h-16" asChild>
                    <div>Carbonates</div>
                  </Button>
                  <Button variant="outline" className="h-16" asChild>
                    <div>Oxides</div>
                  </Button>
                  <Button variant="outline" className="h-16" asChild>
                    <div>Sulfides</div>
                  </Button>
                  <Button variant="outline" className="h-16" asChild>
                    <div>Sulfates</div>
                  </Button>
                  <Button variant="outline" className="h-16" asChild>
                    <div>Halides</div>
                  </Button>
                  <Button variant="outline" className="h-16" asChild>
                    <div>Phosphates</div>
                  </Button>
                  <Button variant="outline" className="h-16" asChild>
                    <div>Native Elements</div>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
