import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faBars, faSackDollar } from "@fortawesome/free-solid-svg-icons";

// Procedurally import all images from the asset-gallery directory
const images = require.context(
  "../images/asset-gallery",
  false,
  /\.(png|jpe?g|webp)$/
);

const dinosaurs = [
  {
    name: "Brachiosaurus",
    type: "dinosaur",
    image: images("./Brachiosaurus.webp"),
    sourcePath: "quadrupeds/Brachiosaurus",
    status: "PICKED. NEEDS PREP",
    priority: 5,
  },
  {
    name: "Spinosaurus",
    type: "dinosaur",
    image: images("./Spinosaurus.webp"),
    sourcePath: "quadrupeds/Spinosaurus",
    status: "CAN USE",
    priority: 2,
  },
  {
    name: "Allosaurus",
    type: "dinosaur",
    image: images("./Allosaurus.jpg"),
    sourcePath: "doubleKnee/Allosaurus",
    status: "CAN USE",
    priority: 2,
  },
  {
    name: "Allosaurus 2",
    type: "dinosaur",
    image: images("./Allosaurus-2.webp"),
    sourcePath: "doubleKnee/Allosaurus2",
    status: "CAN USE",
    priority: 2,
  },
  {
    name: "Irex",
    type: "dinosaur",
    image: images("./Irex.jpg"),
    sourcePath: "doubleKnee/irexDinosaur",
    status: "CAN USE",
    priority: 2,
  },
  {
    name: "Carnotaurus",
    type: "dinosaur",
    image: images("./Carnotaurus.webp"),
    sourcePath: "doubleKnee/carnotaurusDinosaur",
    status: "CAN USE",
    priority: 2,
  },
  {
    name: "Lightning Claw",
    type: "dinosaur",
    image: images("./LightningClaw.webp"),
    sourcePath: "doubleKnee/lightningClawDinosaur",
    status: "CAN USE",
    priority: 2,
  },
  {
    name: "Pteranodon",
    type: "dinosaur",
    image: images("./Pteranodon.jpg"),
    sourcePath: "doubleKnee/pteranodon",
    status: "CAN USE",
    priority: 4,
  },
  {
    name: "Crocodile",
    type: "animal",
    image: images("./Crocodile.webp"),
    sourcePath: "quadrupeds/Crocodile",
    status: "PICKED. NEEDS PREP",
    priority: 4,
  },
  {
    name: "Ben Dragon",
    type: "fantasy",
    image: images("./BenDragon.webp"),
    sourcePath: "quadrupeds/BenDragon",
    status: "CAN USE",
    priority: 1,
  },
  {
    name: "Dragol Baby",
    type: "fantasy",
    image: images("./DragolBaby.webp"),
    sourcePath: "quadrupeds/DragolBaby",
    status: "CAN USE",
    priority: 1,
  },
  {
    name: "Triceratops",
    type: "dinosaur",
    image: images("./Triceratops.jpg"),
    sourcePath: "quadrupeds/Triceratops",
    status: "IN-GAME",
    priority: 0,
  },
  {
    name: "T-Rex (classic)",
    type: "dinosaur",
    image: images("./T-Rex_classic.webp"),
    sourcePath: "doubleknee/trexClassic",
    status: "IN-GAME",
    priority: 0,
  },
  {
    name: "Human Skeleton",
    type: "humanoid",
    image: images("./HumanSkeleton.webp"),
    sourcePath: "bipeds/humanSkeleton",
    status: "CAN USE",
    priority: 0,
  },
  {
    name: "Écorché Human",
    type: "humanoid",
    image: images("./EcorcheHuman.webp"),
    sourcePath: "bipeds/anatomyHelper",
    status: "CAN USE",
    priority: 0,
  },
  {
    name: "Kong Skeleton",
    type: "humanoid",
    image: images("./KongSkeleton.jpg"),
    sourcePath: "bipeds/KongSkeleton",
    status: "CAN USE",
    priority: 0,
  },
  {
    name: "Alien Big Head",
    type: "fantasy",
    image: images("./AlienBigHead.webp"),
    sourcePath: "doubleKnee/alienBigHead",
    status: "ON HOLD",
    priority: 0,
  },
  {
    name: "Alien Covenant",
    type: "fantasy",
    image: images("./AlienCovenant.webp"),
    sourcePath: "doubleKnee/alienCovenant",
    status: "ON HOLD",
    priority: 0,
  },
  {
    name: "Demon Big Red",
    type: "fantasy",
    image: images("./DemonBigRed.webp"),
    sourcePath: "doubleKnee/demonBigRed",
    status: "CAN USE",
    priority: 1,
  },
];

const statusColors = {
  "ON HOLD": "bg-yellow-500",
  "CAN USE": "bg-green-500",
  "PICKED. NEEDS PREP": "bg-red-500",
  PREPPING: "bg-blue-500",
  "IN-GAME": "bg-purple-500",
  "IN-ENGINE. UNUSED": "bg-gray-500",
};

function DinosaurGallery() {
  const getDefaultColumns = () => (window.innerWidth < 640 ? 2 : 4);
  const [columns, setColumns] = useState(getDefaultColumns());
  const [layout, setLayout] = useState("grid"); // "grid" or "list"
  const [sortBy, setSortBy] = useState("name"); // "name", "status", or "priority"
  const [sortOrder, setSortOrder] = useState("asc"); // "asc" or "desc"

  const sortedDinosaurs = [...dinosaurs]
    .filter((dino) => sortBy !== "priority" || dino.priority > 0) // Exclude priority = 0 when sorting by priority
    .sort((a, b) => {
      const comparison =
        sortBy === "name"
          ? a.name.localeCompare(b.name)
          : sortBy === "status"
          ? a.status.localeCompare(b.status)
          : a.priority - b.priority;
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
        Truong CG Artist's Animal Assets
      </h1>
      <div className="mb-4 flex flex-wrap gap-4">
        {/* Layout Toggle Buttons */}
        <button
          onClick={() => setLayout("grid")}
          className={`px-4 py-2 rounded ${
            layout === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          <FontAwesomeIcon icon={faTh} className="text-lg" /> {/* Grid Icon */}
        </button>
        <button
          onClick={() => setLayout("list")}
          className={`px-4 py-2 rounded ${
            layout === "list" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          <FontAwesomeIcon icon={faBars} className="text-lg" />{" "}
          {/* List Icon */}
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
        <button
          onClick={() => toggleSort("priority")}
          className={`px-4 py-2 rounded text-sm ${
            sortBy === "priority" ? "bg-green-500 text-white" : "bg-gray-200"
          }`}
        >
          Sort by Priority{" "}
          {sortBy === "priority" && (sortOrder === "asc" ? "↑" : "↓")}
        </button>
      </div>
      {/* Hint for Priority Sorting */}
      {sortBy === "priority" && (
        <p className="text-sm text-gray-500 mb-4">
          ⚠️ Items with priority = 0 are hidden.
        </p>
      )}
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
            max="8"
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
                  : "w-24 h-24 flex-shrink-0 mr-4"
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
              <p className="text-sm flex items-center text-gray-400">
                <span
                  className={`w-3 h-3 rounded-full mr-2 ${
                    statusColors[dino.status]
                  }`}
                ></span>
                {dino.status}
              </p>
              {/* Display priority stars if status is among specific enums */}
              {["CAN USE", "PICKED. NEEDS PREP", "PREPPING"].includes(
                dino.status
              ) && (
                <div className="flex items-center mt-2">
                  <span className="text-xxs text-gray-400 mr-2">Priority:</span>
                  {Array.from({ length: dino.priority }, (_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faSackDollar}
                      className="text-pink-300 text-sm mr-1"
                    />
                  ))}
                </div>
              )}
              <p className="text-xxs text-gray-200">
                Source: {dino.sourcePath.split("/")[0]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DinosaurGallery;
