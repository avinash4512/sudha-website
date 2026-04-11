# 🌟 CMS Website — Full Stack Web Project

A complete Content Management System (CMS) website built with pure HTML, CSS, JavaScript and Firebase. No server needed. Works on GitHub Pages for free!

---

## 🔴 Live Demo
👉 **[Click here to view the website](#)** *(replace with your GitHub Pages URL after deploying)*

---

## ✨ Features

| Feature | Description |
|---|---|
| 📰 News Manager | Add, edit, delete news posts with images |
| 📋 Schemes Manager | Manage government or business schemes |
| 🛍️ Products & Services | Add products with prices, images, categories |
| ⭐ Reviews System | Customers submit reviews, admin approves them |
| 📤 Media Upload | Drag & drop image upload to Firebase Storage |
| 🔐 Admin Panel | Password-protected admin dashboard |
| 🔥 Firebase Backend | All data saved to cloud — visible to everyone |
| 📱 Responsive | Works on mobile, tablet and desktop |

---

## 📁 Project Structure

```
cms-website/
├── index.html              ← Public homepage (news + schemes)
├── products.html           ← Public products & services page
├── reviews.html            ← Public reviews page + submit form
├── firebase-config.js      ← YOUR Firebase credentials go here
└── admin/
    ├── login.html          ← Admin login (password protected)
    ├── dashboard.html      ← Admin control panel
    ├── upload.html         ← Drag & drop media upload
    ├── news-manager.html   ← Create/edit/delete news
    ├── schemes-manager.html← Manage schemes
    ├── products-manager.html← Manage products & services
    ├── reviews-manager.html← Approve/reject customer reviews
    └── style.css           ← Admin panel styling
```

---

## 🚀 How to Deploy (GitHub Pages)

### Step 1 — Setup Firebase
1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Create a new project
3. Add a Web App (`</>` icon) and copy the config
4. Enable **Firestore Database** (test mode)
5. Enable **Storage** (test mode)
6. Paste your config into `firebase-config.js`

### Step 2 — Upload to GitHub
1. Create a free account at [https://github.com](https://github.com)
2. Create a new repository named `cms-website`
3. Upload all files from the `cms-website` folder
4. Go to **Settings → Pages → Source → main branch** → Save

### Step 3 — Your site is live!
Your URL will be: `https://YOUR-USERNAME.github.io/cms-website`

---

## 🔐 Default Admin Login

| Field | Value |
|---|---|
| Username | `admin` |
| Password | `admin123` |

> ⚠️ **Important:** Change these in `admin/login.html` before making your site public!

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Database:** Firebase Firestore
- **Storage:** Firebase Storage
- **Hosting:** GitHub Pages (free)
- **No backend server required!**

---

## 📝 How to Change Admin Password

Open `admin/login.html` in Notepad and find these lines:

```javascript
var ADMIN_USER = "admin";
var ADMIN_PASS = "admin123";
```

Change `admin` and `admin123` to your own username and password. Save the file.

---

## 📄 License

This project is open source and free to use for personal and commercial projects.

---

*Built with ❤️ — Stages 1 through 5 completed*
