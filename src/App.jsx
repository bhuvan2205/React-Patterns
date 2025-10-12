import LargeListAuthor from "./components/authors/LargeList";
import SmallListAuthor from "./components/authors/SmallList";
import LargeListBook from "./components/books/LargeList";
import SmallListBook from "./components/books/SmallList";
import NumberedList from "./components/lists/NumberedList";
import RegularList from "./components/lists/RegularList";
import { authors } from "./data/authors";
import { books } from "./data/books";

function App() {
  return (
    <main className="container mx-auto">
      <RegularList
        data={authors}
        sourceName="author"
        ItemComponent={SmallListAuthor}
      />

      <NumberedList
        data={authors}
        sourceName="author"
        ItemComponent={LargeListAuthor}
      />

      <RegularList
        data={books}
        sourceName="book"
        ItemComponent={SmallListBook}
      />

      <RegularList
        data={authors}
        sourceName="author"
        ItemComponent={LargeListAuthor}
      />

      <RegularList
        data={books}
        sourceName="book"
        ItemComponent={LargeListBook}
      />
    </main>
  );
}

export default App;
