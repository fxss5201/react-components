import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

const ReactCompilerConfig = { /* ... */ }

// https://vite.dev/config/
export default defineConfig({
  base: '/react-components/',
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
      remarkPlugins: [remarkFrontmatter, remarkGfm],
      rehypePlugins: [rehypeSlug],
      providerImportSource: '@mdx-js/react'
    }),
  ],
})
