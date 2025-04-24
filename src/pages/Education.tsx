
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

const Education: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight font-display sm:text-4xl md:text-5xl">
              Learn About Rocks & Minerals
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              Discover the fascinating world of geology and mineralogy
            </p>
          </div>

          <Tabs defaultValue="rock-types" className="max-w-4xl mx-auto">
            <div className="mb-8 overflow-auto">
              <TabsList className="inline-flex w-full justify-start min-w-max">
                <TabsTrigger value="rock-types">Rock Types</TabsTrigger>
                <TabsTrigger value="formation">Rock Formation</TabsTrigger>
                <TabsTrigger value="properties">Physical Properties</TabsTrigger>
                <TabsTrigger value="classification">Classification</TabsTrigger>
                <TabsTrigger value="collection">Rock Collection</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="rock-types" className="space-y-8">
              <div className="prose max-w-none">
                <h2>The Three Main Rock Types</h2>
                <p>Rocks are classified into three main groups based on how they formed:</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">Igneous Rocks</h3>
                    <p className="mb-4">Form when molten magma or lava cools and solidifies.</p>
                    <div className="aspect-video rounded-md overflow-hidden bg-muted">
                      <img src="https://images.unsplash.com/photo-1589963046789-64c69b37f2ce" alt="Granite" className="w-full h-full object-cover" />
                    </div>
                    <p className="mt-4 text-sm">Examples: Granite, Basalt, Obsidian, Pumice</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">Sedimentary Rocks</h3>
                    <p className="mb-4">Form when sediments are compressed and cemented together.</p>
                    <div className="aspect-video rounded-md overflow-hidden bg-muted">
                      <img src="https://images.unsplash.com/photo-1565376392344-7c3aad72e0b1" alt="Sandstone" className="w-full h-full object-cover" />
                    </div>
                    <p className="mt-4 text-sm">Examples: Sandstone, Limestone, Shale, Conglomerate</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">Metamorphic Rocks</h3>
                    <p className="mb-4">Form when existing rocks are changed by heat, pressure, or chemical processes.</p>
                    <div className="aspect-video rounded-md overflow-hidden bg-muted">
                      <img src="https://images.unsplash.com/photo-1501949553935-e2a2f08c27d6" alt="Marble" className="w-full h-full object-cover" />
                    </div>
                    <p className="mt-4 text-sm">Examples: Marble, Slate, Schist, Gneiss</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="formation" className="space-y-8">
              <div className="prose max-w-none">
                <h2>Rock Formation Processes</h2>
                <p>Rocks are constantly being formed, destroyed, and reformed through the rock cycle.</p>
              </div>
              
              <div className="grid gap-8">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">The Rock Cycle</h3>
                    <p>
                      The rock cycle is the continuous process by which rocks are created, changed from one type to another, 
                      destroyed, and then formed again. This cycle is driven by Earth's internal heat, surface processes, and plate tectonics.
                    </p>
                    <div className="my-6 aspect-video rounded-md overflow-hidden bg-muted">
                      <img 
                        src="https://www.nps.gov/subjects/geology/images/RockCycle_1a.jpg" 
                        alt="Rock Cycle Diagram"
                        className="w-full h-full object-contain" 
                      />
                    </div>
                    <p>Key processes in the rock cycle include:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                      <li>Weathering and erosion</li>
                      <li>Sedimentation and lithification</li>
                      <li>Metamorphism</li>
                      <li>Melting and crystallization</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="properties" className="space-y-8">
              <div className="prose max-w-none">
                <h2>Physical Properties of Rocks and Minerals</h2>
                <p>Scientists use physical properties to identify and classify rocks and minerals.</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">Hardness (Mohs Scale)</h3>
                    <p>A measure of how resistant a mineral is to scratching.</p>
                    <ol className="list-decimal pl-5 space-y-1 mt-4">
                      <li>Talc (softest)</li>
                      <li>Gypsum</li>
                      <li>Calcite</li>
                      <li>Fluorite</li>
                      <li>Apatite</li>
                      <li>Feldspar</li>
                      <li>Quartz</li>
                      <li>Topaz</li>
                      <li>Corundum</li>
                      <li>Diamond (hardest)</li>
                    </ol>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">Luster</h3>
                    <p>How light reflects off a mineral's surface.</p>
                    <ul className="list-disc pl-5 space-y-1 mt-4">
                      <li>Metallic - reflects like metal</li>
                      <li>Vitreous - glassy appearance</li>
                      <li>Pearly - like a pearl</li>
                      <li>Silky - like silk fabric</li>
                      <li>Greasy - appears oily</li>
                      <li>Resinous - like resin or plastic</li>
                      <li>Adamantine - brilliant, diamond-like</li>
                      <li>Dull/Earthy - no shine, like clay</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">Streak</h3>
                    <p>The color of a mineral when powdered.</p>
                    <p className="mt-4">
                      A streak test is performed by rubbing the mineral against a piece of unglazed porcelain called a streak plate.
                      The color of the resulting powder streak can be different from the color of the mineral itself.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">Cleavage & Fracture</h3>
                    <p>How a mineral breaks when struck.</p>
                    <ul className="list-disc pl-5 space-y-1 mt-4">
                      <li><strong>Cleavage:</strong> Breaks along smooth, flat surfaces</li>
                      <li><strong>Fracture:</strong> Breaks with irregular surfaces</li>
                    </ul>
                    <p className="mt-2">Common fracture types include conchoidal (curved), fibrous, hackly (jagged), and irregular.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="classification" className="space-y-8">
              <div className="prose max-w-none">
                <h2>Mineral Classification</h2>
                <p>Minerals are classified based on their chemical composition.</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">Silicates</h3>
                    <p>The largest group, containing silicon and oxygen.</p>
                    <p className="mt-2">Examples: Quartz, Feldspar, Mica, Olivine</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">Carbonates</h3>
                    <p>Contain the carbonate ion (CO3).</p>
                    <p className="mt-2">Examples: Calcite, Dolomite, Aragonite</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">Oxides</h3>
                    <p>Compounds of metals with oxygen.</p>
                    <p className="mt-2">Examples: Hematite, Magnetite, Corundum</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">Sulfides</h3>
                    <p>Compounds with sulfur.</p>
                    <p className="mt-2">Examples: Pyrite, Galena, Chalcopyrite</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="collection" className="space-y-8">
              <div className="prose max-w-none">
                <h2>Rock Collection Tips</h2>
                <p>Start your own rock collection with these helpful guidelines.</p>
              </div>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">Best Practices for Rock Collection</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Always get permission before collecting rocks on private property</li>
                    <li>Follow park rules and regulations - collecting is prohibited in many national parks</li>
                    <li>Bring proper tools: rock hammer, chisels, safety goggles, gloves, and collection bags</li>
                    <li>Document the location where you found each specimen</li>
                    <li>Label your specimens with name, location, and date collected</li>
                    <li>Clean your rocks carefully with water and a soft brush</li>
                    <li>Store in labeled containers or display cases</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Education;
