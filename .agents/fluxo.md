# Fluxo de desenvolvimento e validação

1. Inspecione a estrutura e os padrões existentes antes de editar.
2. Consulte o Figma para decisões visuais e responsividade quando a tarefa envolver UI.
3. Separe markup, props, helpers, animações e conteúdo conforme a convenção do projeto.
4. Teste estados relevantes em mobile e desktop, incluindo menu, hover, foco e redução de movimento quando houver animações.
5. Rode `npm run lint` e `npm run build`; revise o diff para garantir que a mudança ficou restrita ao escopo pedido.

Não altere configurações, dependências, assets ou estrutura de pastas sem relação com a tarefa. Mudanças de produto, conteúdo, identidade visual ou instalação do GSAP são decisões explícitas e não devem ser presumidas.
