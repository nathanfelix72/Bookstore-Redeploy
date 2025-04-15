import CategoryFilter from '../components/CategoryFilter';
import Welcome from '../components/Welcome';
import { useState } from 'react';
import BookList from '../components/BookList';
import CartSummary from '../components/CartSummary';
import ThemeToggle from '../components/ThemeToggle';

function BooksPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <CartSummary />
        <ThemeToggle />
      </div>
      <Welcome />
      <div className="row">
        <div className="col-md-3">
          <CategoryFilter
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        </div>
        <div className="col-md-9">
          <BookList selectedCategories={selectedCategories} />
        </div>
      </div>
    </div>
  );
}

export default BooksPage;
