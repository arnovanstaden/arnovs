import Head from 'next/head';
import Fade from 'react-reveal/Fade';


// Components
import Footer from "../Footer/Footer";

// Styles
import styles from "./layout.module.scss";

export default function Layout({
    children,
    head,
    noFooter
}: {
    children: React.ReactNode
    head: {
        title: string,
        description: string,
        canonical?: string,
        robots?: boolean
    }
    noFooter?: boolean
}) {
    const date = new Date();
    const currentYear = date.getFullYear();

    return (
        <>
            <Head>
                <title>{head.title}</title>
                <link rel="icon" type="image/png" href="/images/logos/favicon-dark.png" />
                <meta name="description" content={head.description} />
                <meta name="robots" content={head.robots === false ? "noindex, nofollow" : "index, follow"} />
                {head.canonical ? <link rel="canonical" href={`https://arnovs.dev${head.canonical}`} /> : null}


                <meta name="author" content="Arno van Staden" />
                <meta name="copyright" content={`Arno van Staden © ${currentYear}`} />
                <meta name="theme-color" content="#151618" />

                {/* Open Graph */}
                <meta property="og:site_name" content="Arno van Staden" />
                <meta property="og:title" content={head.title} />
                <meta property="og:description" content={head.description} />
                <meta property="og:type" content="Website" />
                {head.canonical ? <meta property="og:url" content={`https://arnovs.dev${head.canonical}`} /> : null}
                <meta property="og:image" name="image" content="https://arnovs.dev/social.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="500" />
                <meta property="og:image:height" content="500" />
                <meta property="og:image:alt" content="Arno van Staden Logo" />
            </Head>
            <Fade duration={750}>
                {children}
            </Fade>
            {noFooter ? null : <Footer />}
        </>
    )
}


