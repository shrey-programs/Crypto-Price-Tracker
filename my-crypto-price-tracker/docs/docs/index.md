---
id: index
title: Crypto Price Tracker Documentation
---

# Crypto Price Tracker Documentation

Welcome to the documentation for the **Crypto Price Tracker** project! This guide covers setup instructions, API integration details, state management rationale, and common challenges.

## 1. Project Setup Guide

### Web App (Next.js)

1. **Installation:**

   - Navigate to the `/web-app` folder.
   - Run:

     npm install

2. **Running the Web App:**

   - Start the development server:

     npm run dev

   - Open http://localhost:3000 in your browser to view your Crypto Price Tracker dashboard.

### Mobile App (Optional)

_(If a mobile version is created in the future, place similar steps here.)_

---

## 2. API Integration

**API:** CoinGecko  
**Endpoint:**  
 https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,ripple,cardano&vs_currencies=usd

**Implementation:**  
The `fetchPrices` function in `pages/index.js` calls this endpoint to retrieve live cryptocurrency prices. A short 1-second delay is introduced so the loading spinner is visible when the data is refreshed.

---

## 3. State Management (React Query)

We use **React Query** (via `@tanstack/react-query`) for data fetching and caching.

- **Why React Query?**

  - **Caching:** Automatically caches API responses.
  - **Auto-Refetch:** Keeps data up to date in the background (e.g., every 60 seconds).
  - **Error Handling:** Provides built-in error handling for API requests.
  - **Simplicity:** Integrates easily with React via the `useQuery` hook.

- **Integration Details:**
  - In `pages/_app.js`, the app is wrapped with `QueryClientProvider`, making React Query available throughout.
  - In `pages/index.js`, `useQuery` fetches data from CoinGecko, with manual refresh and a 1-second simulated delay to display the spinner.

---

## 4. Challenges & Solutions

- **Dependency Conflicts**

  - **Issue:** Conflicting React versions with older `react-query`.
  - **Solution:** Upgraded to React 18 and switched to `@tanstack/react-query`.

- **Refresh Loading Indicator**

  - **Issue:** Refresh was too quick to notice the spinner.
  - **Solution:** Introduced a 1-second artificial delay in the API fetch, plus a “Refreshing...” button state.

- **Dynamic Coin Searching**
  - **Issue:** Originally, only 5 fixed coins were displayed.
  - **Solution:** Added a search input to query any comma-separated list of coin IDs.

---

## 5. Conclusion

With these details, you can set up, run, and extend the Crypto Price Tracker. If you have any questions or suggestions, feel free to reach out!

Happy Coding!
