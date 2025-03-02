# Crypto Price Tracker

A simple, customizable web app for tracking cryptocurrency prices in real time. This repository also includes a Docusaurus documentation site with setup instructions, API integration details, and more.

## Features

- **Live Crypto Prices:** Fetches real-time data from the CoinGecko API.
- **Search & Refresh:** Dynamically search for multiple coins and refresh data on demand.
- **Loading Spinner:** Shows a spinner while fetching data, with a brief delay for visibility.
- **State Management:** Powered by React Query (`@tanstack/react-query`) for caching and auto-refetching.
- **Documentation:** A Docusaurus site explaining how to set up and extend the project.

---

## Prerequisites

- **Node.js** (v14 or later) and **npm**
- A modern web browser (Chrome, Firefox, Safari, etc.)

---

## 1. Setting Up the Web App (Next.js)

1. **Navigate** to the `web-app` folder:

   cd web-app

2. **Install dependencies**:

   npm install

3. **Run the development server**:

   npm run dev

4. **Open** http://localhost:3000 in your browser to view the Crypto Price Tracker dashboard.

**Key Files**:

- `pages/_app.js`: Wraps the app with `QueryClientProvider` (React Query).
- `pages/index.js`: Main page displaying crypto prices, search functionality, and refresh button.

---

## 2. Setting Up the Docusaurus Documentation

1. **Navigate** to the `docs` folder:

   cd ../docs

2. **Install dependencies**:

   npm install

3. **Run the Docusaurus development server**:

   npm run start

4. **Open** http://localhost:3000 (or the URL shown in your terminal) to view the documentation site.

**Key Files**:

- `docusaurus.config.js`: Main configuration for your Docusaurus site.
- `sidebars.js`: Defines the structure of your docs sidebar.
- `docs/index.md`: Primary documentation page with project details and instructions.

---

## 3. Project Highlights

### API Integration

- **CoinGecko**: Uses the `simple/price` endpoint to fetch live prices for any specified coin IDs.
- **Simulated Delay**: A 1-second delay in `fetchPrices` helps demonstrate the loading spinner.

### State Management (React Query)

- **Caching & Refetch**: React Query caches responses and can auto-refresh every 60 seconds.
- **Refresh Button**: Manually triggers `refetch()`, displaying "Refreshing..." during fetch.

### Searching Multiple Coins

- **Comma-Separated IDs**: Users can enter any coin IDs (e.g. `bitcoin,solana,dogecoin`) to dynamically query the API.

---

## 4. Challenges & Solutions

- **Dependency Conflicts**:  
  Older versions of `react-query` conflicted with React 18.  
  **Solution**: Upgraded to React 18 and switched to `@tanstack/react-query`.

- **Refresh Loading Indicator**:  
  Fetching was initially too quick to notice the spinner.  
  **Solution**: Added a short artificial delay and updated the button text to "Refreshing...".

- **Default Coin List**:  
  Only 5 coins were shown initially.  
  **Solution**: Implemented a search field for comma-separated coin IDs.

---

## 5. Contributing

1.  **Fork** the repository and create a feature branch:

        git checkout -b feature/my-new-feature

2.  **Commit** your changes:

        git commit -m "Add some feature"

3.  **Push** to the branch:

        git push origin feature/my-new-feature

4.  **Create a Pull Request** to merge your changes.

---

## 6. License

_(Optional: Include a license here, such as MIT, if you wish.)_

---

## 7. Contact & Support

If you have any questions, issues, or suggestions, feel free to open an issue or reach out. Enjoy your Crypto Price Tracker and Docusaurus docs!
