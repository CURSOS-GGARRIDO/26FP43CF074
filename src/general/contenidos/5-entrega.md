# Ejemplo de guía de Entregables del Proyecto

## Fase 1: Iniciación y Visión del Producto (MVP)

Antes de programar, el equipo debe definir qué va a construir y por qué.

* **Lean Canvas:** Plan de negocio de una sola página (9 bloques estratégicos) para validar la viabilidad de la idea.

* **Documento de Visión del MVP:** Resumen ejecutivo que detalla el problema, la solución mínima viable, los objetivos de aprendizaje y la autoridad dentro del equipo.

    ::: details Ejemplo

  ### Ejemplo: Documento de Visión del MVP de "TaskFlow"

    **1. Definición del Problema**
    Los estudiantes de Formación Profesional y Universidad manejan múltiples asignaturas, entregas y proyectos simultáneos. Las herramientas actuales del mercado (como Notion o Jira) son excesivamente complejas y requieren una curva de aprendizaje o configuración inicial alta. Esto provoca que los estudiantes acaben usando notas de papel o la memoria, lo que resulta en plazos incumplidos, estrés crónico y una mala gestión del tiempo durante las semanas de exámenes.

    **2. La Solución Mínima Viable (MVP)**
    TaskFlow es una aplicación web de gestión de tareas "cero fricción". Para nuestro MVP, la aplicación permitirá a un estudiante registrarse, crear una tarea en menos de tres clics, asignarle una fecha límite y marcarla como completada. La interfaz será minimalista, mostrando únicamente las tareas pendientes para los próximos 7 días para evitar la parálisis por análisis. No habrá sub-tareas, ni integraciones externas, ni calendarios complejos en esta primera versión.

    **3. Público Objetivo (Target)**
    Estudiantes de entre 18 y 25 años que buscan inmediatez. Usuarios que están familiarizados con la tecnología web pero que no desean perder tiempo configurando tableros o flujos de trabajo. Necesitan abrir la web, anotar "Entregar práctica de base de datos el viernes" y cerrar la pestaña.

    **4. Propuesta de Valor Única**
    "Tu cabeza está para estudiar, no para recordar fechas. Anota tu tarea en 5 segundos y céntrate en lo importante".

    **5. Objetivos de Aprendizaje del Equipo**
    Más allá del producto comercial, este proyecto tiene metas formativas claras para los miembros del grupo:

  * Consolidar los conocimientos de creación de interfaces dinámicas utilizando React.js.
  * Aprender a diseñar y consumir una API RESTful básica con Node.js y Express.
  * Implementar un sistema seguro de registro y login de usuarios con JWT (JSON Web Tokens).
  * Trabajar de forma colaborativa utilizando la metodología Scrum y el control de versiones con Git (Trunk-Based Development).

    **6. Roles, Autoridad y Resolución de Conflictos**
    Para garantizar que el proyecto avance sin bloqueos, el equipo asume los siguientes roles:

  * **Product Owner (Laura):** Tiene la última palabra sobre qué funcionalidades entran en el Sprint y prioriza el Backlog. Si hay dudas sobre qué requiere el usuario, ella toma la decisión final.
  * **Scrum Master (Carlos):** Responsable de que el equipo no se salte las ceremonias (Dailies, Retrospectivas) y de ayudar a eliminar los bloqueos técnicos que impidan avanzar a los desarrolladores.
  * **Development Team (Ana, Carlos, Laura, David):** Todos programan. Las decisiones sobre arquitectura o librerías se toman por mayoría simple. En caso de empate técnico, el profesor/mentor actuará como voto de calidad.

    :::

## Fase 2: Planificación Ágil y Gestión de Requisitos

En esta fase se define cómo se va a organizar el equipo y qué funcionalidades componen el producto.

* **Listado de Requisitos:** Definición clara y medible de los requisitos funcionales y no funcionales.

    ::: details Ejemplo

    Antes de hacer las historias de usuario, el equipo hace un vaciado técnico de lo que el sistema debe hacer y cómo debe comportarse.

  * **Requisitos Funcionales (Lo que hace el sistema):**
    * **RF-01:** El sistema debe permitir a un usuario registrado crear una nueva tarea de texto.
    * **RF-02:** El sistema debe permitir marcar una tarea existente como completada.
    * **RF-03:** El sistema debe permitir eliminar una tarea de la base de datos.

  * **Requisitos No Funcionales (Cómo se comporta el sistema / Restricciones):**
    * **RNF-01 (Seguridad):** Las contraseñas de los usuarios deben almacenarse en la base de datos encriptadas mediante el algoritmo *bcrypt*.
    * **RNF-02 (Rendimiento):** El tiempo de carga del tablero principal de tareas no debe superar los 2 segundos con una conexión 4G estándar.
    * **RNF-03 (Compatibilidad):** La interfaz web debe ser *responsive* y visualizarse correctamente en dispositivos móviles (ancho mínimo de 320px).

    :::

* **Product Backlog:** Inventario dinámico de todo lo que se desea construir.

    ::: details Ejemplo

    Es la lista "bruta" de todo lo que queremos hacer. En un proyecto real, esto sería una captura de pantalla de su tablero en GitHub Projects, Trello o Jira. Un ejemplo de cómo se documentaría en texto:

  * **[ID-01]** Configurar entorno de desarrollo (React + Node + BD).
  * **[ID-02]** Diseño de la base de datos.
  * **[ID-03]** Registro de usuarios.
  * **[ID-04]** Login y autenticación.
  * **[ID-05]** Crear tarea.
  * **[ID-06]** Listar tareas del usuario.
  * **[ID-07]** Borrar tarea.
  * **[ID-08]** Modo oscuro (Opcional).

    :::

* **Priorización MoSCoW:** Clasificación documentada del backlog en *Must Have* (el núcleo del MVP), *Should Have*, *Could Have* y *Won't Have*.

    ::: details Ejemplo

    Antes de redactar todo al detalle, el equipo clasifica las grandes funcionalidades para asegurar que el MVP sea realista.

  * **Must Have (Obligatorio para el MVP):** Registro de usuario con email, inicio de sesión (Login), crear una tarea de texto, marcar tarea como completada y borrar tarea.
  * **Should Have (Recomendable si sobra tiempo en los Sprints):** Asignar una fecha de vencimiento a la tarea, ordenar tareas por fecha.
  * **Could Have (Deseable, pero no crítico):** Modo oscuro en la interfaz, etiquetas de colores (ej. "Examen", "Práctica").
  * **Won't Have (Descartado para esta versión):** Integración con Google Calendar, notificaciones por correo electrónico, recuperación de contraseña.

    :::

* **Historias de Usuario y Estimaciones:** Requisitos redactados bajo el estándar INVEST. Deben incluir la estimación de esfuerzo en *Story Points* (usando la secuencia de Fibonacci mediante técnicas como Planning Poker).

    ::: details Ejemplo

    Las tareas no son simplemente "Hacer el login". Deben seguir la estructura INVEST e incluir todo el contexto necesario para que cualquier programador del equipo pueda desarrollarla.

  * **ID y Título:** HU-01 - Registro de nuevo usuario.
  * **Descripción:** *Como* estudiante sin cuenta, *quiero* registrarme en TaskFlow usando mi email y una contraseña *para* poder acceder a mi lista de tareas privada.
  * **Estimación (Planning Poker):** 5 Story Points.

    :::

* **Criterios de Aceptación:** Condiciones específicas que cada historia debe cumplir para darse por válida.

    ::: details Ejemplo

  * El formulario debe tener campos para "Nombre", "Email", "Contraseña" y "Repetir Contraseña".
  * Si el usuario introduce un email que ya existe en la base de datos, debe mostrarse el error en rojo: "Este correo ya está registrado".
  * La contraseña debe tener un mínimo de 8 caracteres. De lo contrario, mostrar error: "La contraseña es muy corta".
  * Si el registro es exitoso, el sistema debe redirigir automáticamente a la pantalla de "Mi Tablero" (Dashboard).
  * La contraseña debe guardarse encriptada (hash) en la base de datos, nunca en texto plano.

    :::

* **DoD y DoR:** Definición de *Definition of Done* (estándares de calidad para terminar una tarea) y *Definition of Ready* (condiciones para empezar a desarrollarla).

    ::: details Ejemplo

    **Definition of Ready (DoR) - ¿Cuándo entra una tarjeta al Sprint?**
    El equipo no puede empezar a programar la HU-01 en un Sprint si no cumple estas reglas básicas:

  * La historia tiene un título descriptivo y sigue la estructura "Como... quiero... para...".
  * Tiene al menos 3 criterios de aceptación claros y verificables.
  * El equipo la ha estimado en Story Points de forma conjunta.
  * El diseño visual (Wireframe/Mockup) asociado a esta pantalla ya está aprobado y accesible para el desarrollador.

    **Definition of Done (DoD) - ¿Cuándo consideramos que está terminada?**
    Un desarrollador no puede decir "ya he terminado el registro" si solo funciona en su ordenador. Debe cumplir este estándar de calidad del proyecto:

  * El código compila y se ejecuta sin errores en el entorno local.
  * Se ha abierto una Pull Request (PR) hacia la rama `main` en GitHub.
  * Al menos otro compañero del equipo ha revisado el código y lo ha aprobado.
  * La funcionalidad cumple todos los Criterios de Aceptación definidos en la tarjeta.
  * El código está desplegado y funcionando en el entorno de pruebas (Staging) o producción.

    :::

* **Artefactos de Sprint:** Por cada iteración, se debe entregar el *Sprint Goal* (objetivo) y el *Sprint Backlog* (tareas técnicas).

    ::: details Ejemplo

    En lugar de un diagrama de Gantt, el equipo define qué va a lograr en las próximas 2 semanas.

  * **Sprint Goal (Objetivo del Sprint):** "Garantizar que un usuario pueda crearse una cuenta de forma segura y acceder al sistema, estableciendo la base de la aplicación web".

  * **Sprint Backlog (Tareas a realizar):** * Configurar el repositorio y la base de datos PostgreSQL (3 pts).
  * HU-01: Registro de nuevo usuario (5 pts).
  * HU-02: Login y generación de token de sesión (5 pts).

    :::

* **Evidencias de Ceremonias Scrum:** Documentación o actas breves que demuestren la realización de la daily standup, la retrospectiva y otras reuniones clave.

    :::tabs

    == Individual

    En lugar de ceremonias Scrum colectivas, el estudiante que trabaja de forma individual debe mantener un **Diario de Desarrollo** donde documenta su avance cada 3 días o semanalmente. Este registro reemplaza las *Daily Standup* y actúa como bitácora del proyecto.

  * **Plantilla de Entrada de Diario (Cada 3 días o Semanalmente):**

        ::: details Ejemplo

        **Entrada del Diario - Semana 1, Día 3 (TaskFlow Individual)**

    * **Fecha:** 8 de Noviembre de 2024
    * **Tarea Completada:** HU-01 - Registro de nuevo usuario (Backend).
    * **Descripción del Trabajo:** Implementé el endpoint `POST /api/registro` en Node.js. El formulario valida que el email sea único y la contraseña tenga mínimo 8 caracteres. La contraseña se encripta con bcrypt antes de guardarse en PostgreSQL.
    * **Tiempo Invertido:** 4 horas.
    * **Bloqueadores/Problemas:** Tuve que revisar la documentación de bcrypt porque no recordaba la sintaxis exacta. Perdí 30 minutos, pero lo resolví.
    * **Próximos Pasos (Para los próximos 3 días):** Conectar el Frontend (React) al endpoint de registro. Crear la pantalla del formulario en Figma.
    * **Autoasignación de Puntos:** Estimé 5 Story Points para esta tarea. Creo que la dificultad fue acertada.
    * **Nota Personal:** Me sentí cómodo trabajando con las validaciones en el backend. El código quedó limpio y bien comentado.

        :::

        ::: details Plantilla en Blanco

        **Entrada del Diario - Semana X, Día Y**

    * **Fecha:** [DD/MM/YYYY]
    * **Tarea Completada:** [ID-XX - Nombre de la Tarea]
    * **Descripción del Trabajo:** [¿Qué hiciste exactamente? ¿Qué código escribiste o qué diseño completaste?]
    * **Tiempo Invertido:** [X horas]
    * **Bloqueadores/Problemas:** [¿Qué te frenó? ¿Cómo lo resolviste?]
    * **Próximos Pasos:** [¿Qué vas a hacer en los próximos 3 días?]
    * **Autoasignación de Puntos:** [¿Foi acertada tu estimación original?]
    * **Nota Personal:** [Reflexión sobre lo que aprendiste o cómo te sentiste.]

        :::

    == Colectivo

    Se debe entregar un documento con resúmenes breves diarios como estos:

  * **Evidencia de Daily Scrum (Ejemplo del Día 4 del Sprint 1):**
    * *Fecha:* 10 de Noviembre. *Duración:* 10 minutos.
    * **Laura:** Ayer terminé la maqueta del Login. Hoy voy a conectarla con la API. Sin bloqueos.
    * **Carlos:** Ayer configuré la base de datos. Hoy empiezo el endpoint de Registro. **Bloqueo:** Necesito que Ana me confirme los nombres exactos de los campos del formulario.
    * **Ana:** Ayer revisé el diseño. Hoy le paso los campos a Carlos y empiezo la historia de "Crear tarea". Sin bloqueos.

    ::::

* **Retrospectiva (Semanal o al Final del Sprint):**

    ::: details Ejemplo

    Al final de cada semana (o cada Sprint si son de 2 semanas), el estudiante completa una breve reflexión personal:

  * **¿Qué fue bien esta semana?**
  * Conseguí configurar la base de datos PostgreSQL sin ayuda. Ahora entiendo mejor las relaciones entre tablas.
  * Usé bien Pull Requests y Conventional Commits, el historial de Git quedó limpio.

  * **¿Qué podría mejorar?**
  * Estimé mal la tarea de autenticación JWT. Pensé que serían 5 puntos pero tardé 8 horas.
  * Pasé demasiado tiempo probando manualmente. Debería empezar antes con tests unitarios.

  * **Acción de mejora para la próxima semana:**
  * Reservar 1 hora al día para escribir tests unitarios con Jest.
  * Leer más sobre tokens JWT antes de empezar la siguiente tarea de autenticación.

  * **Evidencia (Adjuntar):**
  * Captura del estado de GitHub Projects mostrando tareas completadas.
  * Screenshot del coverage de tests (ej. Jest Report).
  * Enlace al commit final de la semana.

    :::

## Fase 3: Diseño de Interfaz y Experiencia de Usuario (UX/UI)

Definición visual y funcional de la aplicación antes de tirar líneas de código.

Para ahorrar tiempo, se entregan al menos 1 ejemplo de los siguientes artefactos:

* **Wireframes:** Esquemas estructurales de baja fidelidad de las pantallas.

    ::: details Ejemplo

    El objetivo es definir la estructura, la jerarquía de la información y la usabilidad sin distraerse con colores o tipografías. Se entrega en formatos como Balsamiq, dibujos escaneados, o componentes básicos de Figma en blanco y negro.

    <div align="center">

    ![Wireframe ejemplo](/img/contenidos/s6/wireframeMeFi.png)

    </div>

    :::

* **Mockups:** Diseños estáticos de alta fidelidad (color, tipografía, estilo).

    ::: details Ejemplo

    Se aplica la identidad visual corporativa de TaskFlow y representa exactamente cómo debería verse la web una vez programada.

    <div align="center">

    ![Mockup ejemplo](/img/contenidos/s6/mockup.png)

    </div>

    :::

* **Sistema o Guía de Diseño (Handoff):** Documentación con *tokens* de diseño y componentes reutilizables para garantizar la coherencia entre diseño y desarrollo.

    ::: details Ejemplo

    Son las reglas estrictas y valores exactos que el equipo de frontend deberá trasladar a su código (como variables CSS o configuración del *theme* de Tailwind).

  * **Tokens de Color:** Un listado exacto de los códigos hexadecimales del proyecto. Ejemplos: `Primary-Blue: #4A90E2`, `Success-Green: #2ECC71`, `Danger-Red: #E74C3C`, `Text-Dark: #333333`.
  * **Tokens Tipográficos:** Títulos principales (H1) definidos a `24px` con peso `700`. Cuerpo de texto general definido a `16px` con peso `400`. Tipografía unificada: *Inter*.
  * **Especificaciones de Componentes (Botón Primario):** Se documenta que todos los botones principales de la web deben tener un *padding* interior de `10px` arriba/abajo y `20px` a los lados. El *border-radius* será estrictamente de `8px`.
  * **Estados de error:** Especificación de que si un usuario intenta enviar una tarea vacía, el borde del *input* cambiará a `Danger-Red` y aparecerá un texto de ayuda en tamaño `12px` debajo de la caja.

    :::

## Fase 4: Arquitectura y Diseño Técnico

Planos técnicos que explican cómo está construido el sistema por dentro.

* **Diagramas de Alto Nivel (Modelo C4):**

En lugar de hacer un diagrama gigante e incomprensible, el modelo C4 funciona como Google Maps: hacemos zoom poco a poco. Se documenta gráficamente (usualmente con herramientas como Draw.io o Mermaid), pero aquí te describo exactamente qué debe contener cada nivel:

* **Nivel 1 (Contexto):** El sistema como caja negra y su relación con usuarios/sistemas externos.

    ::: details Ejemplo

  * Muestra un monigote que representa al "Estudiante" (Actor principal).
  * Una flecha bidireccional conecta al estudiante con una gran caja azul central llamada "Sistema TaskFlow". La flecha dice: *"Gestiona sus tareas diarias"*.
  * *(Si hubiera un sistema externo, como Google Calendar o un servicio de envío de emails como SendGrid, aparecería aquí como otra caja gris externa, pero para nuestro MVP, el sistema es cerrado).*

      ```mermaid
      graph LR
          Estudiante(["👤 Estudiante\
          Persona"])
          TaskFlow["Sistema TaskFlow
          Sistema de Software
          Aplicación web para gestionar
          tareas diarias de estudiantes"]

          Estudiante -- "Gestiona sus
          tareas diarias" --> TaskFlow
          TaskFlow -- "Muestra tareas
          y confirmaciones" --> Estudiante

          style TaskFlow fill:#1168BD,color:#fff
          style Estudiante fill:#08427B,color:#fff
      ```

    :::

* **Nivel 2 (Contenedores):** Grandes bloques de software (Web, App, API, BD) y sus responsabilidades.

    ::: details Ejemplo

  * El "Estudiante" se conecta a un contenedor llamado **"Single Page Application" (React)**. La flecha indica: *"Visita la web mediante HTTPS"*.
  * La Aplicación Web se conecta mediante una flecha a un contenedor **"API Backend" (Node.js/Express)**. La flecha indica: *"Hace peticiones a la API REST usando JSON"*.
  * El Backend se conecta a un contenedor **"Base de Datos" (PostgreSQL)**. La flecha indica: *"Lee y escribe datos mediante consultas SQL"*.

      ```mermaid
      graph LR
          Estudiante(["👤 Estudiante Persona "])
          SPA["Single Page Application React 
          Interfaz de usuario servida como archivos estáticos"]
          API["API Backend Node.js / Express
          Expone endpoints REST para la lógica de negocio"]
          DB[("Base de Datos PostgreSQL
          Almacena usuarios y tareas")]

          Estudiante -- "Visita la web mediante HTTPS" --> SPA
          SPA -- "Peticiones REST con JSON" --> API
          API -- "Lee y escribe datos mediante SQL" --> DB

          style SPA fill:#1168BD,color:#fff
          style API fill:#1168BD,color:#fff
          style DB fill:#1168BD,color:#fff
          style Estudiante fill:#08427B,color:#fff
      ```

    :::

* **Diagrama de Despliegue e Infraestructura:** Plano de la ejecución física del software (servidores, redes, cloud).

    ::: details Ejemplo

    Este plano responde a la pregunta: *"¿Dónde vive nuestro código en internet?"*

  * Se dibuja una nube general que representa internet.
  * Dentro, un bloque llamado **"Vercel"** aloja los archivos estáticos del Frontend (HTML, CSS, JS compilado de React).
  * Otro bloque llamado **"Render"** (o Railway/Heroku) aloja el servidor de Node.js que expone la API.
  * Un tercer bloque llamado **"Supabase"** (o Neon/AWS RDS) aloja el motor de la base de datos PostgreSQL.
  * Se trazan líneas para mostrar que Vercel se comunica con Render de forma pública, pero la Base de Datos en Supabase solo acepta conexiones directas desde el servidor de Render (por seguridad).

      ```mermaid
      graph TB
          Browser(["🌐 Navegador del Estudiante"])

          subgraph Internet["☁️ Internet"]
              subgraph Vercel["Vercel (CDN)"]
                  FE["Frontend React HTML + CSS + JS estático"]
              end

              subgraph Render["Render"]
                  API["Servidor Node.js API REST"]
              end

              subgraph Supabase["Supabase"]
                  DB[("PostgreSQL Base de Datos")]
              end
          end

          Browser -- "HTTPS" --> FE
          FE -- "HTTPS / REST API (público)" --> API
          API -- "Conexión privada (solo desde Render)" --> DB

          style FE fill:#1a1a2e,color:#fff
          style API fill:#16213e,color:#fff
          style DB fill:#0f3460,color:#fff
      ```

    :::

* **Diagrama de Entidad-Relación (ERD):** Estructura lógica de la base de datos, tablas, atributos y relaciones.

    ::: details Ejemplo

    **3. Diagrama de Entidad-Relación (ERD)**
    El plano exacto de las tablas de la base de datos para que no haya dudas sobre qué tipos de datos se guardan.

  * **Tabla `users`:**
  * `id` (UUID, Clave Primaria).
  * `email` (VARCHAR(255), Único, No Nulo).
  * `password_hash` (VARCHAR(255), No Nulo).
  * `created_at` (TIMESTAMP, Por defecto: fecha actual).

  * **Tabla `tasks`:**
  * `id` (UUID, Clave Primaria).
  * `user_id` (UUID, Clave Foránea apuntando a `users.id`, Eliminación en cascada).
  * `title` (VARCHAR(150), No Nulo).
  * `is_completed` (BOOLEAN, Por defecto: false).
  * `created_at` (TIMESTAMP, Por defecto: fecha actual).

  * **Relación:** Se dibuja una línea que conecta `users` con `tasks` indicando una cardinalidad de "1 a N" (Un usuario puede tener muchas tareas, pero una tarea pertenece a un solo usuario).

      ```mermaid
      erDiagram
          users {
              UUID id PK
              VARCHAR_255 email "Único, No Nulo"
              VARCHAR_255 password_hash "No Nulo"
              TIMESTAMP created_at "Por defecto: ahora"
          }

          tasks {
              UUID id PK
              UUID user_id FK
              VARCHAR_150 title "No Nulo"
              BOOLEAN is_completed "Por defecto: false"
              TIMESTAMP created_at "Por defecto: ahora"
          }

          users ||--o{ tasks : "tiene (1 a N)"
      ```

    :::

* **Diagrama de Casos de Uso:** Interacciones entre los actores y el sistema (incluyendo relaciones `<<include>>` y `<<extend>>`).

    ::: details Ejemplo

    Un esquema lógico de lo que el usuario puede hacer interactuando con las fronteras del sistema.

  * **Actor:** Monigote a la izquierda ("Estudiante").
  * **Casos de uso principales (Círculos u óvalos):** "Registrarse", "Iniciar Sesión", "Crear Tarea", "Marcar Tarea Completada".
  * **Relaciones avanzadas:**
  * Del caso "Crear Tarea" sale una flecha punteada con la etiqueta `<<include>>` hacia un caso de uso llamado "Validar Autenticación" (porque no puedes crear una tarea si el sistema no verifica antes que tienes la sesión iniciada).
  * Del caso "Registrarse" podría salir una flecha `<<extend>>` hacia "Mostrar Error de Email Duplicado" (porque es un comportamiento alternativo que solo ocurre a veces).

      ```mermaid
      graph LR
          Actor(["👤 Estudiante"])

          subgraph Sistema TaskFlow
              UC1(["Registrarse"])
              UC2(["Iniciar Sesión"])
              UC3(["Crear Tarea"])
              UC4(["Marcar Tarea Completada"])
              UC5(["Validar Autenticación"])
              UC6(["Mostrar Error Email Duplicado"])
          end

          Actor --> UC1
          Actor --> UC2
          Actor --> UC3
          Actor --> UC4

          UC3 -. "&lt;&lt;include&gt;&gt;" .-> UC5
          UC4 -. "&lt;&lt;include&gt;&gt;" .-> UC5
          UC1 -. "&lt;&lt;extend&gt;&gt;" .-> UC6
      ```

    :::

* **Diagrama de Secuencia:** Flujo cronológico de mensajes entre componentes para operaciones complejas.

    ::: details Ejemplo

    Este es el diagrama más detallado y cronológico. Por ejemplo, documenta el flujo exacto del Login:

    1. **Estudiante** envía credenciales (email y password) al **Frontend**.
    2. **Frontend** hace un `POST /api/login` al **Backend**.
    3. **Backend** consulta a la **Base de Datos**: *"¿Existe este email?"*.
    4. **Base de Datos** devuelve el usuario y el hash de la contraseña.
    5. **Backend** compara las contraseñas internamente. Si coincide, genera un token JWT.
    6. **Backend** devuelve un `HTTP 200 OK` con el token JWT al **Frontend**.
    7. **Frontend** guarda el token en el LocalStorage y redirige al Estudiante a su tablero.

    ```mermaid
    sequenceDiagram
        actor Estudiante
        participant Frontend as Frontend (React)
        participant Backend as Backend (Node.js)
        participant DB as Base de Datos (PostgreSQL)

        Estudiante->>Frontend: Introduce email + password
        Frontend->>Backend: POST /api/login
        Backend->>DB: ¿Existe este email?
        DB-->>Backend: Usuario + password_hash
        Backend->>Backend: Compara hash con bcrypt
        alt Credenciales válidas
            Backend-->>Frontend: HTTP 200 OK + Token JWT
            Frontend->>Frontend: Guarda token en LocalStorage
            Frontend-->>Estudiante: Redirige al Dashboard
        else Credenciales inválidas
            Backend-->>Frontend: HTTP 401 Unauthorized
            Frontend-->>Estudiante: Muestra error "Credenciales incorrectas"
        end
    ```

    :::

* **ADRs (Architecture Decision Records):** Documentos breves que justifican las decisiones técnicas tomadas y sus *trade-offs*.

    ::: details Ejemplo

    Documentos de texto muy breves que justifican por qué se tomó una decisión importante, para que nadie pregunte *"¿por qué hicimos esto así?"* tres meses después.

  * **Título:** ADR-002: Uso de JWT vs Cookies de Sesión para la Autenticación.
  * **Contexto:** Necesitamos un método para mantener a los usuarios logueados en TaskFlow de forma segura entre el Frontend (React) y la API (Node.js).
  * **Decisión:** Utilizaremos JSON Web Tokens (JWT) enviados a través de la cabecera HTTP de Autorización (Bearer Token), en lugar de sesiones guardadas en memoria en el servidor con cookies tradicionales.
  * **Justificación:** Como nuestro backend es una API REST pura y el frontend está desacoplado, JWT nos permite no tener que almacenar el estado de la sesión en el servidor, consumiendo menos recursos y facilitando el despliegue en plataformas gratuitas (stateless).
  * **Consecuencias:** El frontend será responsable de almacenar el token de forma segura. Si un token es robado, no podemos revocarlo fácilmente hasta que expire, por lo que configuraremos un tiempo de expiración corto (ej. 2 horas).

    :::

## Fase 5: Ecosistema de Desarrollo y Trabajo en Equipo

Reglas sobre cómo el equipo escribe, comparte y documenta el código.

* **Estrategia de Ramificación (Git):** Documento que establece si se usará *Git Flow* o *Trunk-Based Development*.

    ::: details Ejemplo

    El equipo debe documentar cómo van a subir el código para no pisarse el trabajo los unos a los otros.

  * **Enfoque elegido:** *Trunk-Based Development*.
  * **Reglas documentadas:**
  * Existe una única rama principal llamada `main` que representa lo que está en producción. Nadie puede hacer un *commit* directo a `main`.
  * Para cada tarea de Jira/Trello (ej. la HU-01), el desarrollador crea una rama temporal desde `main`. La nomenclatura obligatoria será: `tipo/numero-tarea-descripcion`.
  * *Ejemplo práctico:* Carlos va a programar el registro. Crea la rama `feat/HU01-registro-usuario`.
  * Cuando termina, abre una *Pull Request* (PR) hacia `main`. Laura debe revisar el código. Si todo está correcto, Laura aprueba y fusiona (hace *merge*) la rama, y esta se borra automáticamente.

    :::

* **Políticas de Integración:** Normativa del equipo sobre el uso de *Pull Requests* (PRs) con revisión obligatoria y el uso de *Conventional Commits* (ej. `feat:`, `fix:`).

    ::: details Ejemplo

    Para que el historial de Git sea un libro abierto y no un caos de mensajes como "cambios finales 3", el equipo adopta *Conventional Commits*.

  * **Documentación de la regla:** Todo commit debe empezar por un prefijo que indique su naturaleza, seguido de una breve descripción en imperativo.
  * **Ejemplos prácticos en TaskFlow:**
  * `feat: añadir endpoint para crear tareas` (Para una nueva funcionalidad).
  * `fix: corregir error de validación en el email del login` (Para arreglar un bug).
  * `docs: actualizar el README con instrucciones de instalación` (Para cambios en documentación).
  * `style: centrar el botón de añadir tarea en versión móvil` (Para cambios visuales que no afectan la lógica).

    :::

* **Documentación Viva (Docs-as-Code):** Archivos Markdown alojados en el repositorio (ej. `requisitos.md`, `arquitectura.md`), incluyendo diagramas generados mediante código (Mermaid).

    ::: details Ejemplo

    La documentación no vive en un Word perdido en un Google Drive, sino que viaja junto al código en formato Markdown (`.md`). Si el código cambia, el `.md` se actualiza en el mismo *commit*.

  * **Ejemplo de archivo `arquitectura.md` con Mermaid:**
      En lugar de subir una imagen exportada que luego nadie puede editar, el equipo escribe el diagrama C4 directamente en código dentro del archivo Markdown usando la sintaxis de Mermaid. GitHub lo renderizará automáticamente como un gráfico visual.

      A continuación se muestra el diagrama de contenedores de nuestra aplicación:

      ```mermaid
      graph TD
          A[Estudiante] -->|HTTPS| B(Frontend React - Vercel)
          B -->|API REST / JSON| C(Backend Node.js - Render)
          C -->|Consultas SQL| D[(Base de Datos PostgreSQL)]
      ```

    :::

* **Configuración del Entorno de IA (Opcional):** Si usan IA, entrega de reglas globales (`.rules`), flujos de trabajo (`workflows.yml`) y *Knowledge Items* (KIs).

    ::: details Ejemplo

    Si se utilizan asistentes de IA como Antigravity, Cursor, GitHub Copilot o Claude dentro de su editor, deben indicar las reglas, workflows, skills, etc que se han utilizado y para que añadiendo el flujo logico para usarlas.

    ```markdown
    Reglas globales de IA para el proyecto TaskFlow

    1. Eres un desarrollador Senior experto en React y Node.js.
    2. Todas las respuestas de código deben estar en español (comentarios y nombres de variables descriptivas, ej: `tareasPendientes`, no `pendingTasks`).
    3. En el Frontend (React), utiliza siempre *Functional Components* y *Hooks*. No uses *Class Components*.
    4. Para los estilos, utiliza exclusivamente clases de *Tailwind CSS*. No generes archivos `.css` externos.
    5. En el Backend, todas las respuestas de la API deben seguir esta estructura JSON estándar: `{ "success": boolean, "data": object, "error": string | null }`.

    ```

    > [!WARNING] Nota
    >
    > Ejemplos de reglas globales y flujos de IA para que el equipo documente cómo se ha configurado la inteligencia artificial en su entorno de desarrollo, asegurando que cualquier miembro del equipo (o el profesor) pueda entender y replicar el proceso.
    >
    > **Knowledge Items (KIs):** Se pueden añadir algún ejemplo de los pequeños archivos `.md` de la carpeta `/docs/context` que la IA usa para entender el proyecto (ej. `modelo-base-datos.md` para que la IA sepa qué columnas existen al generar una consulta SQL).

  ### Ejemplo del flujo de las herramientas anteriores de IA en el proyecto TaskFlow

    ```mermaid
    graph TD
        A["🤖 Asistente de IA<br/>(GitHub Copilot / Cursor)"] 
        B["📋 Lee Reglas Globales<br/>(proyecto/.rules)"]
        C["📚 Consulta Knowledge Items<br/>(/docs/context/*.md)"]
        D["🔄 Workflows Automáticos<br/>(workflows.yml)"]
        
        E["💡 Genera Sugerencias"]
        F["✅ Valida contra Estándares<br/>(Español, Hooks, Tailwind, JSON)"]
        G["🔗 Aplica Contexto de BD<br/>(modelo-base-datos.md)"]
        
        H["📝 Propone Código"]
        I["👨‍💻 Desarrollador Revisa<br/>& Ajusta"]
        J["✔️ Commit Convencional"]
        K["🚀 PR + Revisión Equipo"]
        
        A --> B
        A --> C
        A --> D
        
        B --> F
        C --> G
        D --> E
        
        F --> H
        G --> H
        E --> H
        
        H --> I
        I --> J
        J --> K
        K -->|Aprobado| L["✨ Merge a main"]
        K -->|Cambios solicitados| I
        
        style A fill:#2d3748,color:#fff
        style B fill:#2b6cb0,color:#fff
        style C fill:#2b6cb0,color:#fff
        style D fill:#2b6cb0,color:#fff
        style F fill:#38a169,color:#fff
        style G fill:#38a169,color:#fff
        style L fill:#2f855a,color:#fff
    ```

    :::

## Fase 6: Calidad y Cierre

Aseguramiento del funcionamiento del producto y reflexiones finales.

* **Plan de Pruebas (Testing):** Estrategia que especifica las pruebas unitarias (Principio FIRST), de integración, E2E y no funcionales, idealmente guiadas por TDD o BDD.

    ::: details Ejemplo

  * **Pruebas Unitarias (La base - Rápidas y aisladas):**
  * Se prueban funciones concretas del código (siguiendo el Principio FIRST: *Fast, Independent, Repeatable, Self-Validating, Timely*).
  * *Ejemplo en TaskFlow (Frontend):* Un test escrito con Jest para la función `formatearFecha(fecha)`. El test le pasa el valor "2023-10-05" y verifica de forma automática que la función devuelve exactamente el texto "5 de Octubre".

  * **Pruebas de Integración (El medio - Conectando piezas):**
  * Se prueba que dos partes del sistema se comunican correctamente.
  * *Ejemplo en TaskFlow (Backend):* Un test con Supertest que hace una petición falsa `POST /api/tareas` enviando el texto "Estudiar React". El test verifica que la base de datos devuelve un código `201 Created` y que la tarea se ha guardado correctamente en la tabla de PostgreSQL de pruebas.

  * **Pruebas E2E / End-to-End (La cima - Simulando al usuario):**
  * Pruebas lentas y costosas que imitan el comportamiento humano en el navegador usando herramientas como Cypress o Playwright.
  * *Ejemplo en TaskFlow:* Un script automatizado que abre un navegador invisible, navega a `localhost:3000/login`, escribe "<usuario@test.com>" y "12345678", hace clic en el botón "Entrar", espera 2 segundos y verifica que en la pantalla aparece el texto "Mis Tareas de Hoy".

  * **Pruebas No Funcionales:**
  * *Ejemplo de Rendimiento:* Ejecutar *Lighthouse* en Google Chrome y documentar que la web obtiene una puntuación superior a 90/100 en Accesibilidad y Rendimiento.

    :::

* **Informe de Lanzamiento y Retrospectiva Final:** Documento final ("autopsia sin culpas") que recopila el aprendizaje validado tras entregar el MVP y define los siguientes pasos del producto.

    ::: details Ejemplo

  * **Resumen del Lanzamiento:**
  * *"El día 15 de diciembre desplegamos TaskFlow v1.0 en Vercel y Supabase. Cumplimos con el 100% de los requisitos 'Must Have' definidos en la Fase 2."*

  * **Aprendizaje Validado (Feedback de usuarios reales):**
  * El equipo le dio la app a 5 compañeros de otra clase para que la usaran durante 3 días.
  * *"Descubrimos que los usuarios intentaban pulsar la tecla 'Enter' para guardar la tarea, pero nuestro formulario obligaba a hacer clic con el ratón en el botón 'Añadir'. Esto generó frustración."

  * **Autopsia sin culpas (Lo técnico y lo organizativo):**
  * *Lo que funcionó:* Trabajar con *Pull Requests* evitó que rompiéramos la rama `main`. El diseño en Figma nos ahorró mucho tiempo de CSS.
  * *Lo que falló:* Subestimamos el tiempo necesario para configurar los tokens JWT en el backend. Esto nos obligó a eliminar el requisito 'Should Have' de ordenar las tareas por fecha.

  * **Siguientes pasos del producto (Roadmap):**
  * Si el proyecto continuara, ¿qué se haría en el Sprint 3?
  * *"1. Añadir soporte para la tecla 'Enter' al crear tareas (Bugfix).*
  * *"2. Desarrollar el sistema de etiquetas de colores (Feature pospuesta).*
  * *"3. Migrar las pruebas manuales a pruebas E2E automáticas con Cypress."*

    :::
