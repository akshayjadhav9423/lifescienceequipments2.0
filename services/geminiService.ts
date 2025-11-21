import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from '../constants';

// Initialize the Gemini API client
// Note: In a real production app, these calls should ideally go through a backend proxy
// to hide the API key, but for this demo, we use the env variable directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are a knowledgeable and helpful sales assistant for "Lifescience Equipments", a leading dealer of laboratory equipment, chemicals, and glassware.
Your goal is to help customers find products from our catalog, explain chemical properties, or suggest equipment for specific experiments.

Key Information about Lifescience Equipments:
- Locations: Mumbai, Delhi, Bangalore, Hyderabad.
- Brands: Borosil, Merck, Sigma-Aldrich, Thermo Fisher, etc.
- Categories: Glassware, Chemicals, Instruments, Plasticware.

When suggesting products, try to match the user's request to these categories.
If a user asks about a specific chemical reaction or lab setup, provide brief technical advice and suggest relevant equipment we might sell (e.g., "For this titration, you'll need a burette and an Erlenmeyer flask").
Keep answers concise and professional.
`;

export const sendMessageToGemini = async (message: string, history: { role: string, parts: { text: string }[] }[]) => {
  try {
    // Create context from a subset of products to "ground" the AI slightly (simulated RAG)
    // In a real app, we'd use a vector database. Here we just inject a summary of top products.
    const catalogPreview = PRODUCTS.slice(0, 20).map(p => `${p.name} (${p.category})`).join(", ");
    
    const contextMessage = `[Context: We stock items like ${catalogPreview} and hundreds more.] ${message}`;

    const model = 'gemini-2.5-flash'; 
    
    // We use a stateless generateContent for simplicity in this demo structure, 
    // but we pass previous messages to simulate chat history if we were building the full history object manually.
    // Ideally, use chat.sendMessage for maintained history.
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const result = await chat.sendMessage({ message: contextMessage });
    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm having trouble connecting to our product database right now. Please try again later or contact our sales team directly.";
  }
};