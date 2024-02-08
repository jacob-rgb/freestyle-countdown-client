import { useTranslation } from "react-i18next";
import { ILangSlectorItem } from "../../../domain/interfaces/ILangSlectorItem";

export const LangSelectedItemTemplate = (item: ILangSlectorItem, { placeholder = "Seleccionado" }) => {

    const { t } = useTranslation();

    if (item) {
        return (
            <div className="flex align-items-center px-2">
                <img 
                  alt={item.name_label} 
                  src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" 
                  className={`mr-2 flag flag-${item.flag_code}`} 
                  style={{ width: '18px' }} 
                />
                <div>{t(`NAVBAR.LANGUAGES.${item.name_label}`)}</div>
            </div>
        );
    }

    return <span>{placeholder}</span>;
}
