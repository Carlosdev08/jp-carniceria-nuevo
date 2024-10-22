# La Marina - Carnicería & Pescadería 🥩🐟

Una aplicación web moderna para una carnicería y pescadería, construida con Next.js 13, Tailwind CSS, y Supabase.

## Características ✨

### 🔐 Autenticación
- Inicio de sesión con email/contraseña
- Autenticación con Google
- Protección de rutas con middleware
- Gestión del estado de autenticación
- Cierre de sesión

### 🛒 Carrito de Compra
- Añadir/eliminar productos
- Actualizar cantidades
- Carrito persistente con Zustand
- Cálculo automático del total
- Indicador de cantidad en el icono del carrito
- Toast notifications para feedback

### 💼 Gestión de Productos
- Catálogo de productos organizado por categorías
- Imágenes optimizadas con Next.js Image
- Precios formateados
- Diseño responsive

### 🎨 UI/UX
- Diseño moderno y profesional
- Tema claro/oscuro
- Componentes reutilizables de shadcn/ui
- Interfaz responsive
- Animaciones suaves
- Iconos de Lucide React

## Tecnologías Utilizadas 🛠

- **Frontend:**
  - Next.js 13
  - React 18
  - Tailwind CSS
  - shadcn/ui
  - Lucide React icons

- **Estado y Persistencia:**
  - Zustand (gestión del carrito)
  - Next.js Server Components
  - Client Components para interactividad

- **Backend y Autenticación:**
  - Supabase (base de datos y autenticación)
  - Middleware de autenticación

## Estructura del Proyecto 📁

```
├── app/
│   ├── login/
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── auth/
│   │   └── auth-form.tsx
│   ├── cart/
│   │   ├── cart-item.tsx
│   │   └── cart-sheet.tsx
│   ├── product/
│   │   └── product-card.tsx
│   ├── ui/
│   │   └── [shadcn components]
│   ├── footer.tsx
│   ├── navigation.tsx
│   └── theme-provider.tsx
├── lib/
│   ├── store.ts
│   ├── supabase.ts
│   └── utils.ts
└── middleware.ts
```

## Configuración Inicial 🚀

1. Clona el repositorio:
```bash
git clone [url-del-repositorio]
cd la-marina
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
Crea un archivo `.env.local` y añade:
```env
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima_de_supabase
```

4. Configura Supabase:
   - Crea un nuevo proyecto en Supabase
   - Habilita la autenticación con email y Google
   - Configura las tablas necesarias para productos y pedidos

5. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## Estructura de la Base de Datos 📊

### Tabla: products
```sql
create table products (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  description text,
  price decimal(10,2) not null,
  category text not null,
  image_url text,
  stock int not null default 0,
  created_at timestamp with time zone default timezone('utc'::text, now())
);
```

### Tabla: orders
```sql
create table orders (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users not null,
  status text not null default 'pending',
  total decimal(10,2) not null,
  created_at timestamp with time zone default timezone('utc'::text, now())
);
```

### Tabla: order_items
```sql
create table order_items (
  id uuid default uuid_generate_v4() primary key,
  order_id uuid references orders not null,
  product_id uuid references products not null,
  quantity int not null,
  price decimal(10,2) not null
);
```

## Componentes Principales 🧩

### Server Components
- `app/page.tsx`: Página principal con listado de productos
- `app/login/page.tsx`: Página de inicio de sesión

### Client Components
- `components/auth/auth-form.tsx`: Formulario de autenticación
- `components/cart/cart-sheet.tsx`: Panel lateral del carrito
- `components/product/product-card.tsx`: Tarjeta de producto
- `components/navigation.tsx`: Barra de navegación

## Estado Global 🌍

Utilizamos Zustand para gestionar el estado del carrito:
- Persistencia en localStorage
- Acciones para añadir/eliminar productos
- Cálculo automático del total

## Seguridad 🔒

- Middleware de autenticación para proteger rutas
- Validación de sesiones con Supabase
- Redirecciones automáticas
- Protección CSRF incorporada

## Próximas Mejoras 🚀

- [ ] Implementar proceso de checkout
- [ ] Añadir historial de pedidos
- [ ] Implementar sistema de búsqueda
- [ ] Añadir filtros por categoría
- [ ] Implementar sistema de reseñas
- [ ] Añadir panel de administración
- [ ] Implementar notificaciones en tiempo real
- [ ] Añadir sistema de cupones

## Contribuir 🤝

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia 📝

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.