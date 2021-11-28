const prefix = '/nextjs-blog';

import new URL('/css/main.css', prefix)

export default function App({ Component, pageProps}) {
    return <Component {...pageProps} />
}