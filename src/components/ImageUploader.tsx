
import React, { useState } from 'react';
import { Upload, Camera, X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface ImageUploaderProps {
  onImageSelect: (file: File) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageSelect }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length) {
      processFile(files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const processFile = (file: File) => {
    // Check if the file is an image
    if (!file.type.match('image.*')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (JPEG, PNG, etc.)",
        variant: "destructive"
      });
      return;
    }

    // Create a preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    // Simulate processing/uploading
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onImageSelect(file);
    }, 1500);
  };

  const clearImage = () => {
    setPreviewImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="w-full">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
        data-testid="file-input"
      />
      
      {!previewImage ? (
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
            isDragging ? 'border-primary bg-primary/5' : 'border-muted-foreground/25 hover:border-muted-foreground/50'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={triggerFileInput}
        >
          <div className="flex flex-col items-center justify-center py-8">
            <div className="h-14 w-14 rounded-full bg-muted flex items-center justify-center mb-4">
              <Upload className="h-7 w-7 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-2">Upload a Rock Image</h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-md">
              Drag and drop an image file here, or click to select a file.
              For best results, use a well-lit photo with the rock as the main subject.
            </p>
            <div className="flex gap-4">
              <Button onClick={(e) => { e.stopPropagation(); triggerFileInput(); }} variant="default" className="gap-2">
                <Upload className="h-4 w-4" /> Browse Files
              </Button>
              <Button onClick={(e) => { e.stopPropagation(); }} variant="outline" className="gap-2">
                <Camera className="h-4 w-4" /> Take Photo
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative rounded-lg overflow-hidden bg-muted/20">
          {isLoading && (
            <div className="absolute inset-0 bg-background/80 flex items-center justify-center z-10">
              <div className="flex flex-col items-center gap-2">
                <Loader2 className="h-8 w-8 text-primary animate-spin" />
                <p className="text-sm font-medium">Processing image...</p>
              </div>
            </div>
          )}
          <img 
            src={previewImage} 
            alt="Uploaded rock" 
            className="w-full h-auto max-h-[400px] object-contain"
          />
          <Button 
            variant="destructive" 
            size="icon" 
            className="absolute top-2 right-2"
            onClick={clearImage}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
