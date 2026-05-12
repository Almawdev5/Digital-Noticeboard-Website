# ReFind — Digital Lost & Found Noticeboard

A clean, responsive web app for posting and browsing lost and found items. ReFind is built as a static front-end that connects to Supabase for authentication, item storage, user profiles, chat, and basic admin controls.

## 🚀 Project Overview

ReFind is a community-driven noticeboard where users can:
- create accounts and sign in
- post lost or found items
- browse searchable listings
- view item details and contact owners
- manage personal profiles and own posts
- report suspicious listings
- chat directly about an item
- access an admin panel for moderation (requires admin flag)

## 📁 Project Structure

- `index.html` — marketing/home landing page
- `css/` — styling files for app layout and components
- `js/` — shared JavaScript helpers and Supabase configuration
  - `supabase.js` — Supabase client setup
  - `utils.js` — theme control, auth redirects, toast notifications, helpers
  - `auth.js` — currently empty; page logic exists inline
  - `listings.js` — currently empty; listing logic exists inline
- `pages/` — main authenticated pages and features
  - `login.html` — sign-in page
  - `signup.html` — account registration
  - `dashboard.html` — listing feed, search, and filters
  - `post-item.html` — create a lost/found listing with optional photo upload
  - `item-detail.html` — view listing details, owner info, and report listing
  - `chat.html` — item-specific chat interface
  - `profile.html` — user profile and own listings management
  - `admin.html` — admin panel for listings, users, and reports
  - `inbox.html` — inbox-style message center (existing page)

## ✨ Key Features

### Authentication
- Email/password sign up and sign in with Supabase
- Redirect guards for protected pages
- Profile creation stores additional user details

### Listings
- Post lost or found items
- Add title, category, location, description, and optional photo
- Filter results by lost/found and search text
- Item detail view shows listing metadata and owner info

### Messaging
- Chat page supports messaging between users tied to a specific listing
- Direct message button available from item detail view

### Profile Management
- Profile page displays user stats and personal listings
- Editable name and phone number
- Avatar preview placeholder can be updated

### Admin Tools
- Admin panel includes stats and tabbed management views
- Admin access is checked against `profiles.is_admin`
- Data sections include listings, users, and reports

## 🛠 Setup and Run

### Recommended local preview
Open a local server from the project root and browse the app:

```powershell
cd d:\lost-and-found
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/index.html
```

> A local server is recommended because the app uses JavaScript modules and relative page routing.

### What you need
- A browser with JavaScript enabled
- Internet access for the Supabase JS CDN and backend
- A Supabase project configured with the following tables:
  - `profiles`
  - `listings`
  - `reports`
  - `messages`

### Configure Supabase
The app uses `js/supabase.js` for the Supabase connection. Replace the existing `SUPABASE_URL` and `SUPABASE_ANON_KEY` values with your own Supabase project credentials if needed.

## ✅ Notes
- The app is currently implemented as static pages with inline page logic in the HTML files.
- `js/utils.js` contains shared utilities used across pages.
- `auth.js` and `listings.js` are currently empty and can be repurposed for future shared authentication or listing helpers.
- The Supabase anon key is present in the repo, so if you intend to deploy this publicly, replace it with your own key and secure your project rules.

## 📌 Usage Flow
1. Open `index.html` and navigate to signup or login.
2. Authenticate to access the dashboard.
3. Browse listings or click `Post item` to create a new lost/found listing.
4. Open an item detail page to message the owner or report the listing.
5. Visit `profile.html` to manage your account and review your posts.
6. Admin users can open `admin.html` for moderation controls.

## 💡 Future Improvements
- Move inline page scripts into dedicated JS modules
- Add a build toolchain or bundler for cleaner asset management
- Add client-side validation reuse through shared components
- Improve offline compatibility and image upload handling

---

Made for a responsive lost-and-found experience with Supabase integration.
