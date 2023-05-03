import React from 'react';
const styles = {
    error: {
        // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52
        fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        height: '100vh',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    desc: {
        display: 'inline-block'
    },
    h1: {
        display: 'inline-block',
        margin: '0 20px 0 0',
        padding: '0 23px 0 0',
        fontSize: 24,
        fontWeight: 500,
        verticalAlign: 'top',
        lineHeight: '49px'
    },
    h2: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: '49px',
        margin: 0
    }
};
export function NotFound() {
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("title", null, "404: This page could not be found."), /*#__PURE__*/ React.createElement("div", {
        style: styles.error
    }, /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("style", {
        dangerouslySetInnerHTML: {
            /* Minified CSS from
                body { margin: 0; color: #000; background: #fff; }
                .next-error-h1 {
                  border-right: 1px solid rgba(0, 0, 0, .3);
                }

                @media (prefers-color-scheme: dark) {
                  body { color: #fff; background: #000; }
                  .next-error-h1 {
                    border-right: 1px solid rgba(255, 255, 255, .3);
                  }
                }
              */ __html: `body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}`
        }
    }), /*#__PURE__*/ React.createElement("h1", {
        className: "next-error-h1",
        style: styles.h1
    }, "404"), /*#__PURE__*/ React.createElement("div", {
        style: styles.desc
    }, /*#__PURE__*/ React.createElement("h2", {
        style: styles.h2
    }, "This page could not be found.")))));
}

//# sourceMappingURL=error.js.map