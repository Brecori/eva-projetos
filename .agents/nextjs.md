# Next.js, Client Components e animações

- Esta versão do Next.js pode ter APIs, convenções e estrutura diferentes das versões conhecidas. Leia a documentação relevante em `node_modules/next/dist/docs/` antes de escrever código.
- `Navbar` é Client Component porque controla o menu e reage ao scroll. `HamburguerIcon` também é client-side por controlar seu estado visual.
- `HomeTemplate` e `Header` permanecem Server Components quando apenas compõem a página e não dependem de APIs do navegador.
- Para efeitos GSAP, use `gsap` com `@gsap/react` e `useGSAP`, registrando plugins quando necessário e usando `scope`/cleanup. Evite acessar `window` durante renderização ou SSR.
- GSAP é uma dependência planejada e ainda não instalada; não a adicione sem uma decisão explícita relacionada à tarefa.
