import {create} from 'zustand';
console.log('Zustand create:', create);

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => set({ selectedConversation}),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
