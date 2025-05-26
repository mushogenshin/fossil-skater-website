import { useState } from "react";

const dinosaurs = [
  {
    name: "Tyrannosaurus Rex",
    image: "/images/tyrannosaurus-rex.jpg",
    sourcePath: "/art/tyrannosaurus-rex",
    status: "IN-GAME",
  },
  {
    name: "Triceratops",
    image: "/images/triceratops.jpg",
    sourcePath: "/art/triceratops",
    status: "PICKED-NEEDS-PREP",
  },
  // Add more dinosaur objects here...
];

function DinosaurGallery() {
  const [columns, setColumns] = useState(4);

  return (
    <div className="p-8">
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
            <img
              src={dino.image}
              alt={dino.name}
              className="w-full h-32 object-cover rounded-md mb-2"
            />
            <h2 className="text-lg font-bold">{dino.name}</h2>
            <p className="text-sm">Source: {dino.sourcePath}</p>
            <p className="text-sm">Status: {dino.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DinosaurGallery;
