import React from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import { useState } from "react";
import Section from "./Section.jsx";

function Example() {
  const [selectedTopic, setSelectedTopic] = useState("");
  function handelSelect(selectButton) {
    setSelectedTopic(selectButton);
  }
  return (
    <Section title="Examples" id="examples">
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => handelSelect("components")}
        >
          components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "JSX"}
          onSelect={() => handelSelect("JSX")}
        >
          {" "}
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => handelSelect("props")}
        >
          {" "}
          props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => handelSelect("state")}
        >
          state
        </TabButton>
      </menu>
      {!selectedTopic && <p>Please select a topic.</p>}
      {selectedTopic && (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description} </p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )}
    </Section>
  );
}

export default Example;
