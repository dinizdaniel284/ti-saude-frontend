"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function GoogleAnalytics({ ga_id }: { ga_id: string }) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname && window.gtag) {
      window.gtag("config", ga_id, {
        page_path: pathname,
      });
    }
  }, [pathname, ga_id]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${ga_id}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ga_id}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}