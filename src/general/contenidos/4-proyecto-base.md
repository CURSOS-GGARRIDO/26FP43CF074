# 🎓 Ejemplo Guía Conceptual: Arquitectura Full Stack Profesional

## 🗺️ PARTE I: ARQUITECTURA BACKEND

Esta arquitectura se estructura en componentes lógicos y desacoplados. Cada componente tiene una única responsabilidad, comunicándose con otros componentes a través de contratos bien definidos.

### 🏗️ Estructura de Carpetas del Backend

* `/app`
  * `/Http`:
    * `/Controllers`: Controladores que coordinan el flujo de peticiones.
    * `/Middleware`: Filtros globales y de ruta.
    * `/Requests`: Clases de validación y autorización (Form Requests).
    * `/Resources`: Transformadores de modelos a JSON (API Resources).
  * `/Policies`: Clases de autorización para acciones sobre recursos.
  * `/Services`: Clases que contienen la lógica de negocio.
  * `/Repositories`: Interfaces e implementaciones para acceso a datos.
    * `/Contracts`: Interfaces de los repositorios.
    * `/Eloquent`: implementaciones concretas con Eloquent.
  * `/DTOs`: Objetos de transferencia de datos entre capas.
  * `/Events`: Eventos del sistema.
  * `/Listeners`: Clases que responden a eventos.
  * `/Exceptions`: Excepciones personalizadas del dominio.
  * `/Models`: Modelos de base de datos.
  * `/Providers`: Proveedores de servicios para inyección de dependencias y registro en el contenedor IoC.
* `/config`: Archivos de configuración de la aplicación.
* `/database`:
  * `/migrations`: Migraciones de base de datos.
  * `/seeders`: Datos de prueba.
* `/routes`: Definición de rutas de la API.
* `/tests`: Tests unitarios y de integración.
  * `/Unit`: Tests unitarios de servicios y repositorios.
  * `/Feature`: Tests de integración de controladores.


### 🌊 Flujo Arquitectónico del Backend (Diagrama Visual)

Para ilustrar el ciclo de vida de una petición, se usa este diagrama conceptual:

```mermaid
graph TD
    subgraph "▶ Cliente"
        CLI[Cliente HTTP]
    end
    
    subgraph "🛡️ Filtros de Entrada"
        ROUTER[Router]
        MW_GLOBAL[Middleware Global]
        MW_RUTA[Middleware de Ruta]
        FORM_REQ[Form Request + Policy]
    end
    
    subgraph "🧠 Lógica y Datos"
        CTRL[Controlador]
        DTO[DTO]
        SERVICE[Servicio]
        REPO[Repositorio]
        MODEL[Modelo]
        DB[(Base de Datos)]
        CACHE[(Cache)]
    end
    
    subgraph "🖼️ Respuesta"
        API_RES[API Resource]
        RES_BUILD[Response Builder]
        HTTP_RES[Respuesta HTTP]
    end
    
    subgraph "📢 Sistema de Eventos"
        EVENT[Eventos]
        LISTENER[Listeners]
    end
    
    subgraph "🧩 Arquitectura de Soporte"
        IOC[IoC Container]
        CONTRACTS[Contratos/Interfaces]
        PROVIDERS[Service Providers]
    end
    
    %% Flujo principal de petición
    CLI -->|1. Petición| ROUTER
    ROUTER -->|2. Dirige a| MW_GLOBAL
    MW_GLOBAL -->|3. Pasa a| MW_RUTA
    MW_RUTA -->|4. Pasa a| FORM_REQ
    FORM_REQ -->|5. Validada y Autorizada| CTRL
    CTRL -->|6. Crea| DTO
    DTO -->|7. Pasa a| SERVICE
    SERVICE -->|8. Usa| REPO
    REPO -->|9. Opera con| MODEL
    MODEL -->|10. Accede a| DB
    REPO -.->|Alternativa| CACHE
    
    %% Flujo de respuesta
    MODEL -->|11. Devuelve datos| REPO
    REPO -->|12. Devuelve datos| SERVICE
    SERVICE -->|13. Devuelve| CTRL
    CTRL -->|14. Transforma con| API_RES
    API_RES -->|15. Formatea con| RES_BUILD
    RES_BUILD -->|16. Genera| HTTP_RES
    HTTP_RES -->|17. Envía| CLI
    
    %% Sistema de eventos
    SERVICE -.->|Dispara| EVENT
    EVENT -.->|Escuchado por| LISTENER
    
    %% Arquitectura de soporte
    PROVIDERS -->|Registra en| IOC
    IOC -.->|Inyecta| SERVICE
    IOC -.->|Inyecta| REPO
    IOC -.->|Inyecta| LISTENER
    CONTRACTS -.->|Define| REPO
    
    style CLI fill:#e1f5ff
    style HTTP_RES fill:#e1f5ff
    style FORM_REQ fill:#ffe4e1
    style SERVICE fill:#fff4e1
    style REPO fill:#f0e1ff
    style MODEL fill:#ffe1f0
    style IOC fill:#f0f0f0
```

-----

## 🎨 PARTE II: ARQUITECTURA FRONTEND

### 🏗️ Estructura de Carpetas del Frontend

* `/src`
  * `/api`: Configuración del cliente HTTP y servicios de datos.
  * `/assets`: Recursos estáticos como imágenes, fuentes e iconos.
  * `/components`: Componentes de interfaz reutilizables.
    * `/ui`: Componentes básicos como botones, inputs o modales.
    * `/layout`: Componentes estructurales como cabecera, barra lateral o diseño principal.
  * `/features`: Carpeta principal de la arquitectura. Se organizan módulos independientes por cada funcionalidad de la aplicación.
    * `/[nombre-feature]`:
      * `/api`: Llamadas a la API específicas de esta funcionalidad.
      * `/components`: Componentes específicos de esta funcionalidad.
      * `/hooks`: Hooks personalizados con la lógica de negocio.
      * `/slices`: Estado global relacionado con esta funcionalidad (opcional).
      * `/types`: Definiciones de tipos de TypeScript.
      * `/__tests__`: Tests de esta funcionalidad.
  * `/hooks`: Hooks personalizados globales y reutilizables.
  * `/pages`: Componentes que representan las vistas principales de la aplicación. Se implementa carga diferida para optimizar rendimiento.
  * `/routes`: Configuración centralizada del enrutador. Se incluyen rutas protegidas para autenticación.
  * `/store`: Configuración del gestor de estado global cuando sea necesario.
  * `/contexts`: Proveedores de contexto para estados compartidos como tema o notificaciones.
  * `/lib`: Configuración de librerías externas como cliente HTTP o validación.
  * `/types`: Tipos y definiciones de TypeScript globales para el proyecto.
  * `/utils`: funciones de ayuda, constantes y validadores genéricos.
  * `/styles`: Estilos globales y configuración de temas.
  * `/locales`: Recursos para internacionalización.
  * `App.jsx`: Componente raíz de la aplicación.
  * `main.jsx`: Punto de entrada de la aplicación.

### 🌊 Flujo de Datos en Frontend (Diagrama Visual)

Para paralelizar con el backend, se muestra un flujo típico:

```mermaid
graph TD
    A[Usuario] --> B[Router]
    B --> C[Página]
    C --> D[Hook de Lógica]
    D --> E{Cache?}
    E -->|Hit| D
    E -->|Miss| F[Servicio API]
    F --> G[Cliente HTTP]
    G --> H[Interceptor]
    H --> I[Backend API]
    I --> H
    H --> G
    G --> F
    F --> D
    D --> J[Estado Global/Context]
    D --> C
    C --> K[Componentes Feature]
    K --> L[Componentes UI]
    L --> A
    
    style A fill:#e1f5ff
    style D fill:#fff4e1
    style J fill:#f0e1ff
    style L fill:#e8f5e9
```