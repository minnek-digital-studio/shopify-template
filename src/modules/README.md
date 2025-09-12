# TypeScript Guidelines

Let's keep all the JS assets to this path.

## Naming Conventions

### Naming classes

Use `PascalCase` for classes.

```ts
class YswProduct {
    constructor() {}
}

class YswGlobal {
    constructor() {}
}
```

### Naming functions, variables, methods, etc

Use `camelCase` for functions, variables, methods and others.

```ts
function getProduct() {}

const productPrice = () => {}
```

## Dynamic Template-Based JavaScript Loading

A new functionality has been added that allows importing JavaScript only in the templates that need it. This approach optimizes performance by loading only the necessary scripts for each page.

### File Structure

JavaScript modules should be organized in the `modules/layout` folder with template-specific naming:

```
modules/
└── layout/
    ├── global.ts          // Global scripts for all pages
    ├── product.ts         // Product page specific scripts
    ├── collection.ts      // Collection page specific scripts
    ├── index.ts           // Home page specific scripts
    └── [template-name].ts // Other template-specific scripts
```

### Generated Files

Following this structure will generate independent files with the naming convention:

- **Template-specific**: `ysw-layout-{template}.min.js`
- **Global**: `ysw-layout-global.min.js`

### Implementation in Shopify Theme

Add the following code at the end of the `<body>` tag in your `theme.liquid` file for dynamic script loading:

```liquid
<!-- Global scripts loaded on all pages -->
<script src="{{ 'ysw-layout-global.min.js' | asset_url }}" defer="defer" type="module"></script>

<!-- Template-specific scripts loaded dynamically -->
{%- assign ysw_script_file = 'ysw-layout-' | append: template.name | append: '.min.js' -%}
{%- if ysw_script_file | asset_url -%}
    <script src="{{ ysw_script_file | asset_url }}" defer="defer" type="module"></script>
{%- endif -%}
```

### Usage Guidelines

#### Global Scripts (`global.ts`)
Use this file for JavaScript functionality that needs to be available across all pages:
- Header/navigation functionality
- Footer interactions
- Cart functionality
- Global utilities and helpers
- Analytics tracking

#### Template-Specific Scripts
Create individual files for page-specific functionality:
- `product.ts` - Product page interactions (variant selection, add to cart, etc.)
- `collection.ts` - Collection page filtering, sorting, pagination
- `index.ts` - Homepage-specific features (hero sliders, featured products)
- `cart.ts` - Cart page functionality
- `account.ts` - Customer account features

### Benefits

1. **Performance Optimization**: Only loads JavaScript needed for the current page
2. **Better Code Organization**: Separates concerns by template/page type
3. **Reduced Bundle Size**: Smaller initial load, faster page rendering
4. **Maintainability**: Easier to locate and modify template-specific code
5. **Caching Efficiency**: Individual files can be cached separately

### Best Practices

- Keep global scripts minimal and only include truly global functionality
- Use descriptive names that match Shopify template names exactly
- Ensure proper error handling in template-specific modules
- Consider code splitting for large template-specific modules
- Use TypeScript interfaces and types for better code quality and maintenance