import { create } from "zustand";

interface useChangeThemeState {
  isChangeTheme: boolean;
  changeThemeDark: () => void;
  changeThemeLight: () => void;
}

export const useChangeThemeController = create<useChangeThemeState>()(
  (set) => ({
    isChangeTheme: false,
    changeThemeDark: () => set({ isChangeTheme: false }),
    changeThemeLight: () => set({ isChangeTheme: true }),
  })
);
