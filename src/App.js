import './App.css';
import { Customers } from "./Customers";
import { Dropdown } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';

function handlePriceChange() {
  console.log('prix');
}

function handleRoomChange() {
  console.log('room');
}
function handleSurfaceChange() {
  console.log('srface');
}



function App() {
  return (
    <div className="App">
      
      <Dropdown
        baseClassName="rdn"
        className="priceCombo"
        menu="div"
        onChange={handlePriceChange}
        onClose={handlePriceChange}
        onOpen={handlePriceChange}
        options={[
          {
            label: 'moins de 50K€',
            value: 1
          },
          {
            label: 'De 50 à 100K€',
            value: 2
          },
          {
            label: 'De 100 à 150K€',
            value: 3
          }

        ]}
      />

<Dropdown
        baseClassName="rdn"
        className="roomCombo"
        menu="div"
        onChange={handleRoomChange}
        onClose={handleRoomChange}
        onOpen={handleRoomChange}
        options={[
          {
            label: 'Studio',
            value: 1
          },
          {
            label: '2 pièces',
            value: 2
          },
          {
            label: '3 pièces',
            value: 3
          },
          {
            label: '4 pièces',
            value: 4
          },
          {
            label: '5 pièces et +',
            value:5
          }
        ]}
      />
<Dropdown
        baseClassName="rdn"
        className="areaCombo"
        menu="div"
        onChange={handleSurfaceChange}
        onClose={handleSurfaceChange}
        onOpen={handleSurfaceChange}
        options={[
          {
            label: 'moins de 20 m2',
            value: 1
          },
          {
            label: 'de 20 à 30m2',
            value: 2
          },
          {
            label: 'de 30 à 40m2',
            value: 3
          },
          {
            label: 'de 40 à 60m2',
            value: 4
          },
          {
            label :'de 60m2 à 100m2',
            value:5
          },
          {
            label: '+ de 100m2',
            value: 6
          }
        ]}
      />

      <Customers />
   </div>
  )
}

export default App;
