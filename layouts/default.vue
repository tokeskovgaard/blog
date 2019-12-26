<template>
    <div>
        <nav>
            <a href="/">Home</a>
        </nav>
        <nuxt/>
    </div>
</template>

<style>
    :root {
        --media-split-point: 1000px;
    }
    html {
        font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, 'Helvetica Neue', Arial, sans-serif;
        font-size: 16px;
        word-spacing: 1px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
    }

    nav {
        min-height: 3rem;
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, .05);
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
    }

    h1, .h1 { font-size: 2rem; }
    h2, .h2 { font-size: 3rem; margin-top: 1rem; margin-bottom: 0.5rem;}
    h3, .h3 { font-size: 2.25rem; }
    h4, .h4 { font-size: 1.875rem; }
    p{ font-size: 1rem; line-height: 2rem;}
</style>
