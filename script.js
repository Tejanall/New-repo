const stores = [
  {
    name: "Fresh Basket Groceries",
    category: "Groceries",
    eta: "22 mins",
    rating: "4.7",
    offer: "10% off on first order",
  },
  {
    name: "CarePlus Medical Store",
    category: "Medical",
    eta: "18 mins",
    rating: "4.8",
    offer: "24x7 emergency delivery",
  },
  {
    name: "Street Bowl Kitchen",
    category: "Food",
    eta: "30 mins",
    rating: "4.5",
    offer: "Free delivery above ₹199",
  },
  {
    name: "Nature Fruit Hub",
    category: "Fruits",
    eta: "16 mins",
    rating: "4.6",
    offer: "Fresh-picked daily",
  },
  {
    name: "Juicy Corner",
    category: "Juice",
    eta: "20 mins",
    rating: "4.4",
    offer: "Buy 1 Get 1 (4-6 PM)",
  },
  {
    name: "Family Essentials Mart",
    category: "Groceries",
    eta: "25 mins",
    rating: "4.7",
    offer: "Express checkout",
  },
];

const grid = document.getElementById("storeGrid");
const searchForm = document.getElementById("searchForm");

stores.forEach((store) => {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <div class="meta"><span>${store.category}</span><span>⭐ ${store.rating}</span></div>
    <h3>${store.name}</h3>
    <div class="meta"><span>Delivery: ${store.eta}</span><span>Open now</span></div>
    <span class="tag">${store.offer}</span>
  `;
  grid.appendChild(card);
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const location = document.getElementById("location").value.trim();
  if (!location) return;
  alert(`Showing top local stores near ${location}.`);
});
