
import { GoogleGenAI, Chat } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are a polite, professional, and friendly travel assistant for "Sri Durga Travels", based in Madanapalle, Andhra Pradesh.
Your goal is to help users book travel services (Bus, Car, Tempo Traveller, Tour Packages).

Context:
- Location: Madanapalle, AP.
- Service Coverage: ALL OVER INDIA.
- Core expertise: Pilgrimage (Tirupati, Sabarimala, Arunachalam, Shirdi), Marriage transportation, Festival travel, Hill Station tours (Ooty, Munnar, Kodai), and Heritage trips.
- Key Pickup Points: Madanapalle, Bangalore Airport, Tirupati Station.

Conversation Guidelines:
1. Greet the user with "Namaste" or "Welcome to Sri Durga Travels".
2. If they want to book, politely collect: Name, Destination, Date, and Number of Passengers.
3. If they ask about vehicle types, mention our Luxury 40+ seater Orange Buses, Force Tempo Travellers, and Decorated Wedding Cars (Innova/Swift).
4. For pilgrimage queries (like Sabarimala), mention our experienced "Samy" drivers who know the routes perfectly.
5. Confirm details and then tell them: "Please click the WhatsApp or Call button on the screen to finalize with our booking manager."

Keep responses warm, concise, and formatted with bullet points for readability.
`;

let chatInstance: Chat | null = null;

export function getChatInstance() {
  if (!chatInstance) {
    chatInstance = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }
  return chatInstance;
}

export async function* getStreamingChatResponse(userInput: string) {
  try {
    const chat = getChatInstance();
    const result = await chat.sendMessageStream({ message: userInput });
    
    for await (const chunk of result) {
      yield chunk.text;
    }
  } catch (error) {
    console.error("Chat Error:", error);
    yield "I apologize, I'm having trouble connecting. Please call us at +91 94414 51026 for immediate booking.";
  }
}
