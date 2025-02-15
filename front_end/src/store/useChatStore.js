import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";

export const useChatStore = create((set) => ({
    messages: [],
    users: [],
    selectedUser: null,
    isUsersLoading: false, // Corrigé : c'était `isUserLoading`
    isMessagesLoading: false,

    getUsers: async () => {
        set({ isUsersLoading: true }); // Correct

        try {
            const response = await axiosInstance.get("/messages/users"); // Ajout de `await`
            set({ users: response.data, isUsersLoading: false }); // On désactive `isUsersLoading` ici
        } catch (error) {
            toast.error(error.response?.data?.message || "Erreur lors du chargement des utilisateurs.");
            set({ isUsersLoading: false }); // Désactiver `isUsersLoading` en cas d'erreur
        }
    },

    getMessages: async (userId) => {
        set({ isMessagesLoading: true });

        try {
            const response = await axiosInstance.get(`/messages/${userId}`); // Ajout de `await`
            set({ messages: response.data });
        } catch (error) {
            toast.error(error.response?.data?.message || "Erreur lors du chargement des messages.");
        } finally {
            set({ isMessagesLoading: false });
        }
    },

    setSelectedUser: (selectedUser) => set({ selectedUser }), // Corrigé `setSlectedUser` -> `setSelectedUser`
}));
