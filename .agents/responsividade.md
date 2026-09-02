# Responsividade e Tailwind

- As larguras de referência são `1920px` para desktop principal, `1024px` para `desktop1024` e `600px` para `mobile`.
- Os tokens `mobile` e `desktop1024` estão definidos em `src/app/globals.css` como breakpoints de largura mínima. As media queries tipográficas globais usam `max-width`.
- Ao usar media queries com limite máximo, prefira `max-desktop1024` e `max-mobile`, que usam os tokens do tema, em vez de valores literais em pixels.
- Preserve os tokens existentes `white`, `bronze`, `cream` e `dark-blue`, além das fontes `Cormorant` e `Montserrat`.
- Use primeiro a composição base para desktop e aplique ajustes com os breakpoints existentes somente quando a composição realmente mudar. Valide `1920px`, `1024px` e `600px`.
- Quando um componente tiver muitas classes Tailwind, divida-as em argumentos separados do `clsx`: um argumento para as classes base e um argumento para cada media query.
- Variantes como `before`, `after`, `hover`, `focus` e semelhantes também devem ficar em argumentos separados. Se uma variante aparecer dentro de uma media query, separe-a igualmente em um argumento próprio.
