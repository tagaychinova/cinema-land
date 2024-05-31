'use client';

import { LanguageContext } from '@/app/contexts';
import { genreFilter } from '@/app/stores/filters/genreFilter.store';

import { GenreFilter } from './GenreFilter';

type Props = {
    lng: string;
};

export default function Filters({ lng }: Props) {
    return (
        <LanguageContext.Provider value={lng}>
            <GenreFilter store={genreFilter} />
        </LanguageContext.Provider>
    );
}
