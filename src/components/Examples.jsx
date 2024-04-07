import { useState } from 'react';
import { EXAMPLES } from '../data';
import TabButton from "./TabButton";
import Section from './Section';
import Tabs from './Tabs.jsx';

function Examples() {
      const [tabContent, setTabContent] = useState();
      const handleSelect = (selectedButton) => {
        //selectedButton => 'Components', 'Jsx', 'Props', 'States
        setTabContent(selectedButton);
      };
      let content = <p>Please select a topic.</p>;
      if (tabContent) {
        content = (
          <div id="tab-content">
            <h3>{EXAMPLES[tabContent].title}</h3>
            <p>{EXAMPLES[tabContent].description}</p>
            <pre>
              <code>{EXAMPLES[tabContent].code}</code>
            </pre>
          </div>
        );
      }
  return (
    <Section title="Examples" id="examples">
      <Tabs
        // buttonsContainer="menu"
        // if coustom pass it like buttonsContainer = {Section}
        buttons={
          <>
            <TabButton
              isSelected={tabContent === "Components"}
              onSelect={() => handleSelect("Components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={tabContent === "Jsx"}
              onSelect={() => handleSelect("Jsx")}
            >
              Jsx
            </TabButton>
            <TabButton
              isSelected={tabContent === "Props"}
              onSelect={() => handleSelect("Props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={tabContent === "State"}
              onSelect={() => handleSelect("State")}
            >
              State
            </TabButton>
          </>
        }
      >
        {content}
      </Tabs>

      {/* {tabContent?   <div id="tab-content">
            <h3>{EXAMPLES[tabContent].title}</h3>
            <p>{EXAMPLES[tabContent].description}</p>
            <pre>
              <code>{EXAMPLES[tabContent].code}</code>
            </pre>
          </div>: <p>Please Select a Topic.</p>} */}
    </Section>
  );
}

export default Examples
