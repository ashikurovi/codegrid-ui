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
          border: '3px solid black',
          borderRadius: '0px',
          boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
          minHeight: '42px',
          backgroundColor: 'white',
          fontWeight: '900',
          textTransform: 'uppercase',
          color: 'black',
          '&:hover': {
            border: '3px solid black',
            boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
          }
        }),
        option: (base, state) => ({
          ...base,
          fontWeight: '900',
          textTransform: 'uppercase',
          backgroundColor: state.isFocused ? '#3b82f6' : 'white',
          color: state.isFocused ? 'white' : 'black',
          cursor: 'pointer',
        }),
        menu: (base) => ({
          ...base,
          border: '3px solid black',
          borderRadius: '0px',
          boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
          marginTop: '8px',
        })
      }}
      {...props}
    />
  );
}
