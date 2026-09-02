<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# EVA Projetos

Landing page institucional da EVA Projetos, empresa formada por duas arquitetas. A implementação deve traduzir o layout e a identidade visual definidos no [Figma do projeto](https://www.figma.com/design/O34FsaQ06cKuHHih8oxCFw/EVA?node-id=0-1&p=f&t=h2dac1cFXS5OzSgX-0).

## Stack e comandos

- Next.js `16.3.0`, React `19`, TypeScript e App Router.
- Tailwind CSS `4` integrado por `@tailwindcss/postcss`.
- `clsx` para composição condicional de classes.
- `lucide-react` para ícones; não criar SVGs de ícones manualmente quando houver equivalente na biblioteca.
- `next/font` para fontes carregadas pelo layout.
- GSAP é uma dependência planejada, ainda não instalada. Quando for introduzida, usar `gsap` com `@gsap/react` e `useGSAP`, respeitando o ciclo de vida do React e os limites Client Component do Next.js.

Comandos disponíveis:

```bash
npm run dev
npm run lint
npm run build
npm start
```

Execute ao menos `npm run lint` e `npm run build` após mudanças relevantes. Não declare uma validação como concluída se algum comando falhar ou não puder ser executado.

## Estrutura atual

```text
src/
├── app/                  # Entrypoints do App Router, layout e estilos globais
├── components/           # Componentes reutilizáveis da interface
│   ├── hamburguer-icon/
│   ├── header-button/
│   └── menu/
└── templates/            # Composição das páginas e seções da landing page
    ├── header/
    ├── navbar/
    └── index.tsx         # HomeTemplate
public/                   # Imagens e demais assets estáticos
```

O alias `@/*` aponta para `src/*`. Use imports pelo alias em vez de caminhos relativos longos. A página inicial é `src/app/page.tsx`; o layout global e os metadados ficam em `src/app/layout.tsx`; tokens e regras globais ficam em `src/app/globals.css`.

## Arquitetura de componentes

Usar Atomic Design como critério de composição:

- `atoms`: unidades pequenas e independentes, como ícones, textos, links e botões.
- `molecules`: combinações simples de átomos, como controles e grupos de ações.
- `organisms`: blocos completos da interface, como navbar, header e seções.
- `templates`: composição estrutural de uma página, sem concentrar regras de baixo nível dos componentes.

Ao criar componentes novos, prefira organizar as categorias em `src/components/atoms`, `src/components/molecules`, `src/components/organisms` e manter as páginas compostas em `src/templates`. Os componentes existentes em pastas diretamente sob `src/components` podem ser classificados ou migrados apenas quando houver necessidade; não faça uma migração estrutural sem motivo funcional.

Cada componente deve manter suas responsabilidades e arquivos próximos:

```text
component-name/
├── index.tsx       # markup, composição e classes Tailwind
├── props.ts        # tipos e interfaces das props
├── helpers.ts      # funções puras auxiliares, quando necessárias
├── animation.ts    # configuração GSAP, quando necessária
└── const.ts(x)     # textos, labels e valores estáticos do componente
```

Não crie arquivos vazios apenas para completar o modelo. Use `styles.module.css` somente quando a regra não for adequada ao Tailwind (por exemplo, keyframes complexos já usados no menu hamburger). Evite componentes monolíticos, lógica de negócio dentro do JSX e textos espalhados em vários arquivos.

## Padrões de implementação

- Prefira Server Components. Adicione `"use client"` somente quando houver estado, efeitos, eventos de navegador ou animação GSAP; mantenha o limite Client o mais próximo possível da interação.
- Para efeitos GSAP em componentes client, registrar plugins quando necessário, usar `useGSAP` com `scope`/cleanup e evitar acesso a `window` durante renderização ou SSR.
- Use `clsx` para classes condicionais; mantenha classes Tailwind legíveis e próximas do elemento que estilizam.
- Preserve os tokens existentes em `globals.css` (`white`, `bronze`, `cream`, `dark-blue`) e as fontes `Cormorant` e `Montserrat` antes de criar valores equivalentes.
- Use HTML semântico, navegação por teclado, estados acessíveis e `aria-*` somente quando agregarem informação. Todo controle interativo deve ter nome acessível e tipo explícito.
- Para links externos, use `target="_blank"` com `rel="noopener noreferrer"`. Para assets em `public`, referencie caminhos a partir de `/`.
- Mantenha textos em português do Brasil e preserve a hierarquia visual e tipográfica do Figma. Não substituir imagens, espaçamentos ou cores por aproximações sem necessidade.
- Antes de adicionar uma biblioteca, confirme se Next.js, React, Tailwind, `clsx` ou `lucide-react` já resolvem o caso.

## Fluxo de trabalho

1. Inspecione a estrutura e os padrões existentes antes de editar.
2. Consulte o Figma para decisões visuais e responsividade quando a tarefa envolver UI.
3. Separe markup, props, helpers, animações e conteúdo conforme a convenção acima.
4. Teste os estados relevantes em viewport mobile e desktop, incluindo menu, hover, foco e redução de movimento quando houver animações.
5. Rode `npm run lint` e `npm run build`; revise o diff para garantir que a mudança ficou restrita ao escopo pedido.

Não altere configurações, dependências, assets ou estrutura de pastas sem relação com a tarefa. Mudanças de produto, conteúdo, identidade visual ou instalação do GSAP devem ser tratadas como decisões explícitas, não presumidas durante uma implementação técnica.
