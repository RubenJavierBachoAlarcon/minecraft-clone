export function ControlsUI() {
  return (
    <div className="bg-opacity-70 absolute top-0 right-0 rounded-bl-lg bg-gray-800 p-5 text-white shadow-lg">
      <h2 className="mb-4 text-lg font-bold">Game Controls</h2>
      <ul className="space-y-2">
        <li className="flex items-center">
          <span className="font-bold">WASD</span> <span className="ml-2">- Move</span>
        </li>
        <li className="flex items-center">
          <span className="font-bold">Space</span> <span className="ml-2">- Jump</span>
        </li>
        <li className="flex items-center">
          <span className="font-bold">Right Click</span> <span className="ml-2">- Add Block</span>
        </li>
        <li className="flex items-center">
          <span className="font-bold">Left Click</span> <span className="ml-2">- Remove Block</span>
        </li>
        <li className="flex items-center">
          <span className="font-bold">1</span> <span className="ml-2">- Endstone</span>
        </li>
        <li className="flex items-center">
          <span className="font-bold">2</span> <span className="ml-2">- Endstone Brick</span>
        </li>
        <li className="flex items-center">
          <span className="font-bold">3</span> <span className="ml-2">- Purpur Block</span>
        </li>
        <li className="flex items-center">
          <span className="font-bold">4</span> <span className="ml-2">- Chorus Flower</span>
        </li>
        <li className="flex items-center">
          <span className="font-bold">5</span> <span className="ml-2">- Chorus Plant</span>
        </li>
        <li className="flex items-center">
          <span className="font-bold">P</span> <span className="ml-2">- Save World</span>
        </li>
        <li className="flex items-center">
          <span className="font-bold">O</span> <span className="ml-2">- Load World</span>
        </li>
        <li className="flex items-center">
          <span className="font-bold">R</span> <span className="ml-2">- Reset World</span>
        </li>
        <li className="flex items-center">
          <span className="font-bold">L</span> <span className="ml-2">- Toggle Shadows</span>
        </li>
      </ul>
    </div>
  )
}
