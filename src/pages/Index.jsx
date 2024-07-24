import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const [selectedModel, setSelectedModel] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [modelResponse, setModelResponse] = useState('');

  // Placeholder for model options, to be replaced with actual data from OpenRouter
  const modelOptions = [
    { value: 'model1', label: 'Model 1' },
    { value: 'model2', label: 'Model 2' },
    { value: 'model3', label: 'Model 3' },
  ];

  const handleModelSelect = (value) => {
    setSelectedModel(value);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // TODO: Implement actual recording logic
  };

  const handleSendToModel = () => {
    // TODO: Implement sending text to OpenRouter model
    console.log('Sending to model:', userInput);
    // Placeholder response
    setModelResponse('This is a placeholder response from the model.');
  };

  const handlePlayResponse = () => {
    // TODO: Implement text-to-speech playback
    console.log('Playing response:', modelResponse);
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Voice-to-Voice Conversation App</h1>
      
      <div>
        <label htmlFor="model-select" className="block text-sm font-medium mb-2">Select Model</label>
        <Select onValueChange={handleModelSelect}>
          <SelectTrigger id="model-select">
            <SelectValue placeholder="Choose a model" />
          </SelectTrigger>
          <SelectContent>
            {modelOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Button onClick={toggleRecording} variant={isRecording ? "destructive" : "default"}>
          {isRecording ? "Stop Recording" : "Start Recording"}
        </Button>
      </div>

      <div>
        <label htmlFor="user-input" className="block text-sm font-medium mb-2">Your Speech</label>
        <Textarea
          id="user-input"
          placeholder="Your speech will appear here..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          rows={4}
        />
      </div>

      <div>
        <Button onClick={handleSendToModel}>Send to Model</Button>
      </div>

      <div>
        <label htmlFor="model-response" className="block text-sm font-medium mb-2">Model Response</label>
        <Textarea
          id="model-response"
          placeholder="Model response will appear here..."
          value={modelResponse}
          readOnly
          rows={4}
        />
      </div>

      <div>
        <Button onClick={handlePlayResponse} disabled={!modelResponse}>
          Play Response
        </Button>
      </div>
    </div>
  );
};

export default Index;