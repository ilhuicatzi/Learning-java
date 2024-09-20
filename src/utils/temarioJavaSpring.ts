export interface Temario {
    id: number;
    url_modulo: string;
    modulo: string;
    topics: Topic[];
}

interface Topic {
    id: string;
    title: string;
    content: string[];
    complete: boolean;
}

export const TemarioJava: Temario[] = [
  {
    id: 1,
    url_modulo: "/java/modulo-1",
    modulo: "Módulo 1: Fundamentos de Java",
    topics: [
      {
        id: "m1t1",
        title: "Introducción a la programación orientada a objetos (OOP)",
        content: [
          "Conceptos básicos de OOP",
          "Clases y objetos",
          "Atributos y métodos",
          "Encapsulamiento, herencia y polimorfismo",
        ],
        complete: true,
      },
      {
        id: "m1t2",
        title: "Sintaxis básica de Java",
        content: [
          "Variables y tipos de datos",
          "Operadores y estructuras de control",
          "Métodos y parámetros",
        ],
        complete: false,
      },
      {
        id: "m1t3",
        title: "Clases y objetos en java",
        content: [
          "Constructores",
          "Métodos estáticos y variables",
          "Sobrecarga de métodos",
        ],
        complete: false,
      },
      {
        id: "m1t4",
        title: "Manejo de excepciones",
        content: [
          "try - catch - finally",
          "Excepciones verificadas y no verificadas",
          "Clausulas throw y throws",
        ],
        complete: false,
      },
    ],
  },
  {
    id: 2,
    url_modulo: "/java/modulo-2",
    modulo: "Módulo 2: Profundización en la OOP en Java",
    topics: [
      {
        id: "m2t1",
        title: "Herencia",
        content: [
          "Superclases y subclases",
          "Sobrescritura de métodos",
          "Clases abstractas y métodos abstractos",
        ],
        complete: false,
      },
      {
        id: "m2t2",
        title: "Interfaces",
        content: [
          "Definición e implementación",
          "Herencia múltiple a través de interfaces",
          "Interfaces funcionales (introducción a lambdas)",
        ],
        complete: false,
      },
      {
        id: "m2t3",
        title: "Polimorfismo",
        content: [
          "Polimorfismo en tiempo de compilación y tiempo de ejecución",
          "Uso de instanceof y casting",
        ],
        complete: false,
      },
    ],
  },
  {
    id: 3,
    url_modulo: "/java/modulo-3",
    modulo: "Módulo 3: Manipulación de colecciones y genéricos",
    topics: [
      {
        id: "m3t1",
        title: "Colecciones en Java",
        content: [
          "List, Set, Map (ArrayList, HashSet, HashMap)",
          "Iteradores y for-each",
        ],
        complete: false,
      },
      {
        id: "m3t2",
        title: "Generics",
        content: [
          "Definición y uso de tipos genéricos",
          "Clases, métodos y interfaces genéricas",
        ],
        complete: false,
      },
    ],
  },
  {
    id: 4,
    url_modulo: "/java/modulo-4",
    modulo: "Módulo 4: Manejo avanzado de archivos y flujos",
    topics: [
      {
        id: "m4t1",
        title: "Entrada y salida (I/O) en Java",
        content: ["Streams y Readers/Writers", "Serialización"],
        complete: false,
      },
      {
        id: "m4t2",
        title: "Manejo de archivos",
        content: [
          "Clases File, Path, Files",
          "Operaciones de lectura y escritura",
        ],
        complete: false,
      },
    ],
  },
  {
    id: 5,
    url_modulo: "/java/modulo-5",
    modulo: "Módulo 5: Concurrencia en Java",
    topics: [
      {
        id: "m5t1",
        title: "Hilos y procesos",
        content: [
          "Creación de hilos (Thread y Runnable)",
          "Sincronización de hilos",
        ],
        complete: false,
      },
      {
        id: "m5t2",
        title: "Java Executors",
        content: ["Pool de hilos", "Futures y Callables"],
        complete: false,
      },
    ],
  },
  {
    id: 6,
    url_modulo: "/java/modulo-6",
    modulo: "Módulo 6: Programación funcional en Java",
    topics: [
      {
        id: "m6t1",
        title: "Expresiones Lambda",
        content: ["Introducción y uso"],
        complete: false,
      },
      {
        id: "m6t2",
        title: "Streams API",
        content: [
          "Filtrado, transformación y reducción de colecciones",
          "Manejo de valores nulos con Optional",
        ],
        complete: false,
      },
      {
        id: "m6t3",
        title: "Optional",
        content: ["Manejo de valores nulos con Optional"],
        complete: false,
      },
    ],
  },
  {
    id: 7,
    url_modulo: "/java/modulo-7",
    modulo: "Módulo 7: Bases de datos con Java",
    topics: [
      {
        id: "m7t1",
        title: "JDBC (Java Database Connectivity)",
        content: ["Conexión a bases de datos", "CRUD con JDBC"],
        complete: false,
      },
      {
        id: "m7t2",
        title: "Prepared Statements",
        content: ["Prepared Statements"],
        complete: false,
      },
    ],
  },
  {
    id: 8,
    url_modulo: "/java/modulo-8",
    modulo: "Módulo 8: Buenas prácticas y patrones de diseño en Java",
    topics: [
      {
        id: "m8t1",
        title: "Patrones de diseño más comunes",
        content: ["Singleton, Factory, Observer"],
        complete: false,
      },
      {
        id: "m8t2",
        title: "Principios SOLID",
        content: ["Pruebas unitarias", "Introducción a JUnit y Mockito"],
        complete: false,
      },
    ],
  },
];


export const TemarioSpringBoot: Temario[] = [
  {
    id: 1,
    url_modulo: "/spring-boot/modulo-1",
    modulo: "Módulo 1: Introducción y Configuración Básica",
    topics: [
      {
        id: "m1t1",
        title: "¿Qué es Spring y Spring Boot?",
        content: [
          "Historia y evolución de Spring",
          "Diferencias entre Spring y Spring Boot",
          "Ventajas de usar Spring Boot",
        ],
        complete: false,
      },
      {
        id: "m1t2",
        title: "Configuración del Entorno",
        content: [
          "Instalación de Java, Maven/Gradle",
          "Creación de proyectos con Spring Initializr",
          "Configuración del IDE (IntelliJ, Eclipse)",
        ],
        complete: false,
      },
      {
        id: "m1t3",
        title: "Estructura de un Proyecto Spring Boot",
        content: [
          "Archivos de configuración (`application.properties`, `application.yml`)",
          "Componentes principales de un proyecto Spring Boot",
        ],
        complete: false,
      },
    ],
  },
  {
    id: 2,
    url_modulo: "/spring-boot/modulo-2",
    modulo: "Módulo 2: Fundamentos de Spring Boot",
    topics: [
      {
        id: "m2t1",
        title: "Anotaciones en Spring Boot",
        content: [
          "@SpringBootApplication",
          "@Component, @Service, @Repository, @Controller",
          "Uso de @Autowired para la inyección de dependencias",
        ],
        complete: false,
      },
      {
        id: "m2t2",
        title: "Inyección de Dependencias (DI) e Inversión de Control (IoC)",
        content: [
          "Formas de inyección (constructor, setter, field)",
          "Ciclo de vida y alcance de Beans",
        ],
        complete: false,
      },
      {
        id: "m2t3",
        title: "Gestión de Configuración en Spring Boot",
        content: [
          "Externalización de configuración",
          "Perfiles en Spring Boot",
          "@ConfigurationProperties",
        ],
        complete: false,
      },
    ],
  },
  {
    id: 3,
    url_modulo: "/spring-boot/modulo-3",
    modulo: "Módulo 3: Desarrollo de APIs RESTful",
    topics: [
      {
        id: "m3t1",
        title: "Introducción a REST y Creación de Endpoints",
        content: [
          "Fundamentos de REST",
          "@GetMapping, @PostMapping, @PutMapping, @DeleteMapping",
          "Documentación con Swagger",
        ],
        complete: false,
      },
      {
        id: "m3t2",
        title: "Manejo de Solicitudes y Respuestas",
        content: [
          "Uso de @RequestBody y @RequestParam",
          "ResponseEntity para control avanzado de respuestas HTTP",
        ],
        complete: false,
      },
      {
        id: "m3t3",
        title: "Validación de Entradas",
        content: [
          "Validaciones con @Valid y anotaciones como @NotNull, @Size",
          "Validaciones personalizadas",
          "Manejo de excepciones con @ControllerAdvice",
        ],
        complete: false,
      },
    ],
  },
  {
    id: 4,
    url_modulo: "/spring-boot/modulo-4",
    modulo: "Módulo 4: Acceso a Datos con Spring Data JPA",
    topics: [
      {
        id: "m4t1",
        title: "Introducción a Spring Data JPA",
        content: [
          "Configuración de base de datos",
          "Repositorios y CRUD",
        ],
        complete: false,
      },
      {
        id: "m4t2",
        title: "Consultas Personalizadas",
        content: [
          "Consultas con @Query",
          "Uso de consultas nativas",
        ],
        complete: false,
      },
      {
        id: "m4t3",
        title: "Manejo de Transacciones",
        content: [
          "Uso de @Transactional",
          "Propagación y aislamiento de transacciones",
        ],
        complete: false,
      },
    ],
  },
  {
    id: 5,
    url_modulo: "/spring-boot/modulo-5",
    modulo: "Módulo 5: Seguridad en Spring Boot",
    topics: [
      {
        id: "m5t1",
        title: "Introducción a Spring Security",
        content: [
          "Autenticación básica y manejo de permisos",
          "Configuración de Spring Security con anotaciones",
        ],
        complete: false,
      },
      {
        id: "m5t2",
        title: "JWT (JSON Web Tokens)",
        content: [
          "Generación y validación de JWT",
          "Uso de JWT en autenticación y autorización",
        ],
        complete: false,
      },
      {
        id: "m5t3",
        title: "Roles y Control de Acceso",
        content: [
          "Manejo de roles en Spring Security",
          "Control de acceso basado en roles",
        ],
        complete: false,
      },
    ],
  },
  {
    id: 6,
    url_modulo: "/spring-boot/modulo-6",
    modulo: "Módulo 6: Integración con Otros Servicios",
    topics: [
      {
        id: "m6t1",
        title: "Consumo de APIs REST Externas",
        content: [
          "Uso de RestTemplate",
          "Uso de WebClient (Reactor)",
        ],
        complete: false,
      },
      {
        id: "m6t2",
        title: "Mensajería Asincrónica",
        content: [
          "Integración con RabbitMQ",
          "Kafka para procesamiento de mensajes",
        ],
        complete: false,
      },
    ],
  },
  {
    id: 7,
    url_modulo: "/spring-boot/modulo-7",
    modulo: "Módulo 7: Pruebas en Spring Boot",
    topics: [
      {
        id: "m7t1",
        title: "Pruebas Unitarias",
        content: [
          "Introducción a JUnit y Mockito",
          "Mocking de dependencias",
        ],
        complete: false,
      },
      {
        id: "m7t2",
        title: "Pruebas de Integración",
        content: [
          "Pruebas con MockMvc para controladores",
          "Test de servicios REST",
        ],
        complete: false,
      },
    ],
  },
  {
    id: 8,
    url_modulo: "/spring-boot/modulo-8",
    modulo: "Módulo 8: Despliegue y Monitorización de Aplicaciones",
    topics: [
      {
        id: "m8t1",
        title: "Empaquetado y Despliegue",
        content: [
          "Creación de JARs y WARs",
          "Despliegue en servidores como Tomcat o Jetty",
        ],
        complete: false,
      },
      {
        id: "m8t2",
        title: "Monitorización con Spring Boot Actuator",
        content: [
          "Uso de Actuator para monitorización",
          "Integración con Prometheus y Grafana",
        ],
        complete: false,
      },
    ],
  },
];
