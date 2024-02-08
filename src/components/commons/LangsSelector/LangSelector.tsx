import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { LangItemTemplate } from './LangItemTemplate';
import { LangSelectedItemTemplate } from './LangSelectedItemTemplate';
import Countries from '../../../assets/literals/countries.json';
import '../../../assets/styles/flags.css';
import { ILangSlectorItem } from '../../../domain/interfaces/ILangSlectorItem';
import { useTranslation } from 'react-i18next';

export const LangSelector = () => {

    const { i18n: { changeLanguage } } = useTranslation();
    const [selectedLang, setSelectedLang] = useState(Countries[0]);

    const handleLangChange = ({value}: {value: ILangSlectorItem}) => {
        setSelectedLang(value);
        changeLanguage(value.code.toLowerCase())
    }

  return (
    <Dropdown
      options={Countries}
      optionLabel="name_label"
      value={selectedLang}
      onChange={handleLangChange}
      itemTemplate={LangItemTemplate}
      valueTemplate={LangSelectedItemTemplate}
      className="sm:w-9rem"
    />
  );
};
