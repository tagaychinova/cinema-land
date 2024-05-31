'use client';

import { useContext, useEffect } from 'react';

import { observer } from 'mobx-react-lite';

import { Filter } from '@/app/components';
import { LanguageContext } from '@/app/contexts';
import { useTranslation } from '@/app/i18n/client';
import { genreFilter } from '@/app/stores/filters/genreFilter.store';

export const GenreFilter = observer(({ store }: { store: typeof genreFilter }) => {
    const { t } = useTranslation(useContext(LanguageContext));

    useEffect(() => {
        const options = [
            t('video-filter.genre.option.action-movie'),
            t('video-filter.genre.option.detective'),
            t('video-filter.genre.option.documentary'),
            t('video-filter.genre.option.drama'),
            t('video-filter.genre.option.story'),
            t('video-filter.genre.option.comedy'),
            t('video-filter.genre.option.melodrama'),
            t('video-filter.genre.option.music'),
            t('video-filter.genre.option.sport'),
            t('video-filter.genre.option.tv-show'),
            t('video-filter.genre.option.thriller'),
            t('video-filter.genre.option.fantastic'),
            t('video-filter.genre.option.fantasy'),
        ]
            .sort()
            .map((opt, index) => ({
                id: index,
                name: opt,
                isSelected: false,
            }));

        genreFilter.initOptions(options);
    }, [t]);

    return (
        <Filter.Multiple
            title={t('video-filter.genre.title')}
            resetLabel={t('video-filter.genre.reset-label')}
            options={store.options}
            selectedOptions={store.selectedOptions}
            setSelectedOptions={store.setSelectedOptions}
        />
    );
});
