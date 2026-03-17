import React from 'react'

const config = {
    logo: (
        <span style={{ fontWeight: 900, fontSize: '1.3rem', letterSpacing: '-0.02em' }}>
            Learn With <span style={{ color: '#3b82f6' }}>Ben</span>
        </span>
    ),
    project: {
        link: 'https://github.com/shuding/nextra-docs-template', // Your GitHub link
    },
    chat: {
        link: 'https://discord.com', // Your Discord link
    },
    docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',

    // 1. Hides the "Question? Give us feedback" link
    feedback: {
        content: null,
    },

    // 2. Hides the "Edit this page" link
    editLink: {
        text: null,
    },

    footer: {
        text: `Learn With Ben © ${new Date().getFullYear()}`,
    },
}

export default config