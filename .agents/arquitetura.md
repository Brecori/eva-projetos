# Arquitetura de componentes

- Use Atomic Design: `atoms` para unidades pequenas, `molecules` para combinações simples, `organisms` para blocos completos e `templates` para composição estrutural.
- Novos componentes devem preferencialmente ficar em `src/components/atoms`, `src/components/molecules` ou `src/components/organisms`. Páginas compostas ficam em `src/templates`.
- Componentes existentes diretamente em `src/components` só devem ser migrados quando houver necessidade funcional.
- Mantenha responsabilidades e arquivos próximos: `index.tsx`, `props.ts`, `helpers.ts`, `animation.ts` e `const.ts(x)` quando necessários. Não crie arquivos vazios.
- Prefira Server Components. Use `"use client"` somente quando houver estado, efeitos, eventos de navegador ou animação.
- Mantenha lógica de negócio fora do JSX e textos estáticos em arquivos de constantes quando isso melhorar a organização.
