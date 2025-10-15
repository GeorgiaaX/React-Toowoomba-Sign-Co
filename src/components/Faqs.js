// FaqAccordionBs4.jsx
import React, { useMemo, useRef } from "react";

export default function FaqAccordionBs4({
  items = [],
  id,
  alwaysOpen = false,
  defaultOpenIndex,
  className = "",
}) {
  const idRef = useRef(id || `accordion-${Math.random().toString(36).slice(2, 8)}`);
  const accordionId = idRef.current;

  const openSet = useMemo(() => {
    if (defaultOpenIndex === undefined) return new Set();
    return new Set(Array.isArray(defaultOpenIndex) ? defaultOpenIndex : [defaultOpenIndex]);
  }, [defaultOpenIndex]);

  return (
    <div id={accordionId} className={`faq-accordion ${className}`} role="tablist">
      {items.map((item, i) => {
        const itemId = item.id || `item-${i}`;
        const headingId = `${accordionId}-heading-${itemId}`;
        const collapseId = `${accordionId}-collapse-${itemId}`;
        const isOpen = openSet.has(i);

        return (
          <div className="card faq-card" key={itemId}>
            <div className="card-header faq-header" id={headingId} role="tab">
              <h5 className="mb-0">
                <button
                  className={`btn btn-link faq-btn w-100${isOpen ? "" : " collapsed"}`}
                  type="button"
                  data-toggle="collapse"
                  data-target={`#${collapseId}`}
                  aria-expanded={isOpen ? "true" : "false"}
                  aria-controls={collapseId}
                >
                  <span className="faq-question">
                    {item.question}
                  </span>
                  <i className="fa-solid fa-chevron-down faq-chevron" aria-hidden="true"></i>
                </button>
              </h5>
            </div>

            <div
              id={collapseId}
              className={`collapse${isOpen ? " show" : ""}`}
              role="tabpanel"
              aria-labelledby={headingId}
              {...(!alwaysOpen && { "data-parent": `#${accordionId}` })}
            >
              <div className="card-body faq-body">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
