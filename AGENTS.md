<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# EVA Projetos

Landing page institucional da EVA Projetos, empresa formada por duas arquitetas.

## Essencial

- Stack: Next.js `16.3.0`, React `19`, TypeScript, App Router e Tailwind CSS `4`.
- Use o alias `@/*` para imports a partir de `src/*`.
- A página inicial é `src/app/page.tsx`; o layout e metadados ficam em `src/app/layout.tsx`; tokens globais ficam em `src/app/globals.css`.
- Preserve a identidade visual e os componentes existentes do projeto ao implementar telas do [Figma](https://www.figma.com/design/O34FsaQ06cKuHHih8oxCFw/EVA?node-id=0-1&p=f&t=h2dac1cFXS5OzSgX-0).
- Execute `npm run lint` e `npm run build` após mudanças relevantes. Não declare validação concluída se algum comando falhar ou não puder ser executado.

## Tópicos condicionais

Consulte o arquivo correspondente quando a tarefa envolver o tópico indicado:

- UI, Figma ou assets: [`.agents/ui.md`](.agents/ui.md)
- Responsividade, Tailwind ou classes com `clsx`: [`.agents/responsividade.md`](.agents/responsividade.md)
- Arquitetura de componentes: [`.agents/arquitetura.md`](.agents/arquitetura.md)
- Next.js, Client Components ou GSAP: [`.agents/nextjs.md`](.agents/nextjs.md)
- Testes, validação ou fluxo de trabalho: [`.agents/fluxo.md`](.agents/fluxo.md)
