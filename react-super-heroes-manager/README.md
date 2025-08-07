# 🦸‍♂️ SuperTeam Manager — A Hands-On React Fundamentals Project

**SuperTeam Manager** is a pedagogical project designed to explore the fundamentals of **React.js** through the development of a fully interactive front-end application.

---

## 🎯 Purpose

The goal of this project is to demonstrate the fundamental concepts of React in a structured and progressive manner. Each feature introduces a new fundamental concept through a concrete implementation and unit tests.

This learning program was co-created with ChatGPT, based on the GPT-4 model.

---

## 🦸 Project Theme and Functionality

The application simulates a super-hero management system with the following key features:

- Displaying a list of heroes
- Adding heroes to a personalized team
- Removing heroes from the team
- Enforcing constraints such as a maximum team size and prevention of duplicates

Each interaction is tied to a specific React concept or feature, making the app a self-contained learning environment.

---

## 🔍 Implemented Features

| Feature | Description |
|--------|-------------|
| Simulated API call | Dynamic data loading using `useEffect` and `setTimeout` |
| Component architecture | Reusable UI components (e.g., `HeroCard`, `HeroList`) |
| Global state management | Shared state using React's `Context API` |
| Unit testing | Comprehensive tests using `Jest` and `@testing-library/react` |
| Code linting | ESLint with Airbnb's style guide |
| Code formatting | Prettier integration for consistent formatting |
| Styling approach | CSS Modules for scoped styles |
| Business logic enforcement | Prevents duplicate heroes and enforces a max team size |

---

## 🛠️ Tech Stack

- **React** with **TypeScript**
- **Vite** for fast development and build performance
- **Context API** and built-in hooks (`useState`, `useEffect`) for state management
- **Jest** and **@testing-library/react** for unit testing
- **CSS Modules** for local and modular styles
- **ESLint** (Airbnb config) and **Prettier** for linting and formatting

---

## 📚 React Concepts Covered

| Concept | Status |
|---------|--------|
| Project setup with Vite + TypeScript | ✅ |
| Functional components and props | ✅ |
| React hooks (`useState`, `useEffect`) | ✅ |
| Lifting state and component composition | ✅ |
| Context API and custom hooks | ✅ |
| Conditional rendering based on state | ✅ |
| CSS Modules for scoped styling | ✅ |
| Unit testing with Jest and Testing Library | ✅ |
| ESLint and Prettier setup | ✅ |
| Dynamic list rendering | ✅ |
| Business constraints and UI feedback | ✅ |
| (More concepts planned in upcoming steps…) | 🚧 |

---

## ▶️ Getting Started

```bash
npm install
npm run dev
```

---

## 🧪 Running Tests

```bash
npm run test
```

---

## 📁 Project Structure

The codebase is organized into clearly separated modules:

```
src/
├── __tests__/         # Basic for unit tests
├── app/               # Application
|    ├── components/   # Basic UI components used through the application
|    ├── context/      # Context providers and hooks
|    ├── data/         # Static hero data
|    └── views/        # Application views (HeroCard, HeroList, etc.)
└── App.tsx            # Root component
```
