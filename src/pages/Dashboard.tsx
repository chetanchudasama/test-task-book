import React, { useState } from "react";
import { DashboardWrapper } from "./Dashboard.styles";
import useRecursion from "../components/hooks/Recursion";
import Book from "../components/book/Book";
import BookData from "../components/data/BookData";

const Dashboard = () => {
  const [bookData, setBookData] = useState(BookData);

  const { insertNode } = useRecursion();

  const handleInsertNode = (sectionId: number, item: string, isSection: boolean) => {
    const finalTree = insertNode(bookData, sectionId, item, isSection);
    setBookData(finalTree);
  };

  return (
    <DashboardWrapper>
      <h1>Introduction</h1>
      <Book handleInsertNode={handleInsertNode} bookData={bookData} />
    </DashboardWrapper>
  );
};

export default Dashboard;
