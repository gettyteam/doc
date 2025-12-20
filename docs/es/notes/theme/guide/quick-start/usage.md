---
title: Configuración
icon: grommet-icons:install
createTime: 2025/07/28 10:00
permalink: /es/guide/usage/
tags:
  - Guía
  - Inicio rápido
---

# Primeros pasos

## Inicia sesión con Odysee y Wander

Para configurar getty solo necesitas iniciar sesión. La app Wander es una billetera digital segura y fácil de usar, te permite autenticarte en getty sin contraseñas tradicionales. Es esencial para acceder a funciones de getty como la configuración de widgets y estadísticas de canal. [Instala Wander aquí](https://www.wander.app/).

::: important

Solo necesitas iniciar sesión una vez con tu **cuenta de Odysee** y configurar las estadísticas de tu canal. Luego, verifica la sesión con Wander. Esto permite que las estadísticas de tu canal se importen a tu cuenta de getty.

:::

![getty](https://thumbs.odycdn.com/670b5b8097b19e458bcab74f1ec0af65.webp)

## Haz una copia de seguridad de tu billetera

Recomendamos hacer una copia de seguridad de tu billetera de Wander en un lugar seguro. Esta copia también es necesaria cuando configuras tu billetera en Odysee con Wander. Para saber más sobre cómo respaldar tu billetera, visita la documentación de Odysee. [Billetera integrada de Wander](https://help.odysee.tv/category-monetization/).

## Módulos y widgets en getty

Cada módulo o widget en getty debe configurarse para que puedas integrarlo en tus escenas de OBS o en tu software de transmisión en vivo. No es necesario configurar todos, pero si quieres dejar listos los más básicos, aquí te mostramos cómo configurar los widgets más importantes.

![getty](https://thumbs.odycdn.com/daa2905e83e9ca900b2193a17cd15678.webp)

## Configura las analíticas en vivo

Las métricas de tus transmisiones en vivo son importantes para conocer el rendimiento de cada directo que haces en Odysee. Estas analíticas muestran aspectos como la cantidad de horas por transmisión, el promedio de espectadores y mucho más.

Para configurar las analíticas en vivo, necesitas ingresar el **ClaimID de tu canal** (el que saldrá en vivo).

::: note

Para encontrar el ClaimID, ve a la página de tu canal y, en la pestaña **"About"**, encontrarás el ClaimID del canal. Cópialo y pégalo en Live Analytics. Cuando estés en vivo, las analíticas registrarán la actividad de tu transmisión.

:::

![getty](https://thumbs.odycdn.com/590036db3922292d1c925446638c8e67.webp)

## Configura el chat en vivo

El widget de chat en vivo tiene varias configuraciones, pero para que funcione en tu software de transmisión necesitas configurarlo desde el panel de administración de getty. Para hacerlo, ve a la página de chat y luego ingresa el ClaimID de la publicación en vivo que creaste en Odysee.

El ClaimID del post está debajo del ícono de Credits; ahí verás el ClaimID del post. Cópialo y pégalo en la configuración del chat en getty. Luego guarda los cambios y copia la URL de integración para OBS.

![getty](https://thumbs.odycdn.com/14d359d0d19e0ee4e1eed45108aa0a97.webp)

![getty](https://thumbs.odycdn.com/dbbced7a84dafd2da037bc135458b4d4.webp)

En resumen, cada widget o módulo que requiera un ClaimID específico puede agregarse manualmente. Por ejemplo, para configurar el widget de Viewers o el sistema de logros, necesitas ingresar el ClaimID del canal. Cada widget tiene su propia URL para integrarse en OBS Studio o en cualquier software de transmisión en vivo que uses para conectarte a Odysee.

::: important

En algunos casos, OBS Studio puede almacenar en caché algún widget. Si notas un comportamiento extraño, puedes refrescar el widget desde la fuente del navegador en OBS, limpiar la caché y volver a intentarlo.

:::
