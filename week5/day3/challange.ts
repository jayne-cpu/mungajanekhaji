// 📚 Interface Book
interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string; // optional
}


// 📚 Class Library
class Library {
  private books: Book[] = [];

  // Add a new book
  public addBook(book: Book): void {
    this.books.push(book);
  }

  // Get book details by ISBN
  public getBookDetails(isbn: string): string {
    const book = this.books.find(b => b.isbn === isbn);

    if (!book) {
      return "Book not found";
    }

    return `Title: ${book.title}, Author: ${book.author}, Year: ${book.publishedYear}, Genre: ${book.genre ?? "N/A"}`;
  }

  // Protected method (used by subclass)
  protected getBooks(): Book[] {
    return this.books;
  }
}


// 📚 Class DigitalLibrary (Inheritance)
class DigitalLibrary extends Library {
  readonly website: string;

  constructor(website: string) {
    super();
    this.website = website;
  }

  // List all book titles
  public listBooks(): string[] {
    return this.getBooks().map(book => book.title);
  }
}


// 🧪 Testing the System

const myLibrary = new DigitalLibrary("www.mylibrary.com");

// Add books
myLibrary.addBook({
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  isbn: "111",
  publishedYear: 1925,
  genre: "Fiction"
});

myLibrary.addBook({
  title: "Clean Code",
  author: "Robert C. Martin",
  isbn: "222",
  publishedYear: 2008
});

// Get book details
console.log(myLibrary.getBookDetails("111"));
console.log(myLibrary.getBookDetails("222"));
console.log(myLibrary.getBookDetails("999")); // not found

// List all books
console.log(myLibrary.listBooks());

// Access readonly property
console.log("Website:", myLibrary.website);