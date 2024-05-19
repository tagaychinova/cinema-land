import { Filter } from '@/components';
import Header from '@/components/header/Header';

import { useTranslation } from '../i18n';

type Props = {
    params: {
        lng: string;
    };
};

export default async function Home({ params: { lng } }: Props) {
    const { t } = await useTranslation(lng);

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
    ].sort();

    return (
        <main>
            <Header lng={lng} />
            <Filter.Multiple
                title={t('video-filter.genre.title')}
                resetLabel={t('video-filter.genre.reset-label')}
                options={options}
            />
            <Filter.Multiple
                title={t('video-filter.year-of-issue')}
                resetLabel="Все года"
                options={['до 1990', '2000 - 2010']}
            />
            <Filter.Single
                title={t('video-filter.all-ages')}
                resetLabel="Все возраста"
                options={['до 12', 'до 16', 'до 18', '18+']}
            />
        </main>
    );
}
