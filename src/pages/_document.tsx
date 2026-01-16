// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          {/* Preconnect para acelerar o carregamento das fontes */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link 
            href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" 
            rel="stylesheet" 
          />

          {/* Verificação do Google Search Console */}
          <meta name="google-site-verification" content="o2OWszBRoFmqtrI9vL5ta-Nop0iU2hluhL2eo9J1glw" />

          {/* Google AdSense */}
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7353371878367127"
            crossOrigin="anonymous"
          />

          {/* Google Analytics */}
          {GA_ID && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </>
          )}
        </Head>
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;