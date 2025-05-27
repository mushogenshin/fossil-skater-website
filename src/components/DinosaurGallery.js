import { useState } from "react";

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
  const [columns, setColumns] = useState(4);

  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Dinosaur Gallery</h1>
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
      <div
        className={`grid gap-4`}
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      >
        {dinosaurs.map((dino, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 bg-white shadow-md text-black"
          >
            <div className="w-full aspect-w-4 aspect-h-3 mb-2">
              <img
                src={dino.image}
                alt={dino.name}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <h2 className="text-lg font-bold">{dino.name}</h2>
            <p className="text-sm">Source: {dino.sourcePath}</p>
            <p className="text-sm flex items-center">
              <span
                className={`w-3 h-3 rounded-full mr-2 ${
                  statusColors[dino.status]
                }`}
              ></span>
              {dino.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DinosaurGallery;
