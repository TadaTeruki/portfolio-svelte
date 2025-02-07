import { defineConfig, presetIcons, presetUno, presetWebFonts, transformerDirectives } from 'unocss'

export default defineConfig({
    presets: [
        presetUno(),
        presetIcons(),
        presetWebFonts({
            provider: 'google',
            fonts: {
                sans: [
                    {
                        name: 'Zen Kaku Gothic New',
                        weights: ['500', '700'],
                    }
                ],
                mono: [
                    {
                        name: 'Ubuntu Mono',
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