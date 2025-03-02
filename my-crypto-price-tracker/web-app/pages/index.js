import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

// Simulate a 1-second delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Modified fetch function that takes a comma-separated list of coin IDs
const fetchPrices = async (coinIds) => {
  await delay(1000); // 1 second delay
  const response = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${coinIds}&vs_currencies=usd`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default function Home() {
  // searchInput holds what the user types, and coinQuery is what is actually used to fetch data.
  const [searchInput, setSearchInput] = useState("");
  // Default coins if nothing is entered.
  const [coinQuery, setCoinQuery] = useState(
    "bitcoin,ethereum,litecoin,ripple,cardano"
  );

  const { data, error, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["cryptoPrices", coinQuery],
    queryFn: () => fetchPrices(coinQuery),
    staleTime: 0,
    refetchInterval: 60000, // optional auto-refresh every 60 seconds
  });

  // Update the input field as the user types.
  const handleSearchInput = (e) => setSearchInput(e.target.value);

  // When the user clicks "Search", update the coinQuery.
  const handleSearchClick = () => {
    // If nothing is entered, revert to the default coins.
    const query =
      searchInput.trim() || "bitcoin,ethereum,litecoin,ripple,cardano";
    setCoinQuery(query);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Crypto Price Tracker</h1>
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Enter coin IDs (comma-separated)"
          value={searchInput}
          onChange={handleSearchInput}
          style={styles.input}
        />
        <button onClick={handleSearchClick} style={styles.button}>
          Search
        </button>
        <button
          onClick={() => refetch()}
          style={{ ...styles.button, marginLeft: "1rem" }}
          disabled={isFetching}
        >
          {isFetching ? (
            <>
              <span style={styles.spinner}></span> Refreshing...
            </>
          ) : (
            "Refresh"
          )}
        </button>
      </div>

      {isLoading ? (
        <div style={styles.loaderContainer}>
          <div style={styles.loader}></div>
          <p>Loading prices...</p>
        </div>
      ) : error ? (
        <p style={styles.error}>Error: {error.message}</p>
      ) : (
        <ul style={styles.list}>
          {data &&
            Object.keys(data).map((crypto) => (
              <li key={crypto} style={styles.card}>
                <span style={styles.cryptoName}>
                  {crypto.charAt(0).toUpperCase() + crypto.slice(1)}
                </span>
                : <span style={styles.cryptoPrice}>${data[crypto].usd}</span>
              </li>
            ))}
        </ul>
      )}

      {/* CSS for spinner animation */}
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "2rem auto",
    padding: "2rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  header: {
    textAlign: "center",
    marginBottom: "1.5rem",
    color: "#333",
  },
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1.5rem",
    gap: "0.5rem",
  },
  input: {
    padding: "0.75rem",
    width: "60%",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  button: {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
  spinner: {
    display: "inline-block",
    width: "16px",
    height: "16px",
    border: "3px solid #fff",
    borderTop: "3px solid transparent",
    borderRadius: "50%",
    marginRight: "8px",
    animation: "spin 1s linear infinite",
  },
  loaderContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "2rem",
  },
  loader: {
    border: "8px solid #f3f3f3",
    borderTop: "8px solid #3498db",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    animation: "spin 1s linear infinite",
    marginBottom: "1rem",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  card: {
    background: "#f9f9f9",
    padding: "1rem",
    borderRadius: "4px",
    marginBottom: "0.75rem",
    display: "flex",
    justifyContent: "space-between",
    boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
  },
  cryptoName: {
    fontWeight: "bold",
    color: "#333",
  },
  cryptoPrice: {
    color: "#3498db",
    fontWeight: "500",
  },
  error: {
    color: "red",
    textAlign: "center",
  },
};
