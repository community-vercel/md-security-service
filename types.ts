
export enum AppView {
  DASHBOARD = 'DASHBOARD',
  CHAT = 'CHAT',
  IMAGE_GEN = 'IMAGE_GEN',
  LIVE = 'LIVE',
  TTS = 'TTS'
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
  groundingUrls?: Array<{ title: string; uri: string }>;
}

export interface ImageResult {
  url: string;
  prompt: string;
  timestamp: number;
}

export interface TranscriptionItem {
  speaker: 'user' | 'model';
  text: string;
  timestamp: number;
}
