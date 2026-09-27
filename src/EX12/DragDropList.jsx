import React from "react";
import { useState } from "react";

export default function DragDropList() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4"]);
  const [draggingItem, setDraggingItem] = useState(null);
  const handleDrop = (target) => {
    if (draggingItem === null || draggingItem === target) return;
    setItems((old) => {
      const updated = [...old];
      const [moved] = updated.splice(draggingItem, 1);
      updated.splice(target, 0, moved);
      return updated;
    });
    setDraggingItem(null);
  };
  return <section className="exercise"><h2>7. Drag and Drop List</h2>{items.map((item, index) => <div key={item} className="drag-item" draggable onDragStart={() => setDraggingItem(index)} onDragOver={(e) => e.preventDefault()} onDrop={() => handleDrop(index)} onDragEnd={() => setDraggingItem(null)}>{item}</div>)}</section>;
}
