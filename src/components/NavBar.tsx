import { Switch, theme } from "antd";
import { BsFillMoonFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";
import { useChangeThemeController } from "@/stores/useChangeThemeController";
import styled from "styled-components";
import Image from "next/image";

export const NavBar = () => {
  const { changeThemeDark, changeThemeLight, isChangeTheme } =
    useChangeThemeController();

  const { token } = theme.useToken();
  return (
    <NavBarContainer bg={token.colorBgBase}>
      <NavBarContent>
        <LogoContainer bg={token.colorTextBase}>
          <Image
            src="/images/logo.svg"
            alt="Logo com foto de Gustavo"
            width={30}
            height={30}
          />

          <h2 style={{ color: token.colorTextBase }}>Gustavo Lage</h2>
        </LogoContainer>
        <LinksContainer>
          <li style={{ color: token.colorTextBase }}>Home</li>
          <li style={{ color: token.colorTextBase }}>Sobre</li>
          <li style={{ color: token.colorTextBase }}>Projetos</li>
          <li style={{ color: token.colorTextBase }}>Contato</li>
          <li>
            <Switch
              onClick={isChangeTheme ? changeThemeDark : changeThemeLight}
              checkedChildren={<MdSunny />}
              unCheckedChildren={<BsFillMoonFill />}
              defaultChecked={isChangeTheme}
            />
          </li>
        </LinksContainer>
      </NavBarContent>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  background-color: ${(props) => props.bg};
  padding: 0 15%;
  filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.15));
`;

const NavBarContent = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  cursor: pointer;
  display: flex;
  padding: 5px 10px;
  align-items: center;
  gap: 5px;
  border: 2px solid ${(props) => props.bg};
  border-radius: 10px;
  -webkit-box-shadow: -4px 3px 0px -1px ${(props) => props.bg};
  -moz-box-shadow: -4px 3px 0px -1px ${(props) => props.bg};
  box-shadow: -4px 3px 0px -1px ${(props) => props.bg};

  h2 {
    font-size: 1rem;
  }
`;

const LinksContainer = styled.ul`
  list-style: none;
  display: flex;
  gap: 35px;

  li {
    cursor: pointer;
    font-weight: 500;
  }
`;
