import { create } from "zustand";

export const useThemeStore = create((set) => ({
    theme:localStorage.getItem('theme') || "dark", 
    setTheme : (theme)=> {
        document.documentElement.setAttribute("data-theme", theme);

        localStorage.setItem("theme", theme);
        set({theme})
    }
}));
