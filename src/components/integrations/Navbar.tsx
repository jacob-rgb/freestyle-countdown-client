import { LangSelector } from "../commons/LangsSelector/LangSelector";
import { Button } from "primereact/button";
import { setSidebarVisible } from "../../state/slices/uxConfig.slice";
import { store } from "../../state/store";
import LogoSVG from "../../assets/icons/H-HOP.svg";
import style from "./Navbar.module.scss";

const { navbar, navbar__body, navbar__logo } = style;

export const Navbar = () => {

  const openMenu = () => store.dispatch(setSidebarVisible(true));

  return (
    <section className={navbar}>
      <div className={navbar__logo}>
        <img src={LogoSVG} alt="freestyle world" />
      </div>
      <div className={navbar__body}>
        <div className="navbar__body__langs">
          <LangSelector />
        </div>
        <div className="navbar__body__user_actions">
        <Button icon="pi pi-user" />
        </div>
        <Button icon="pi pi-bars" onClick={openMenu} />
      </div>
    </section>
  );
};
