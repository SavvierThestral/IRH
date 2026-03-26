# IRH — Iberian Riding Horses · Design Document

## Brand Overview

**Product:** IRH - Iberian Riding Horses
**Tagline:** Selección de caballos ibéricos de alta competición — Murcia, España
**Tone:** Luxury equestrian. Dark, editorial, refined. Gold accents on warm ivory/near-black palette.

---

## Design System

### Color Palette
| Token | Hex | Usage |
|---|---|---|
| `--warm-white` | `#FDFBF7` | Page background |
| `--ivory` | `#F8F5EE` | Alternate section background |
| `--parchment` | `#EDE8DC` | Breadcrumb bars, subtle backgrounds |
| `--gold` | `#B8935A` | Primary accent — CTAs, badges, borders |
| `--gold-light` | `#D4AA78` | Hover states, italic headlines, eyebrows |
| `--gold-pale` | `#F0E4CA` | Filter tags, chip backgrounds |
| `--ink` | `#1C1B18` | Near-black — headings, dark sections, navbar |
| `--charcoal` | `#2E2D29` | Secondary dark |
| `--stone` | `#6B6860` | Body text |
| `--stone-light` | `#A09D96` | Meta, labels, disabled states |
| `--moss` | `#4A5240` | Decorative accent (rarely used) |
| `--border` | `rgba(28,27,24,0.12)` | Subtle dividers |
| `--border-strong` | `rgba(28,27,24,0.22)` | Card borders, inputs |

### Typography
- **Display / Headings:** Playfair Display (serif) — weights 400, 500, 700 + italic variants
  - Tracking: `-0.02em` to `-0.03em` on large headings
  - Italic `<em>` in gold-light for emphasis within headlines
- **Body / UI:** Jost (sans-serif) — weights 200, 300, 400, 500, 600
  - Body line-height: 1.75–1.9
  - Uppercase labels: `letter-spacing: 0.16em–0.32em`, `font-size: 0.62–0.78rem`

### Logo
SVG horse silhouette (line-drawn, minimal paths) + text "IRH - Iberian Riding Horses" in Playfair Display 500.

### Interaction Patterns
- Hover: `transform: translateY(-1px)` on buttons; `scale(1.06)` on card images
- Card overlay: dark `rgba(28,27,24,0.55)` fades in on hover with centered ghost CTA
- Animations on `opacity` + `transform` only (no `transition-all`)
- Easing: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`

---

## Page 1 — Home (`index.html`)

### Navbar
- Fixed, full-width, `height: 80px`
- **Default state (top of page):** Transparent background; logo and nav links in white/rgba-white
- **Scrolled state:** Frosted glass (`rgba(253,251,247,0.95)` + `backdrop-filter: blur(12px)`) + bottom border; logo and links turn dark ink
- Items: Logo (left) · Nav links: Home · Catálogo · Servicios · Contacto (right)
- "Contacto" is a ghost CTA: gold border + gold text, fills gold on hover
- Language switcher: ES | EN toggle buttons, active tab has gold background

### Hero Section
- **Full-viewport (100vh)**, full-bleed background image of an Iberian horse
- **Gradient overlay:** left-to-right, `rgba(8,6,4,0.92)` at 0% fading to transparent at 100%; + bottom-to-top dark vignette
- Content positioned left: `padding-left: 5rem`
  - Gold eyebrow: `"MURCIA · ESPAÑA"` in uppercase, `letter-spacing: 0.32em`
  - H1 (~5.5rem Playfair): `"Caballos Ibéricos"` + italic `"de Alta Competición"` in gold-light
  - Subtitle (~1rem Jost 300, rgba-white 0.7): short tagline about the stud
  - Two CTAs side by side:
    - Primary: gold filled button with arrow icon — `"Ver Catálogo"`
    - Ghost: underline-only white button — `"Conoce la Hacienda"`
- Bottom-left scroll indicator: small "Scroll" label + animated vertical gold line (48px tall)

### Featured Horses Section
- Background: `--warm-white`; `padding: 7rem 3rem`
- Centered header: eyebrow + `"Caballos Destacados"` title + subtitle
- **Filter bar:** row of pill/outlined buttons — Todos · Doma · Salto · PRE · Lusitano
  - Active state: `background: --ink`, white text; hover: gold border + gold text
- **3-column horse card grid** (gap: 2px — very tight, editorial)
- **Horse Card:**
  - Image (4:3 aspect ratio) with gold discipline badge top-left (`"DOMA"`, `"SALTO"`)
  - On hover: image scales 1.06 + dark overlay appears with `"Consultar"` ghost button (white border, fills gold on hover)
  - Card body (bordered, border-top none):
    - Horse name in Playfair 1.45rem
    - Meta in stone-light uppercase (breed · age · sex)
    - Short description in Jost 300
    - Footer row: gold tag text (left) + heart wishlist icon (right)

### Services Section
- Background: `--ivory`; `padding: 7rem 3rem`
- **2-column layout:** Text left, image right
- Left column:
  - Eyebrow + `"Nuestros Servicios"` title + body text
  - List of 3–4 service items, each with:
    - Dark ink square icon box (46×46px) with gold-light SVG icon (stroke-only, 1.5px)
    - Service title (Jost 500) + description (Jost 300)
  - Services: Venta de Caballos · Gestión y Entrenamiento · Preparación para Competición · Transporte Internacional
- Right column:
  - Portrait-ratio image (3:4)
  - Overlapping dark quote block, bottom-left: italic serif quote in rgba-white + gold author citation

### Testimonial Section
- Full-bleed image background with `rgba(28,27,24,0.88)` overlay
- `padding: 8rem 3rem`; centered content, max-width 760px
- Large decorative `"` in Playfair gold (opacity 0.4)
- Testimonial text in Playfair italic ~2.2rem, rgba-white 0.92
- Author row: circular avatar (56px, gold border 2px) + name (white) + title (gold uppercase)

### About Section
- Background: `--warm-white`; `padding: 7rem 3rem`
- **2-column layout:** Image left, text right
- Left: main image (85% width, 3:4 portrait) + overlapping accent square image (bottom-right, 48% width, white border)
- Right: eyebrow + `"Sobre la Hacienda"` title + long body text + CTA link

### Contact Section
- Dark ink background
- Centered form or two-column contact info

### Footer
- Background: `--ink`
- Centered text, rgba-white 0.5
- Gold links

---

## Page 2 — Horse Detail (`caballo.html`)

### Navbar
- **Sticky** (always visible), always in solid frosted-glass state
- `height: 72px`, `background: rgba(253,251,247,0.97)`, `backdrop-filter: blur(12px)`, bottom border
- Same logo + nav links + language switcher as index

### Hero Image
- **70vh** full-width image, `min-height: 420px`
- Dark ink background base
- Gradient overlay: bottom-to-top, `rgba(28,27,24,0.85)` at 0% → transparent at 100%
- **Overlaid bottom-left label:**
  - Gold eyebrow: `"PURA RAZA ESPAÑOLA"` uppercase
  - Horse name in Playfair ~4.5rem, warm-white, `letter-spacing: -0.02em`
  - Breed subtitle in Jost 300, rgba-white 0.65, uppercase, `letter-spacing: 0.08em`

### Breadcrumb Bar
- Background: `--parchment`; `padding: 0.85rem 3rem`
- Uppercase stone text: `Inicio › Catálogo › [Horse Name]`
- Gold active item; gold hover on links

### Main Content — 2 Column Grid
- Max-width 1100px, centered, `gap: 5rem`
- **Left column (1fr):**
  - H2 horse name in Playfair ~2.8rem
  - Breed label in stone-light uppercase below
  - **Specs grid (3 columns, 1px gap, bordered):**
    - Cells: Edad · Altura · Raza · Sexo · Disciplina · Nivel
    - Each cell: tiny uppercase label (stone-light) + value in Jost 500 (ink); special values in gold
  - Section eyebrow (`"DESCRIPCIÓN"`) + long descriptive paragraphs in Jost 300, line-height 1.9
  - Additional sections: Genealogía, Videos, Documentación
- **Right column (340px, sticky top: 88px):**
  - **Contact card** (dark ink background, `padding: 2.5rem 2rem`):
    - Gold tag badge top: `"DISPONIBLE"`
    - H3: `"¿Interesado en este caballo?"` in Playfair warm-white
    - Short paragraph in rgba-white 0.6
    - Full-width gold CTA button: `"Solicitar Información"` + icon
    - Thin divider
    - Location row: gold pin SVG icon + address text in rgba-white 0.55

### Footer
- Same as index — dark ink, centered, minimal

---

## Page 3 — Catalog (`catalogo.html`)

### Navbar
- Identical to caballo.html — sticky, always solid

### Page Header
- Background: `--ink` (near-black)
- `padding: 4rem 3rem 3.5rem`
- **Radial gradient texture overlay:** warm gold radial at 80% opacity-12%, second subtler at 10%
- Breadcrumb: `Inicio › Catálogo` in stone-light, gold hover
- Page title in Playfair ~3.5rem warm-white, italic `"en Venta"` portion in gold-light
- Subtitle in Jost 300, rgba-white 0.55
- Results count: `"Mostrando X caballos"` — count in gold-light

### Main Layout — 2 Column
- Max-width 1300px, `grid-template-columns: 280px 1fr`, `gap: 3rem`
- `padding: 3rem 3rem 6rem`

### Sidebar Filters (280px, sticky top: 88px)
- White background, `border: 1px solid --border`
- **Header row:** `"FILTROS"` label (uppercase ink 600) + `"Limpiar"` gold text button
- **Collapsible filter groups** (click to open/close, chevron rotates):
  - Each group: header with label + chevron + body with options
  - Disciplines: checkboxes (gold when checked with white checkmark) — Doma Clásica · Doma Vaquera · Salto · Rejoneo · Completo
  - Breed: PRE · Lusitano · Anglo-Árabe · Cruzado
  - Age range: range slider (`accent-color: gold`)
  - Sex: Macho · Hembra · Castrado
  - Level: Básico · Medio · Alto · Competición Internacional
- Custom checkbox: 15px square, gold fill on checked state

### Catalog Toolbar
- Above the grid, below layout split
- Left: **Active filter tags** — pill chips in `--gold-pale` with `×` icon, ink text uppercase
- Right: Sort dropdown — `"Ordenar por:"` label + `<select>` with border, gold focus outline

### Horse Grid (3 columns, 1.8rem gap)
- Cards have white background, soft layered shadow (`0 2px 12px rgba(...0.07), 0 1px 3px`)
- On hover: `translateY(-4px)` + deeper shadow
- **Horse Card:**
  - Image (4:3 aspect) with:
    - Gold discipline badge top-left
    - Dark translucent gender badge top-right (`rgba(28,27,24,0.75)` + `backdrop-filter: blur(4px)`)
    - On hover: dark overlay + centered `"Consultar"` ghost button
  - Card body (bordered, border-top none, `padding: 1.3rem 1.5rem 1.6rem`):
    - Horse name in Playfair 1.3rem
    - Meta: stone-light uppercase (breed · year · sex)
    - Level tag: outlined bordered chip
    - Short description in Jost 300, line-height 1.7
    - Footer row: gold price/status label (left) + arrow link to detail page (right)

### Responsive Behavior
- Below 900px: sidebar collapses (likely hidden/drawer)
- Grid drops to 2 columns, then 1 at mobile
- Navbar simplifies on mobile (some links hidden)

---

---

## Real Horse Catalog Data

> Todos ubicados en: **San Pedro del Pinatar, Murcia, España**
> Aeropuerto más próximo: **Alicante — 45 min en coche**
> Precio: **A consultar**

| Nombre | Género | Raza | Capa | Nacimiento | Talla | Estado | Piro | Nivel de Doma |
|---|---|---|---|---|---|---|---|---|
| SANTO | Macho | PRE | Tordo | 2020 | 1.63 m | Entero | Positivo | Nivel 4 |
| EVORA | Yegua | PRE | Tordo | 2021 | 1.59 m | — | Negativo | Nivel 2 |
| LIMEÑO | Semental | PRE | Castaño | 2018 | 1.74 m | Entero | Negativo | Nivel 4 · Passage |
| HALCONERO | Macho | PRE | Castaño | 2015 | 1.67 m | Castrado | Negativo | San Jorge · Piaffe · Passage |
| UMERO | Macho | PRE | Tordo | 2019 | 1.66 m | Entero | Negativo | Nivel 7 años / San Jorge |
| FESTINA | — | PRE | — | — | — | — | — | (datos pendientes) |

### Archivos multimedia por caballo
| Nombre | Imágenes | Videos |
|---|---|---|
| SANTO | — | 16 clips (piaffe, galope, cambios, trabajo de doma) |
| UMERO | — | 14 clips (trabajo completo) |
| LIMEÑO | 2 fotos (`limeño1.jpeg`, `limeño2.jpeg`) | 1 video |
| HALCONERO | 2 fotos (`Halconero1.jpeg`, `Halconero2.jpeg`) | 1 video |
| EVORA | — | — |
| FESTINA | — | — |

---

## Navigation Flow
```
index.html (Home)
    ├── [Ver Catálogo] → catalogo.html
    └── [Horse Card] → caballo.html?id=X

catalogo.html (Catalog)
    └── [Horse Card / Consultar] → caballo.html?id=X

caballo.html (Detail)
    └── Breadcrumb → index.html / catalogo.html
```
