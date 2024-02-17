import { MouseEvent, useState } from "react";
import { BookInfo } from "../hooks/Recursion";

interface BookProps {
  handleInsertNode: (
    sectionId: number,
    item: string,
    isSection: boolean
  ) => void;
  bookData: BookInfo;
}

const Book = ({ handleInsertNode, bookData }: BookProps) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isSection: false,
  });

  const handleNewSection = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    isSection: boolean
  ) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isSection,
    });
  };

  const onAddFolder = (
    e: React.KeyboardEvent<HTMLInputElement> | any
  ): void => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(bookData.id, e.target.value, showInput.isSection);

      setShowInput({ ...showInput, visible: false });
    }
  };

  if (bookData.isSection) {
    return (
      <div style={{ marginTop: 5 }}>
        <div onClick={() => setExpand(!expand)} className="folder">
          <span>{bookData.name}</span>

          <div>
            <button onClick={(e) => handleNewSection(e, true)}>
              New Section +
            </button>
            <button onClick={(e) => handleNewSection(e, false)}>
              New Sub Section +
            </button>
          </div>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <div>
              <input
                type="text"
                autoFocus
                onKeyDown={onAddFolder}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
            </div>
          )}

          {bookData.items.map((exp: any) => {
            return (
              <Book
                handleInsertNode={handleInsertNode}
                key={exp.id}
                bookData={exp}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <span> {bookData.name}</span>;
  }
};

export default Book;
