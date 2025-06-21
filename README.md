# 🛍️ Product Inventory App

A modern and responsive Product Inventory application built with **Next.js**, **TypeScript**, and **Tailwind CSS**

Live Preview: [🔗 View Deployed App](https://your-vercel-link.vercel.app)  
GitHub Repo: [🔗 View on GitHub](https://github.com/Nurmurad32/product-inventory.git)

---

## 📌 Features

### ✅ Product List Page
- Displayed in a responsive **table layout**
- **Pagination** (10 products per page)
- **Search bar** to filter by title or description
- **Sorting** by:
  - Price (asc/desc)
  - Title (asc/desc)
- **Filtering** options:
  - By Category (multi-select)
  - By Price Range (predefined buckets)
- **Responsive** sidebar/collapsible filter panel
- Highlighted active filters

### ✅ Product Details Page
- Large product image with **thumbnail switching**
- Title, Price, Description, and Category
- Clean and modern layout
- Back navigation and breadcrumbs

### ✅ Preview Page (SEO-friendly)
- SSR-rendered page (`/product/[id]/preview`)
- Optimized with `generateMetadata()` for:
  - `<title>`, `<meta description>`

---

## 🔧 Tech Stack

- **Next.js **
- **TypeScript**
- **Tailwind CSS**
- **Platzi Fake Store API** (`https://fakeapi.platzi.com/en/rest/products/`)
- **Vercel** for deployment

---

## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Nurmurad32/product-inventory.git
cd product-inventory
