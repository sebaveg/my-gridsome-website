---
title: Introducción a Gridsome
path: /introduccion-a-gridsome
date: 2019-10-09
summary: Gridsome es un framework de Vue.js para construir sitios web modernos lo mas rápido posible y poder integrarlos con cualquier Headless CMS, APIs o archivos Markdown. Gridsome hace que crear sitios web espectaculares sea fácil y divertido para los desarrolladores sin necesidad de ser expertos.
tags: ['frontend', 'coding', 'vue']
---

![background](./images/blog_bg_1.jpg)

> Gridsome es un framework de Vue.js para construir sitios web modernos lo mas rápido posible y poder integrarlos con cualquier Headless CMS, APIs o archivos Markdown. Gridsome hace que crear sitios web espectaculares sea fácil y divertido para los desarrolladores sin necesidad de ser expertos.

### ¿Por qué Gridsome?

- **Desarrollo local con hot-reloading** - Ve los cambios mientras escribes el código en tiempo real.
- **Muchísimos plugins** - Gridsome tiene un ecosistema de plugins para cualquier trabajo.
- **Ruteo basado en archivos** - Cualquier `Archivo.Vue` dentro de `src/page` es automáticamente una ruta.
- **Capa de datos GraphQL:** Gestión de datos más simple con una capa de datos centralizada.
- **Vue.js para frontend** - Un framework super simple y accesible.
- **Generador de archivos estáticos** - Despliegue de forma segura a cualquier CDN o hosting con una web estática.

[Aprende mas sobre como funciona Gridsome](/docs/how-it-works)

```js
<template>
  <Layout>
    <div class="container-inner mx-auto my-16">
      <h1 class="text-4xl font-bold leading-tight">{{ $page.post.title }}</h1>
      <div class="text-xl text-gray-600 mb-8">{{ $page.post.date }}</div>
      <div class="markdown-body" v-html="$page.post.content" />
    </div>
  </Layout>
</template>
```


### Prerequisitos
Tu deberías tener un conocimiento básico de HTML, CSS, [Vue.js](https://vuejs.org) y como usar la [Terminal](https://www.linode.com/docs/tools-reference/tools/using-the-terminal/). Saber como funcionan los [componentes de Vue](https://vuejs.org/v2/guide/single-file-components.html) & [GraphQL](https://www.graphql.com/) te ayudarán mas, pero no es necesario. Gridsome te ayudará a aprender sombre ambos.

Gridsome require tener instalado **Node.js** y **npm** aunque recomiendan **Yarn**. En lo personal he comprobado que yarn funciona unos segundos mas rápido.

![background](./images/background.jpg)

### 1. Instala la herramienta Gridsome CLI

Usando yarn:
`yarn global add @gridsome/cli`

Usando npm:
`npm install --g @gridsome/cli`

### 2. Crea un proyecto de Gridsome

1. `gridsome create my-gridsome-site` para crear un nuevo proyecto
2. `cd my-gridsome-site` para pararte en la carpeta carpeta creada
3. `gridsome develop` para empezar un servidor local `http://localhost:8080`
4. Feliz desarrollo! 🎉🙌

### 3. Siguiente paso

1. Crea componentes `.vue` en el directorio `/pages` para crear rutas de páginas.
2. Usa `gridsome build` para generar archivos estaticos automáticamente en una carpeta `/dist`.


- [Como funciona Gridsome](/docs/how-it-works)
- [Como funciona Pages](/docs/pages)
- [Como desplegar una aplicación al servidor](/docs/deployment)
