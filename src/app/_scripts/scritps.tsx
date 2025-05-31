// import Script from "next/script";

// NOTE: Plausible is not used in this project anymore.
//TODO: Use this file as a reference for adding scripts to the project.
// nonce }: { nonce: string }?
function Scripts() {
    return (
        <>
            {/* Analytics Script */}
            {/* <Script
                id="analytics"
                strategy="afterInteractive"
                nonce={nonce}
                data-domain="next-playground-swart-alpha.vercel.app"
                src="https://plausible.io/js/script.js"
                dangerouslySetInnerHTML={{
                    __html: `window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) };
                    window.plausible.q = window.plausible.q || [];
                    window.plausible.q.push(['trackPageview']);
          `
                }}
            /> */}
        </>
    )
}

export default Scripts;