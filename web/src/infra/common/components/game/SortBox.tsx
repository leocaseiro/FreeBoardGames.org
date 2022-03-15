import React, { HTMLAttributes, useState } from 'react';
import { useTranslation } from 'infra/i18n';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

interface Props {
    onSelectChange: (value: string) => void;
}

const SortBox = ({ onSelectChange, ...props }: Props & HTMLAttributes<HTMLDivElement>) => {
  const [query, setQuery] = useState('');
  const { t } = useTranslation('SortBox');

  const handleSortOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuery(e.target.value);
    onSelectChange(e.target.value);
  };

  return (
    <Select value={query} placeholder="Sort by" onChange={handleSortOnChange} style={{ width: '100%' }}>
        <MenuItem value="">{t('new')}</MenuItem>
        <MenuItem value="reverse">{t('old')}</MenuItem>
        <MenuItem value="name">{t('name')}</MenuItem>
        <MenuItem value="name-desc">{t('name_desc')}</MenuItem>
    </Select>
  );
}

export default SortBox;
