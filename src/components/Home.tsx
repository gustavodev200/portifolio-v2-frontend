import { useChangeThemeController } from "@/stores/useChangeThemeController";
import { Button } from "antd";

export const Home = () => {
  const { isChangeTheme } = useChangeThemeController();
  return (
    <div
      style={{
        marginTop: "5rem",
        height: "calc(100vh - 80px)",
        background: "#666",
      }}
    >
      <h1>{isChangeTheme ? "Light" : "Dark"}</h1>
      <Button type="primary">Text</Button>
    </div>
  );
};
