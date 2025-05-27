
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm here to help you with your damage report. I can guide you through the process, explain different report types, or answer any questions you have. How can I assist you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm your damage report assistant. I can help you understand different types of damage reports, guide you through the process, or answer questions about documentation. What would you like to know?";
    }
    
    if (message.includes('exterior') || message.includes('roof') || message.includes('siding')) {
      return "For exterior damage reports, you'll document damage to roofing, siding, windows, and other exterior elements. This includes assessing different roof types, slopes, and elevations. Would you like me to guide you to start an exterior damage report?";
    }
    
    if (message.includes('interior') || message.includes('inside') || message.includes('walls')) {
      return "Interior damage reports cover walls, floors, ceilings, and other interior elements. This helps assess damage to the inside of your property. Would you like to start an interior damage report?";
    }
    
    if (message.includes('water') || message.includes('flood') || message.includes('leak')) {
      return "Water mitigation reports are crucial for documenting water damage and required mitigation steps. This includes identifying the source, extent of damage, and necessary remediation actions. Should I help you create a water mitigation report?";
    }
    
    if (message.includes('contents') || message.includes('items') || message.includes('belongings')) {
      return "Contents cleaning reports help you inventory and document items requiring cleaning or replacement. This is important for insurance claims. Would you like guidance on documenting your damaged contents?";
    }
    
    if (message.includes('start') || message.includes('begin') || message.includes('create')) {
      return "Great! You can start by choosing the type of damage report you need. We have options for exterior damage, interior damage, contents cleaning, water mitigation, and more. What type of damage are you dealing with?";
    }
    
    if (message.includes('help') || message.includes('guide') || message.includes('how')) {
      return "I can help you with: \n• Understanding different report types\n• Guiding you through the reporting process\n• Explaining what information you'll need\n• Answering questions about damage documentation\n\nWhat specific help do you need?";
    }
    
    if (message.includes('photo') || message.includes('picture') || message.includes('image')) {
      return "Photos are crucial for damage reports! Make sure to take clear pictures from multiple angles, include close-ups of damage, and capture the overall affected area. Good documentation helps with insurance claims and repair estimates.";
    }
    
    if (message.includes('insurance') || message.includes('claim')) {
      return "These reports are designed to help with insurance claims. Make sure to include your claim number, date of loss, and deductible information. Detailed documentation and photos will strengthen your claim.";
    }
    
    return "I'm here to help with your damage reporting needs. You can ask me about different report types, the documentation process, or how to get started. What specific question do you have?";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getBotResponse(inputValue),
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full bg-teal-600 hover:bg-teal-700 shadow-lg"
          size="icon"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-50 w-80 h-96 slide-in">
          <Card className="h-full flex flex-col shadow-xl">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2 bg-teal-600 text-white rounded-t-lg">
              <Bot className="h-5 w-5 mr-2" />
              <div className="flex-1">
                <h3 className="font-semibold">Damage Report Assistant</h3>
                <p className="text-sm text-teal-100">Here to help you</p>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col p-0">
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 text-sm ${
                          message.isUser
                            ? 'bg-teal-600 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 rounded-lg p-3 text-sm text-gray-900">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div ref={messagesEndRef} />
              </ScrollArea>
              
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleSendMessage}
                    size="icon"
                    className="bg-teal-600 hover:bg-teal-700"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Chatbot;
