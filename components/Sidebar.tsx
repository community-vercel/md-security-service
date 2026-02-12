
// import React from 'react';
// import { AppView } from '../types';

// interface SidebarProps {
//   activeView: AppView;
//   onViewChange: (view: AppView) => void;
//   isOpen: boolean;
//   setIsOpen: (open: boolean) => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ activeView, onViewChange, isOpen, setIsOpen }) => {
//   const menuItems = [
//     { id: AppView.DASHBOARD, icon: 'fa-house', label: 'Dashboard' },
//     { id: AppView.CHAT, icon: 'fa-comment-dots', label: 'Smart Chat' },
//     { id: AppView.IMAGE_GEN, icon: 'fa-wand-magic-sparkles', label: 'Vision & Art' },
//     { id: AppView.LIVE, icon: 'fa-microphone-lines', label: 'Live Interaction' },
//     { id: AppView.TTS, icon: 'fa-volume-high', label: 'Voice Synthesis' },
//   ];

//   if (!isOpen) return null;

//   return (
//     <>
//       {/* Mobile Backdrop */}
//       <div 
//         className="fixed inset-0 bg-black/60 z-40 lg:hidden" 
//         onClick={() => setIsOpen(false)}
//       ></div>

//       <aside className="fixed lg:static inset-y-0 left-0 w-72 glass z-50 flex flex-col transition-transform duration-300 transform lg:translate-x-0">
//         <div className="p-6 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center