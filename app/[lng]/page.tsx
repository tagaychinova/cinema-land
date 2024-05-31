import { Filter } from '@/app/components';
import Header from '@/app/components/header/Header';

import { useTranslation } from '../i18n';
import Filters from '../ui/dashboard/filters/Filters';

type Props = {
    params: {
        lng: string;
    };
};

export default async function Home({ params: { lng } }: Props) {
    const { t } = await useTranslation(lng);

    return (
        <main>
            <Header lng={lng} />
            <Filters lng={lng} />
            {/*             <Filter.Multiple
                title={t('video-filter.year-of-issue')}
                resetLabel="Все года"
                options={['до 1990', '2000 - 2010']}
            /> */}
            <Filter.Single
                title={t('video-filter.all-ages')}
                resetLabel="Все возраста"
                options={['до 12', 'до 16', 'до 18', '18+']}
            />
        </main>
    );
}
