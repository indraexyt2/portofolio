import { create } from 'zustand';

const useLoadingStore = create((set) => ({
  isLoading: false, 
  isExiting: false,
  setIsLoading: (loading) => set({ isLoading: loading }), 
  setIsExiting: (exiting) => set({ isExiting: exiting }),
}));

export default useLoadingStore;
