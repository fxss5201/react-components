import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'

const ReactCompilerConfig = { /* ... */ }

// https://vite.dev/config/
export default defineConfig({
  base: '/react-components/',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: [
          ["babel-plugin-react-compiler", ReactCompilerConfig],
        ],
      },
    }),
    mdx({
      include: /\.mdx$/,
      remarkPlugins: [remarkFrontmatter, remarkGfm, [remarkToc, { heading: 'TOC|目录' }]],
      rehypePlugins: [rehypeSlug],
      providerImportSource: '@mdx-js/react'
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          echarts: ['echarts'],
          '@uiw/react-codemirror': ['@uiw/react-codemirror'],
          'react-markdown': ['react-markdown'],
          '@mdx-js/react': ['@mdx-js/react'],
          'react-syntax-highlighter': ['react-syntax-highlighter'],
          'markdown-plugins': ['remark-frontmatter', 'remark-gfm', 'remark-toc', 'rehype-slug']
        }
      }
    }
  }
})
