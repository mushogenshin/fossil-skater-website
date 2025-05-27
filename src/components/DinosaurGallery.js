import { useState } from "react";
import { FaTh, FaBars } from "react-icons/fa"; // Import Font Awesome icons

// Procedurally import all images from the dino_gallery directory
const images = require.context(
  "../images/dino-gallery",
  false,
  /\.(png|jpe?g|webp)$/
);

const dinosaurs = [
  {
    name: "Brachiosaurus",
    image: images("./Brachiosaurus.webp"),
    sourcePath: "/art/brachiosaurus",
    status: "IN-GAME",
  },
  {
    name: "Triceratops",
    image: images("./Triceratops.jpg"),
    sourcePath: "/art/triceratops",
    status: "PICKED-NEEDS-PREP",
  },
  // Add more dinosaur objects here...
];

const statusColors = {
  "NOT SUITABLE": "bg-red-500",
  AVAILABLE: "bg-green-500",
  "PICKED-NEEDS-PREP": "bg-yellow-500",
  PREPPING: "bg-blue-500",
  "IN-GAME": "bg-purple-500",
  "IN-GAME-UNUSED": "bg-gray-500",
};

function DinosaurGallery() {
  const getDefaultColumns = () => (window.innerWidth < 640 ? 2 : 4);
  const [columns, setColumns] = useState(getDefaultColumns());
  const [layout, setLayout] = useState("grid"); // "grid" or "list"
  const [sortBy, setSortBy] = useState("name"); // "name" or "status"
  const [sortOrder, setSortOrder] = useState("asc"); // "asc" or "desc"

  const sortedDinosaurs = [...dinosaurs].sort((a, b) => {
    const comparison =
      sortBy === "name"
        ? a.name.localeCompare(b.name)
        : a.status.localeCompare(b.status);
    return sortOrder === "asc" ? comparison : -comparison;
  });

  const toggleSort = (criteria) => {
    if (sortBy === criteria) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(criteria);
      setSortOrder("asc");
    }
  };

  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">
        Truong CG Artist's Dinosaur Assets
      </h1>
      <div className="mb-4 flex flex-wrap gap-4">
        {/* Layout Toggle Buttons */}
        <button
          onClick={() => setLayout("grid")}
          className={`px-4 py-2 rounded ${
            layout === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          <FaTh className="text-lg" /> {/* Grid Icon */}
        </button>
        <button
          onClick={() => setLayout("list")}
          className={`px-4 py-2 rounded ${
            layout === "list" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          <FaBars className="text-lg" /> {/* List Icon */}
        </button>

        {/* Sort Buttons */}
        <button
          onClick={() => toggleSort("name")}
          className={`px-4 py-2 rounded text-sm ${
            sortBy === "name" ? "bg-green-500 text-white" : "bg-gray-200"
          }`}
        >
          Sort by Name {sortBy === "name" && (sortOrder === "asc" ? "↑" : "↓")}
        </button>
        <button
          onClick={() => toggleSort("status")}
          className={`px-4 py-2 rounded text-sm ${
            sortBy === "status" ? "bg-green-500 text-white" : "bg-gray-200"
          }`}
        >
          Sort by Status{" "}
          {sortBy === "status" && (sortOrder === "asc" ? "↑" : "↓")}
        </button>
      </div>

      {/* Columns Slider (only for grid layout) */}
      {layout === "grid" && (
        <div className="mb-4">
          <label htmlFor="columns" className="mr-2">
            Columns:
          </label>
          <input
            id="columns"
            type="range"
            min="2"
            max="6"
            value={columns}
            onChange={(e) => setColumns(Number(e.target.value))}
            className="w-48"
          />
        </div>
      )}

      {/* Gallery Display */}
      <div
        className={`${
          layout === "grid" ? "grid gap-4" : "flex flex-col gap-4"
        }`}
        style={
          layout === "grid"
            ? { gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }
            : {}
        }
      >
        {sortedDinosaurs.map((dino, index) => (
          <div
            key={index}
            className={`border rounded-lg p-4 bg-white shadow-md text-black ${
              layout === "list" ? "flex items-center" : ""
            }`}
          >
            <div
              className={`${
                layout === "grid"
                  ? "w-full aspect-w-4 aspect-h-3 mb-2"
                  : // "w-full h-48 mb-2" // Fixed height for grid thumbnails
                    "w-24 h-24 flex-shrink-0 mr-4"
              }`}
            >
              <img
                src={dino.image}
                alt={dino.name}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div>
              <h2 className="text-lg font-bold">{dino.name}</h2>
              <p className="text-sm text-gray-400">Source: {dino.sourcePath}</p>
              <p className="text-sm flex items-center text-gray-400">
                <span
                  className={`w-3 h-3 rounded-full mr-2 ${
                    statusColors[dino.status]
                  }`}
                ></span>
                {dino.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DinosaurGallery;
