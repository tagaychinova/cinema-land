import { action, computed, makeObservable, observable } from 'mobx';

import { Option } from '../../types';

class GenreFilter {
    constructor() {
        makeObservable(this, {
            options: observable,
            selectedOptions: computed,
            setSelectedOptions: action,
        });
    }

    options: Option[] = [];

    initOptions = (options: Option[]) => {
        this.options = options.map((option) => ({
            id: option.id,
            name: option.name,
            isSelected: false,
        }));
    };

    setSelectedOptions = (newSelectedOptionIds: number[]) => {
        this.options.forEach((option) => {
            option.isSelected = newSelectedOptionIds.indexOf(option.id) > -1;
        });
    };

    get selectedOptions() {
        return this.options.filter((option) => option.isSelected);
    }
}

export const genreFilter = new GenreFilter();
