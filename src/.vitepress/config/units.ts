// ============================================================================
// CONFIGURACIÓN DE UNIDADES — Navegación y Contenidos
// ============================================================================
//
// 👤 EDITA ESTE ARCHIVO para definir los módulos/unidades del curso
//    y su navegación (navbar y sidebar).
//
// CONCEPTOS CLAVE:
//   Unidad (unit) — Un bloque de contenido con su propia navegación.
//                   Puede ser una sesión, un tema, un capítulo, etc.
//   Navbar        — Menú horizontal en la barra superior.
//   Sidebar       — Panel de navegación lateral izquierdo.
//   code          — Prefijo de URL de los archivos de esta unidad.
//                   Ejemplo: code = 'general' → los links apuntan a /general/...
//
// FLUJO RÁPIDO:
//   1. Crea los archivos .md en src/<code>/contenidos/ y src/<code>/ejercicios/
//   2. Añade los links aquí (en navbar y sidebar)
//   3. El sistema detecta todas las unidades automáticamente:
//        /<code>/ → carga el sidebar de esa unidad
//        /        → raíz sin sidebar (página de inicio)
//
// ============================================================================

import { DefaultTheme } from 'vitepress'
import type { NavGroup } from '../shared/navigation'

// ============================================================================
// 1. NAVBARS Y SIDEBARS
// ============================================================================
// Define aquí los ítems de navegación de cada unidad.
// Puedes definirlos inline dentro de UNITS o como constantes separadas
// (recomendado cuando el listado es largo).

// --- Navbar de la unidad principal ---
const baseNavbar: DefaultTheme.NavItem[] = [
  { text: '🏠 Inicio', link: '/' },
]

// --- Sidebar de la unidad principal ---
const baseSidebar: DefaultTheme.SidebarItem[] = [

  {
    text: '🎞️ Diapositivas',
    collapsed: false,
    items: [
      { text: 'Presentación', link: '/contenidos/2-diapositivas' }
    ]
  },
  {
    text: 'Ejemplos',
    collapsed: true,
    items: [
      { text: 'Guia didáctica', link: '/contenidos/1-guia-didactica-PI2' },
      { text: 'Combinación de temario', link: '/contenidos/3-ejemplo-combinacion-temario' },
      { text: 'Proyecto base', link: '/contenidos/4-proyecto-base' }

    ]
  },
]

// ============================================================================
// 2. REGISTRO DE UNIDADES
// ============================================================================
// Añade, elimina o modifica entradas para gestionar los módulos del curso.
//
// Propiedades de cada unidad:
//   id        — Identificador único (debe coincidir con la clave del objeto)
//   code      — Prefijo de URL. Los links del navbar/sidebar se prefijarán
//               automáticamente con /<code>/
//               Ejemplo: code='s1' → '/contenidos/intro' → '/s1/contenidos/intro'
//   title     — Nombre corto (usado en migas de pan y referencias internas)
//   fullTitle — Nombre completo (aparece en la pestaña del navegador)
//   siteTitle — Nombre en el sidebar (puede usar </br> para saltos de línea)
//   icon      — Emoji decorativo del módulo
//   navbar    — Ítems del menú superior de esta unidad
//   sidebar   — Ítems del panel lateral de esta unidad

export interface UnitConfig {
  id: string
  code: string
  title: string
  fullTitle: string
  siteTitle: string
  icon: string
  navbar: DefaultTheme.NavItem[]
  sidebar: DefaultTheme.SidebarItem[]
}

export const UNITS: Record<string, UnitConfig> = {

  // Página de inicio — sin navegación de curso. No suele necesitar cambios.
  root: {
    id: 'root',
    code: 'root',
    title: 'II JNE distancia y semipresencial',
    fullTitle: 'II Jornada Nacional de Educación a distancia y semipresencial',
    siteTitle: 'distancia &</br>semipresencial',
    icon: '📐',
    navbar: [{ text: '🏠 Inicio', link: '/' }],
    sidebar: []
  },

  // ──────────────────────────────────────────────────────────────────────────
  // Módulo / Unidad principal del curso.
  // Personaliza: title, fullTitle, siteTitle, y los ítems de navbar/sidebar.
  // ──────────────────────────────────────────────────────────────────────────
  MODULO: {
    id: 'MODULO',
    code: 'general',    // → archivos en src/general/
    title: 'II JNE distancia y semipresencial',
    fullTitle: 'II Jornada Nacional de Educación a distancia y semipresencial',
    siteTitle: 'distancia &</br>semipresencial',
    icon: '📘',
    navbar: baseNavbar,
    sidebar: baseSidebar
  },

  // Para añadir más unidades, consulta la guía completa con ejemplos en:
  // src/general/contenidos/4-modulos.md

}

// ============================================================================
// FUNCIONES DE ACCESO — No modificar
// ============================================================================

export function getAllUnitsArray(): UnitConfig[] {
  return Object.values(UNITS)
}

export function getUnitByCode(code: string): UnitConfig | undefined {
  return UNITS[code]
}

// ── Navbar dinámico por unidad (opcional) ────────────────────────────────
// Si el curso tiene múltiples sesiones/unidades, define aquí qué dropdown
// mostrar en el navbar según la URL activa.
// Ejemplo:
// export const unitNavbars: Record<string, NavGroup[]> = {
//   'general': [{ text: '📚 Módulos', items: [{ text: 'General', link: '/general/' }] }],
// }
export const unitNavbars: Record<string, NavGroup[]> = {}
