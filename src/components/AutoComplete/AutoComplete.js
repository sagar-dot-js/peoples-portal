import React, { useRef, useState } from "react";
import { useEffect } from "react";
import TextField from "../TextField/TextField";
import { Box } from "./AutoComplete.style";

const AutoComplete = ({
  options: options,
  label,
  onChange: handleOptionsChange,
}) => {
  const [value, setValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState(options);
  // const suggestions = options.filter((option) =>
  //   option.value.toLowerCase().includes(value.toLowerCase())
  // );

  const autocompleteRef = useRef();

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  const handleSuggestions = (suggestion) => {
    setValue(suggestion);
    handleOptionsChange && handleOptionsChange(suggestion);
    setShowSuggestions(false);
  };

  console.log(suggestions);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        autocompleteRef.current &&
        !autocompleteRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <Box ref={autocompleteRef}>
      <TextField
        type="text"
        value={options?.filter((option) => option?.value === value)[0]?.label}
        // onChange={(e)=>console.log(e)}
        onChange={(e) => {
          console.log(e.target.value);
          setValue(e.target.value);
          handleOptionsChange && handleOptionsChange(e.target.value);
          if (e.target.value) {
            setSuggestions((prev) => {
              return options.filter((option) =>
                option?.label.toLowerCase().includes(e.target.value)
              );
            });
          } else {
            setSuggestions(options);
          }
        }}
        onFocus={() => {
          setSuggestions((prev) => {
            return options.filter((option) => option?.value !== value);
          });
          setShowSuggestions(true);
        }}
      />
      {showSuggestions && (
        <ul>
          {suggestions?.length ? (
            suggestions.map((suggestion) => (
              <li
                onClick={() => handleSuggestions(suggestion.value)}
                key={suggestion.value}
              >
                {suggestion.label}
              </li>
            ))
          ) : (
            <span>No options</span>
          )}
        </ul>
      )}
    </Box>
  );
};

export default AutoComplete;
