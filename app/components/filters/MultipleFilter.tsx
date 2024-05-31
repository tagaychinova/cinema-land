'use client';

import { Checkbox, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent } from '@mui/material';

import { Option } from '@/app/types';

type Props = {
    title: string;
    resetLabel: string;
    options: Option[];
    selectedOptions: Option[];

    setSelectedOptions(newSelectedOptionIds: number[]): void;
};

const resetOptionId = -1;

export default function MultipleFilter({ title, resetLabel, options, selectedOptions, setSelectedOptions }: Props) {
    const handleChange = (event: SelectChangeEvent<number[]>) => {
        const {
            target: { value },
        } = event;

        const newSelectedOptionIds = value as number[];

        if (
            newSelectedOptionIds.length > 0 &&
            newSelectedOptionIds[newSelectedOptionIds.length - 1] === resetOptionId
        ) {
            setSelectedOptions([]);
            return;
        }

        setSelectedOptions(newSelectedOptionIds.filter((id) => id !== resetOptionId));
    };

    return (
        <Select
            multiple
            displayEmpty
            value={selectedOptions.length === 0 ? [resetOptionId] : selectedOptions.map((opt) => opt.id)}
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={() => (selectedOptions.length > 0 ? `${title} (${selectedOptions.length})` : title)}
        >
            <MenuItem value={resetOptionId}>
                <Checkbox checked={!selectedOptions.length} />
                <ListItemText primary={resetLabel} />
            </MenuItem>
            {options.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                    <Checkbox checked={option.isSelected} />
                    <ListItemText primary={option.name} />
                </MenuItem>
            ))}
        </Select>
    );
}
