import { create } from "zustand";
import { persist } from "zustand/middleware";

interface useChangeThemeState {
  isChangeTheme: boolean;
  changeThemeDark: () => void;
  changeThemeLight: () => void;
}

export const useChangeThemeController = create(
  persist<useChangeThemeState>(
    (set) => ({
      isChangeTheme: false,
      changeThemeDark: () => set({ isChangeTheme: false }),
      changeThemeLight: () => set({ isChangeTheme: true }),
    }),
    { name: "@portifoliogustavodev:theme" }
  )
);
