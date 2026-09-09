# ⌚ WatchFolio - Personal Watchboard

A responsive and modern personal watchboard built with **React**, **Vite**, **Tailwind CSS**, and **Supabase**.

WatchFolio is a personal watch discovery and reference platform created to keep interesting watches organized in one place. It combines official product images, real-life images, product specifications, variants, and video references into a single interface.

The project started as a frontend learning project using static JavaScript data and was later connected to a **Supabase PostgreSQL database**, allowing watch data to be fetched dynamically instead of being hard-coded into the application.

🔗 **Live Demo:** https://wilddeath1.github.io/WatchFolio/

## ✨ Features

* ⌚ Personal watchboard for organizing watches
* 🗄️ Watch data stored in a Supabase PostgreSQL database
* 🔄 Dynamic data fetching from Supabase
* 📱 Responsive desktop and mobile layout
* 🧩 Reusable React component architecture
* 🖼️ Official product image and real-life image support
* 🎨 Variant image support for different watch configurations
* 🎥 YouTube and Instagram media support
* 👀 Full-screen watch viewer
* 📊 Detailed watch specifications
* ◀️▶️ Media navigation with previous/next controls
* 🔢 Media counter for multiple images and videos
* 🔀 Switching between IRL, Variant, and Video media
* ⏳ Skeleton loading states while fetching data
* 🌙 Light and dark theme support
* 🎨 Tailwind CSS utility-based styling
* 📱 Responsive grid layout across multiple breakpoints
* 🔒 Row Level Security (RLS) for database access
* 🔐 Environment variables for Supabase configuration

## 🛠️ Tech Stack

* **React**
* **JavaScript**
* **Vite**
* **Tailwind CSS**
* **Supabase**
* **PostgreSQL**
* **Lucide React**

## 📂 Project Structure

The project follows a component-based architecture where the gallery, viewer, layout, and individual UI responsibilities are separated into reusable components.

```text
src/
├── components/
│   ├── gallery/
│   │   ├── GalleryLayout.jsx
│   │   ├── GalleryHeader.jsx
│   │   ├── GalleryGrid.jsx
│   │   ├── GalleryCard.jsx
│   │   └── GallerySkeleton.jsx
│   │
│   ├── viewer/
│   │   ├── WatchViewer.jsx
│   │   ├── ViewerHeader.jsx
│   │   ├── MediaArea.jsx
│   │   ├── InfoGrid.jsx
│   │   ├── MediaControls.jsx
│   │   └── FamilySection.jsx
│   │
│   └── layouts/
│       ├── Navbar.jsx
│       └── Footer.jsx
│
├── lib/
│   └── supabase.js
│
├── App.jsx
└── main.jsx
```

## 🧠 Concepts Practiced

This project was built to strengthen understanding of modern React development and introduce backend-connected frontend applications.

### React Fundamentals

* Functional Components
* Props
* Component Reusability
* State Management with `useState`
* Side Effects with `useEffect`
* Event Handling
* Conditional Rendering
* List Rendering using `.map()`
* Data-driven UI rendering
* Parent-to-child data flow
* Props drilling
* Component composition

The gallery cards are generated dynamically from database data rather than being manually created.

### State Management

React state is used to control different parts of the interface, including:

* Whether the watch viewer is open
* Which watch is currently selected
* Which media type is being viewed
* Which media item is currently displayed
* Whether watch data is currently loading
* The watches retrieved from the database

For example, the gallery maintains the selected watch ID rather than storing the entire watch object separately. The selected watch is then derived from the current watch data.

### Data Fetching

Watch data is fetched asynchronously from Supabase using the Supabase JavaScript client.

The application handles the basic data lifecycle:

```text
Component mounts
      ↓
Fetch data from Supabase
      ↓
Loading state
      ↓
Data received
      ↓
Store data in React state
      ↓
Render watch cards
```

This replaces the original static JavaScript watch data with a cloud-hosted database.

### Conditional Rendering

Conditional rendering is used throughout the application for:

* Opening and closing the watch viewer
* Displaying skeleton cards while data loads
* Showing watch data after loading
* Displaying different media types
* Showing previous/next media controls
* Handling unavailable media

### Responsive Design

The interface is designed to adapt across desktop and mobile screen sizes using Tailwind CSS responsive utilities.

The gallery uses different column counts depending on the viewport:

```text
< 350px     → 1 column
350px+      → 2 columns
md          → 3 columns
lg          → 4 columns
2xl         → 5 columns
```

A custom `xs` breakpoint is also defined using Tailwind CSS v4.

### Tailwind CSS

Tailwind CSS is used for:

* Responsive layouts
* Flexbox and Grid
* Spacing
* Typography
* Colors
* Borders
* Shadows
* Hover states
* Transitions
* Animations
* Dark mode styling

The project also uses custom CSS variables mapped into Tailwind's theme system to maintain a consistent design system across light and dark themes.

### Loading States

The application uses skeleton loading cards instead of displaying an empty gallery while the database request is in progress.

```text
isLoading = true
      ↓
GallerySkeleton components
      ↓
Supabase request completes
      ↓
isLoading = false
      ↓
GalleryCard components
```

This provides a better user experience when database requests take longer to complete.

## 🗄️ Supabase & Database

WatchFolio uses **Supabase** as its backend and PostgreSQL database.

The `watches` table stores the information required to display each watch.

```text
watches
├── id
├── brand
├── model
├── price
├── size
├── glass
├── case
├── bracelet
├── movement
├── waterResistance
├── dialColor
├── variantImages[]
├── irlImages[]
├── videoUrls[]
└── familyId
```

The image and video fields use PostgreSQL `text[]` arrays so each watch can contain multiple media references.

### Row Level Security

Row Level Security (RLS) is enabled on the database.

The current public access policy allows visitors to:

* Read watch data

Public visitors cannot:

* Insert watches
* Update watches
* Delete watches

This allows the current application to function as a public read-only watchboard while keeping write operations restricted.

### Environment Variables

Supabase connection details are stored in environment variables rather than directly inside the source code.

```text
VITE_SUPABASE_URL
VITE_SUPABASE_PUBLISHABLE_KEY
```

The environment file is excluded from Git using `.gitignore`.

## 🎥 Media Handling

WatchFolio supports three media categories:

* 🖼️ **IRL** — real-life photographs of the watch
* 🎨 **Variant** — official product images and different configurations
* 🎥 **Video** — external YouTube and Instagram media

YouTube URLs are converted into embeddable URLs when displayed inside the viewer.

The viewer dynamically selects the appropriate media array based on the currently selected media type.

## 👀 Watch Viewer

Clicking a watch card opens a full-screen viewer.

The viewer is divided into separate components:

```text
WatchViewer
├── ViewerHeader
├── MediaArea
├── InfoGrid
├── MediaControls
└── FamilySection
```

This keeps the viewer modular instead of putting all of its UI and logic inside a single large component.

The viewer also prevents the background page from scrolling while it is open.

## 🎨 Theme System

WatchFolio supports both light and dark themes.

The color system is built using CSS custom properties and mapped into Tailwind CSS.

This allows the same semantic classes to work across both themes:

```text
bg-background
bg-card
bg-surface
text-heading
text-text
text-muted
border-border
bg-primary
```

Instead of hard-coding different colors throughout individual components, the theme variables control the overall appearance.

## 📌 Current Functionality

* Supabase-powered watch database
* Dynamic watch gallery
* Responsive watch card grid
* Full-screen watch viewer
* IRL image viewing
* Variant image viewing
* YouTube video embedding
* Instagram Reel embedding
* Media navigation
* Watch specifications
* Light and dark themes
* Skeleton loading states
* Responsive desktop and mobile UI
* Public read-only database access

## 🔄 Project Evolution

WatchFolio originally used a local JavaScript data file to store watch information.

The application was later migrated to Supabase:

```text
Static JavaScript Data
        ↓
React Gallery
        ↓
Supabase PostgreSQL
        ↓
Dynamic Data Fetching
        ↓
React Gallery
```

This transition was an important part of the project, moving it from a purely frontend application toward a real database-backed web application.

## ⚠️ Important Note

This is currently a **personal watchboard and learning project**.

The application is publicly viewable, but watch management is not yet exposed through a public admin interface.

The current database configuration is intentionally **read-only for public users**.

## 🎯 Future Improvements

Possible future additions:

* 🔐 Supabase authentication
* 👤 Admin-only dashboard
* ➕ Add new watches through the UI
* ✏️ Edit existing watches
* 🗑️ Delete watches
* 🖼️ Image upload and storage
* 🔍 Watch search
* 🏷️ Filtering by brand, price, size, and other specifications
* ↕️ Sorting options
* 👨‍👩‍👧‍👦 Watch family and related model system
* ❤️ Personal favorites / wishlist functionality
* 📊 More detailed watch information
* 🔗 Better external media handling
* 📱 Further mobile UI improvements
* 🌐 Multi-user collection support

---

Built as a React learning project focused on component-based architecture, state management, responsive design, asynchronous data fetching, Supabase integration, PostgreSQL, Tailwind CSS, reusable UI patterns, and modern frontend development.
