const baseStyles = {
    p: {
        marginBottom: '1rem',
    },

    'ul': {
        marginBottom: '1rem',
        listStyleType: 'disc',
        paddingInlineStart: '25px',
    },

    'ul ul': {
        listStyleType: 'circle',
    },

    'ol ol, ol ul, ul ol, ul ul': {
        marginBottom: 0,
    },

    'ol': {
        marginBottom: '1rem',
        listStyleType: 'decimal',
        paddingInlineStart: '25px',
    },
}

module.exports = {
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',

            white: '#ffffff',
            black: '#000000',
        },

        textStyles: (theme) => ({
            // Should probably have these output as base styles as well.
            heading: {
                output: false,
                fontWeight: theme('fontWeight.bold'),
                lineHeight: theme('lineHeight.tight'),
            },
            h1: {
                extends: 'heading',
                fontSize: 'rfs(2.5rem)', // responsive font size.
            },
            h2: {
                extends: 'heading',
                fontSize: 'rfs(2rem)',
            },
            h3: {
                extends: 'heading',
                fontSize: 'rfs(1.75rem)',
            },
            h4: {
                extends: 'heading',
                fontSize: 'rfs(1.5rem)',
            },
            h5: {
                extends: 'heading',
                fontSize: 'rfs(1.25rem)',
            },
            h6: {
                extends: 'heading',
                fontSize: 'rfs(1rem)',
            },
            richText: {
                // TODO: refactor these into a base styles plugin.
                // That would make it easier for WordPress widgets to override
                // styles more easily without having to compete with specificity.
                ...baseStyles,
            },
        }),
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('tailwindcss-typography')({
            ellipsis: false,         // whether to generate ellipsis utilities
            hyphens: false,          // whether to generate hyphenation utilities
            kerning: false,          // whether to generate kerning utilities
            textUnset: false,        // whether to generate utilities to unset text properties
            componentPrefix: 'c-',   // the prefix to use for text style classes
        }),
    ]
}
