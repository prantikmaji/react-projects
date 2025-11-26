import { useCallback, useEffect, useRef, useState } from "react";
// Removed unused imports for brevity
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [pass, setPass] = useState("");
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let password = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (charAllowed) password += "!@#$%^&*~<>?}{[]";
    if (numbersAllowed) password += "0123456789";

    let s = "";

    for (let i = 1; i <= length; i++) {
      let pos = Math.floor(Math.random() * password.length + 1);

      s += password.charAt(pos);
    }
    setPass(s);
  }, [length, charAllowed, numbersAllowed, setPass]);

  const copyPassWordToClipboard = useCallback(() => {
    passwordRef.current?.select();//this line not working
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  useEffect(() => {
    passwordGenerator();
    // console.log(pass)
  }, [length, charAllowed, numbersAllowed, passwordGenerator]);

  return (
    // The main container is centered and styled
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white p-4">
      {/* Outer Card/Container for the Generator */}
      <div className="w-full max-w-md mx-auto shadow-lg rounded-xl p-8 bg-gray-800 space-y-6">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-orange-400">
          Password Generator
        </h1>

        {/* Password Display and Copy Button Group */}
        <div className="flex shadow-md rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            readOnly
            placeholder="Password"
            // Styling the input field
            value={pass}
            ref={passwordRef}
            className="w-full py-3 px-4 bg-gray-700 text-lg placeholder-gray-400 outline-none cursor-default"
          />
          <button
            onClick={() => {
              copyPassWordToClipboard();
            }}
            // Styling the copy button
            className="bg-blue-600 text-white px-4 py-3 shrink-0 font-medium hover:bg-blue-700 transition duration-150"
          >
            copy
          </button>
        </div>

        {/* Controls Group */}
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 items-center text-sm font-semibold">
          {/* Range Slider and Length Label */}
          <div className="flex items-center space-x-2">
            <input
              type="range"
              min={4}
              max={25}
              onChange={(e) => {
                setLength(e.target.value);
              }}
              // Tailwind class to style the slider track/thumb (minimal styling here as full customization requires complex CSS/Tailwind plugins)
              className="cursor-pointer h-1 bg-gray-600 rounded-lg appearance-none"
            />
            <label className="text-orange-400">{length}</label>
            {/* Added a placeholder number (15) to show where the dynamic length would go */}
          </div>

          {/* Character Checkbox Group */}
          <div className="flex items-center space-x-1">
            <input
              type="checkbox"
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
              className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
            />
            <label htmlFor="charInput" className="text-gray-300 select-none">
              Characters
            </label>
          </div>

          {/* Numbers Checkbox Group */}
          <div className="flex items-center space-x-1">
            <input
              type="checkbox"
              id="numberInput"
              onChange={() => {
                setNumbersAllowed((prev) => !prev);
              }}
              className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
            />
            <label htmlFor="numberInput" className="text-gray-300 select-none">
              Numbers
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
