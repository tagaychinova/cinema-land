import '@testing-library/jest-dom';
import { fireEvent, render, within } from '@testing-library/react';

import MultipleFilter from '../MultipleFilter';

/*
describe('MultipleFilter component', () => {
    it('should be rendered', () => {
        const { getByText } = render(
            <MultipleFilter title="Год выпуска" resetLabel="Все года" options={['До 1990', '2000 - 2010']} />,
        );

        expect(getByText(/Год выпуска/i)).toBeInTheDocument();
    });

    it('should show all options when user opens the filter', () => {
        const { getByRole, getByText } = render(
            <MultipleFilter title="Год выпуска" resetLabel="Все года" options={['До 1990', '2000 - 2010']} />,
        );

        fireEvent.mouseDown(getByRole('combobox'));

        expect(getByText(/До 1990/i)).toBeInTheDocument();
        expect(getByText(/2000 - 2010/i)).toBeInTheDocument();
    });

    it('should show "reset the filter" option', () => {
        const { getByRole, getByText } = render(
            <MultipleFilter title="Год выпуска" resetLabel="Все года" options={['До 1990', '2000 - 2010']} />,
        );

        fireEvent.mouseDown(getByRole('combobox'));

        expect(getByText(/Все года/i)).toBeInTheDocument();
    });

    it('should show count of selected options in the title of the filter', () => {
        const { getByRole, getByText } = render(
            <MultipleFilter title="Год выпуска" resetLabel="Все года" options={['До 1990', '2000 - 2010']} />,
        );

        fireEvent.mouseDown(getByRole('combobox'));

        const listbox = within(getByRole('listbox'));

        fireEvent.click(listbox.getByText(/До 1990/i));
        fireEvent.click(listbox.getByText(/2000 - 2010/i));

        expect(getByText(/Год выпуска \(2\)/i)).toBeInTheDocument();
    });

    it('should reset selected otions when user clicks "reset the filter" option', () => {
        const { getByRole, getAllByRole, getByText } = render(
            <MultipleFilter title="Год выпуска" resetLabel="Все года" options={['До 1990', '2000 - 2010']} />,
        );

        fireEvent.mouseDown(getByRole('combobox'));

        const listbox = within(getByRole('listbox'));

        fireEvent.click(listbox.getByText(/До 1990/i));
        fireEvent.click(listbox.getByText(/2000 - 2010/i));

        let checkboxes = getAllByRole('checkbox', { checked: true });

        expect(checkboxes.length).toBe(2);

        fireEvent.click(listbox.getByText(/Все года/i));

        checkboxes = getAllByRole('checkbox', { checked: true });

        expect(checkboxes.length).toBe(1);
        expect(getByText(/Год выпуска/i)).toBeInTheDocument();
    });
});
*/
