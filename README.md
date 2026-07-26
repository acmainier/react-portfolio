# React Portfolio

Personal portfolio site built with React, showcasing my background and the projects I've built during my software engineering bootcamp. This is the third iteration of my portfolio — previously built in vanilla HTML/CSS/JS, reviewed with Bootstrap, and now rebuilt in React.

**Live site:** https://my-react-portfolio-3n20.onrender.com/
**Repository:** https://github.com/acmainier/react-portfolio

## Features

- **Home page** — a short bio/introduction, links to GitHub and LinkedIn, and a list of core skills
- **Projects page** — dynamically fetches repositories tagged `bootcamp` from my GitHub account via the GitHub REST API, with a live filter input to search by project name
- Fully responsive layout, from mobile to desktop
- Accessible by design: keyboard-navigable nav with visible focus states, a skip-to-content link, `aria-current` on the active page, and `aria-live` announcements on the filtered project list
- Light and dark mode, following the visitor's OS preference

## Screenshot

[Home page](./screenshots/home.png)

## Technologies used

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) — build tool and dev server
- Plain CSS (custom properties, no framework)
- [GitHub REST API](https://docs.github.com/en/rest) — `GET /users/{username}/repos`, filtered by the `bootcamp` topic, to populate the Projects page
- Deployed on [Render](https://render.com/)

## Installation

```bash
git clone git@github.com:acmainier/react-portfolio.git
cd react-portfolio
npm install
npm run dev
```
