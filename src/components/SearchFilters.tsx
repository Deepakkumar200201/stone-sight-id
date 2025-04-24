
import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface SearchFiltersProps {
  onFilterChange: (category: string, values: string[]) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ onFilterChange }) => {
  // State to track selected filters
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedHardness, setSelectedHardness] = useState<string[]>([]);
  const [selectedLuster, setSelectedLuster] = useState<string[]>([]);

  // Filter options
  const rockTypes = ["Igneous", "Sedimentary", "Metamorphic", "Mineral"];
  const colors = ["White", "Gray", "Black", "Brown", "Red", "Pink", "Orange", "Yellow", "Green", "Blue", "Purple"];
  const hardnessRanges = ["1-2", "3-4", "5-6", "7-8", "9-10"];
  const lusterTypes = ["Metallic", "Vitreous", "Pearly", "Silky", "Greasy", "Resinous", "Adamantine", "Dull", "Earthy"];

  const handleTypeChange = (type: string, checked: boolean) => {
    const updated = checked
      ? [...selectedTypes, type]
      : selectedTypes.filter(t => t !== type);
    
    setSelectedTypes(updated);
    onFilterChange('type', updated);
  };

  const handleColorChange = (color: string, checked: boolean) => {
    const updated = checked
      ? [...selectedColors, color]
      : selectedColors.filter(c => c !== color);
    
    setSelectedColors(updated);
    onFilterChange('color', updated);
  };

  const handleHardnessChange = (range: string, checked: boolean) => {
    const updated = checked
      ? [...selectedHardness, range]
      : selectedHardness.filter(h => h !== range);
    
    setSelectedHardness(updated);
    onFilterChange('hardness', updated);
  };

  const handleLusterChange = (luster: string, checked: boolean) => {
    const updated = checked
      ? [...selectedLuster, luster]
      : selectedLuster.filter(l => l !== luster);
    
    setSelectedLuster(updated);
    onFilterChange('luster', updated);
  };

  return (
    <Accordion type="multiple" defaultValue={["type"]} className="w-full">
      <AccordionItem value="type">
        <AccordionTrigger>Rock Type</AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-1 gap-2">
            {rockTypes.map(type => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox 
                  id={`type-${type}`} 
                  checked={selectedTypes.includes(type)}
                  onCheckedChange={(checked) => handleTypeChange(type, checked === true)}
                />
                <Label htmlFor={`type-${type}`}>{type}</Label>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="color">
        <AccordionTrigger>Color</AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-2 gap-2">
            {colors.map(color => (
              <div key={color} className="flex items-center space-x-2">
                <Checkbox 
                  id={`color-${color}`} 
                  checked={selectedColors.includes(color)}
                  onCheckedChange={(checked) => handleColorChange(color, checked === true)}
                />
                <Label htmlFor={`color-${color}`}>{color}</Label>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="hardness">
        <AccordionTrigger>Hardness (Mohs Scale)</AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-1 gap-2">
            {hardnessRanges.map(range => (
              <div key={range} className="flex items-center space-x-2">
                <Checkbox 
                  id={`hardness-${range}`} 
                  checked={selectedHardness.includes(range)}
                  onCheckedChange={(checked) => handleHardnessChange(range, checked === true)}
                />
                <Label htmlFor={`hardness-${range}`}>{range}</Label>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="luster">
        <AccordionTrigger>Luster</AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-1 gap-2">
            {lusterTypes.map(luster => (
              <div key={luster} className="flex items-center space-x-2">
                <Checkbox 
                  id={`luster-${luster}`} 
                  checked={selectedLuster.includes(luster)}
                  onCheckedChange={(checked) => handleLusterChange(luster, checked === true)}
                />
                <Label htmlFor={`luster-${luster}`}>{luster}</Label>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SearchFilters;
