---
title: Política de Privacidad
icon: material-symbols:article-outline
permalink: /es/guide/privacypolicy/
createTime: 2025/09/5 15:00:00
---

Versión: 1.1.6

**Fecha de entrada en vigor: 2025-2-12**

1. ### Identidad y naturaleza del proyecto

El software getty es una aplicación de código abierto (AGPL v3) que permite gestionar propinas, objetivos de propina, chat, notificaciones y widgets en transmisiones en vivo.

2. ### Principios de protección de datos

- **Minimización:** sólo se recogen los datos estrictamente necesarios para la funcionalidad que el usuario habilita.
- **Transparencia:** toda la lógica de tratamiento de datos está en el repositorio público; cualquiera puede revisarla.
- **Control del usuario:** los datos de configuración y los tokens permanecen en archivos locales bajo el control del usuario.
- **No explotación comercial:** no se venden, alquilan ni se utilizan los datos personales con fines comerciales.
- **Independencia:** no se incluyen rastreadores externos (Google Analytics, etc.) ni SDKs de analítica de terceros.

3. ### ¿Qué datos se procesan?

**3.1 Operación básica (self‑host / hosted)**

- **Token de sesión y almacenamiento local:** se utilizan cookies técnicas o LocalStorage únicamente para mantener la autenticación y preferencias (tema, idioma). No se usan para rastreo.
- **Dirección de wallet / transacciones:** se muestra y calcula propinas y objetivos de propina; el acceso es solo de lectura a gateways públicos (por ejemplo, Arweave).
- **Configuración del usuario (metas de propina, texto, idioma, etc.):** personaliza la experiencia y se guarda en un archivo JSON.
- **Tokens y URLs de webhook (Discord, Telegram, etc.):** se utilizan únicamente para enviar notificaciones a los servicios que el propio usuario haya configurado; nunca se reutilizan para otro fin.

**3.2 Datos técnicos (principalmente en hosted)**

- Registros de servidor: timestamp, ruta solicitada y código de respuesta HTTP.
- Métricas internas agregadas (conteo de ejecuciones de procesos).

**3.3 Lo que no se recopila**

- No se recopilan perfiles de comportamiento.
- No se integran cookies de tracking de terceros.
- No se emplean huellas digitales (fingerprinting) deliberadas.
- No se usan SDKs de analítica externa.

**3.4 Datos obtenidos a través de Odysee (APIs / backend)**

El software getty actúa como cliente que consulta datos desde Odysee. Dependiendo de las funcionalidades activadas, pueden recuperarse (normalmente de carácter público):

- Metadatos del canal / perfil (nombre, descripción, imagen, identificadores de contenido o livestream).
- Información pública de tips/supports / transacciones asociadas al canal para calcular objetivos y mostrar historial resumido.
- Estados o identificadores de streams en vivo y publicaciones recientes.

==No se almacena una copia permanente: se mantiene una caché efímera para rendimiento.==

**3.5 Integración y roles**

Odysee es un controlador independiente de los datos originales de la cuenta. Getty únicamente consulta y renderiza datos (controlador separado para la configuración local que el usuario introduce). La rectificación, actualización o supresión de datos de perfil, contenido o transacciones debe gestionarse directamente en Odysee. Las solicitudes a la infraestructura de Odysee pueden implicar transferencias internacionales conforme a sus políticas; se recomienda revisar su política de privacidad oficial.

4. ### Finalidades

- Autenticación y gestión de sesiones.
- Mostrar y actualizar widgets (chat, tips, objetivos).
- Envío de notificaciones a los servicios externos configurados por el usuario (por ejemplo, Discord).
- Cálculo y visualización de estado (última propina, progreso de objetivo, historial resumido).

5. ### Base legal (para jurisdicciones con GDPR u otras normas similares)

- **Uso de la aplicación y sus funcionalidades:** ejecución de contrato (el usuario acepta la política al usar getty).
- **Registro de logs técnicos:** interés legítimo (seguridad, depuración).
- **Procesamiento de wallets y webhooks introducidos por el usuario:** consentimiento explícito (el usuario los proporciona voluntariamente).
- **Caché temporal de datos públicos de Odysee:** interés legítimo (rendimiento y reducción de peticiones redundantes, minimizando carga y latencia).

6. ### Periodos de conservación

- **Sesiones:** mientras la sesión esté activa o hasta el reinicio del proceso.
- **Configuración:** indefinidamente, hasta que el usuario la modifique o elimine.
- **Logs (hosted):** recomendado no más de 30 días, con rotación y anonimización.
- **Caché de respuestas de Odysee:** ≤15 minutos (configurable / purgable manualmente por el usuario al reiniciar o limpiar).
- **Tokens / llaves de API de Odysee (si existieran):** persisten localmente hasta revocación en Odysee o eliminación del archivo de configuración.

7. ### Divulgación a terceros

- **Gateways/blockchain:** consultas de solo lectura a APIs públicas para obtener transacciones.
- **Servicios webhook configurados por el usuario (Discord, Telegram, etc.):** sólo los campos que el usuario decide enviar (mensaje, monto, etc.).
- **Requerimientos legales:** si una autoridad competente lo solicita bajo orden judicial válida, se podría estar obligado a revelar los registros técnicos disponibles (logs).

8. ### Derechos del usuario (cuando aplica)

- **Acceso:** puede leer directamente los archivos de configuración (config/, data/).
- **Rectificación:** editar los archivos o usar la interfaz para corregir datos.
- **Supresión:** borrar los archivos correspondientes, revocar tokens y reiniciar la aplicación.
- **Limitación/Oposición:** desactivar funciones (por ejemplo, no configurar webhooks).
- **Portabilidad:** los datos se almacenan en formato JSON legible y exportable.

**Datos fuente de Odysee:**

- **Rectificación / supresión de metadatos de canal o transacciones:** procede ante Odysee.
- **Revocación de acceso:** al revocar el token/clave en Odysee se invalida inmediatamente la capacidad de consulta en getty.
- **Borrado local:** eliminar archivos de configuración y caché purga cualquier persistencia residual.

9. ### Seguridad de los datos

Se aplican medidas técnicas para proteger la información, incluyendo el uso de cifrado en tránsito (HTTPS) para la versión hosted y recomendaciones de seguridad para instancias self-host. Sin embargo, ningún sistema es 100% infalible.

10. ### Modificaciones de la política

Cualquier cambio será publicado con una nueva fecha de vigencia.

11. ### Aceptación

El uso de getty implica la aceptación de esta política de privacidad. Si alguna cláusula no resulta aceptable, el usuario puede ejecutar su propia instancia self‑host y adaptar la configuración a sus necesidades, o dejar de utilizar la versión hosted.

12. ### Contacto

Si tiene alguna pregunta sobre nuestra política de privacidad o sobre cómo se recopilan y procesan los datos, envíenos un correo electrónico: **hello@getty.sh**
