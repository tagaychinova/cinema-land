import { dir } from 'i18next';
import type { Metadata } from 'next';

import { languages } from '../i18n/settings';

export const metadata: Metadata = {
    title: 'Cinema Land',
    description: 'New generation video portal',
};

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
    children,
    params: { lng },
}: Readonly<{
    children: React.ReactNode;
    params: {
        lng: string;
    };
}>) {
    return (
        <html lang={lng} dir={dir(lng)}>
            <body>{children}</body>
        </html>
    );
}
