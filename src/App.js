import './App.css';
import ShopItemClass from './ShopItemClass';
import data from './shopItemData.json';

function App() {
  return (
    <div className="container">
      <div className="background-element" />
      <div className="highlight-window">
        <div className='highlight-overlay' />
      </div>
      <div className="window">
        <ShopItemClass item={data} />
      </div>
    </div>
  );
}

export default App;
