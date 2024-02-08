import { Sidebar } from "primereact/sidebar";
import { useSelector } from "react-redux";
import { RootState, store } from "../../state/store";
import { setSidebarVisible } from "../../state/slices/uxConfig.slice";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import style from "./Sidebar.module.scss";
import LogoSVG from "../../assets/icons/H-HOP.svg";

const { sidebar_wrapper } = style;

export const SidebarCustom = () => {
  const {
    sidebar: { visible },
  } = useSelector((state: RootState) => state.uxConfig);

  const { t } = useTranslation();

  const closeSidebar = () => store.dispatch(setSidebarVisible(false));

  return (
    <>
      <Sidebar
        visible={visible}
        onHide={closeSidebar}
        className={sidebar_wrapper}
      >
        <img className="max-w-full mb-4" src={LogoSVG} alt="freestyle world" />
        <nav className="flex flex-column gap-2">
          <Link className="text-2xl font-semibold	" to={"/"}>
            {t("VIEWS.LANDING")}
          </Link>
          <Link className="text-2xl font-semibold	" to={"/count"}>
            {t("VIEWS.COUNT")}{" "}
          </Link>
          <Link className="text-2xl font-semibold	" to={"/products/2"}>
            {" "}
            {t("VIEWS.PRODUCTS_DETAIL")}{" "}
          </Link>
          <Link className="text-2xl font-semibold	" to={"/user"}>
            {" "}
            {t("VIEWS.USER_CONFIG")}{" "}
          </Link>
        </nav>
      </Sidebar>
    </>
  );
};
