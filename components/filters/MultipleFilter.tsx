'use client';

import { useState } from 'react';

import { Checkbox, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent } from '@mui/material';

type Props = {
    title: string;
    resetLabel: string;
    options: string[];
};

export default function MultipleFilter({ title, resetLabel, options }: Props) {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof selectedOptions>) => {
        const {
            target: { value },
        } = event;

        const newSelectedOptions = typeof value === 'string' ? value.split(',') : value;

        if (newSelectedOptions.indexOf(resetLabel) > -1) {
            setSelectedOptions([]);
            return;
        }

        setSelectedOptions(newSelectedOptions);
    };

    return (
        <Select
            multiple
            displayEmpty
            value={selectedOptions}
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={() => (selectedOptions.length > 0 ? `${title} (${selectedOptions.length})` : title)}
        >
            <MenuItem value={resetLabel}>
                <Checkbox checked={!selectedOptions.length} />
                <ListItemText primary={resetLabel} />
            </MenuItem>
            {options.map((option) => (
                <MenuItem key={option} value={option}>
                    <Checkbox checked={selectedOptions.indexOf(option) > -1} />
                    <ListItemText primary={option} />
                </MenuItem>
            ))}
        </Select>
    );
}
