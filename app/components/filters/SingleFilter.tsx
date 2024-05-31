'use client';

import { useState } from 'react';

import CheckIcon from '@mui/icons-material/Check';
import { ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent } from '@mui/material';

type Props = {
    title: string;
    resetLabel: string;
    options: string[];
};

export default function SingleFilter({ title, resetLabel, options }: Props) {
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
            displayEmpty
            value={selectedOptions}
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={() => (selectedOptions.length > 0 ? selectedOptions[0] : title)}
        >
            <MenuItem value={resetLabel}>
                <ListItemText primary={resetLabel} />
                {!selectedOptions.length && <CheckIcon />}
            </MenuItem>
            {options.map((option) => (
                <MenuItem key={option} value={option}>
                    <ListItemText primary={option} />
                    {selectedOptions.indexOf(option) > -1 && <CheckIcon />}
                </MenuItem>
            ))}
        </Select>
    );
}
