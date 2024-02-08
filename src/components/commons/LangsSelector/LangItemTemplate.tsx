import { useTranslation } from "react-i18next";
import { ILangSlectorItem } from "../../../domain/interfaces/ILangSlectorItem";

export const LangItemTemplate = (item: ILangSlectorItem) => {

  const { t } = useTranslation();

  return (
    <div className="flex align-items-center justify-content-start sm:w-9rem px-2">
      <img
        alt={item.name_label}
        src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
        className={`mr-2 flag flag-${item.flag_code}`}
        style={{ width: "22px" }}
      />
      <div>{t(`NAVBAR.LANGUAGES.${item.name_label}`)}</div>
    </div>
  );
};
