import React from 'react';
import Select, { Props as ReactSelectProps } from 'react-select';

export interface SelectOption {
  label: string;
  value: string | number;
}

interface SimpleSelectProps extends Omit<ReactSelectProps<SelectOption, false>, 'onChange' | 'value' | 'options'> {
  options: SelectOption[];
  value: string | number;
  onChange: (value: any) => void;
  className?: string;
}

export function SimpleSelect({ options, value, onChange, className = "", ...props }: SimpleSelectProps) {
  const selectedOption = options.find((opt) => opt.value === value) || null;

  return (
    <Select
      className={className}
      value={selectedOption}
      onChange={(selected: SelectOption | null) => {
        const val = selected ? selected.value : "";
        onChange({ target: { value: val } } as any);
      }}
      options={options}
      classNamePrefix="react-select"
      styles={{
        control: (base) => ({
          ...base,
          borderColor: '#d1d5db',
          boxShadow: 'none',
          '&:hover': {
            borderColor: '#9ca3af'
          }
        })
      }}
      {...props}
    />
  );
}
