import { defineConfig, presetUno, presetWebFonts, transformerDirectives } from 'unocss'

export default defineConfig({
    presets: [
        presetUno(),
        presetWebFonts({
            provider: 'google',
            fonts: {
                sans: [
                    {
                        name: 'Zen Kaku Gothic New',
                        weights: ['500', '700'],
                    }
                ]
            },
        }),
    ],
    transformers: [
        transformerDirectives(),
    ],
    theme: {
        colors: {
            linkColor: '#477',
            linkColorHover: '#6aa',
        },
    }
})