import './App.css';
import React from "react";
import { Dropdown } from 'react-dropdown-now';
import { customersData } from "./data";
import 'react-dropdown-now/style.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      customers: customersData
    }
    this.filters = {
      surface : null,
      price : null,
      rooms : null
    }
    this.applySearchFilter();
  }

  
  handleSurfaceChange( value ) {
    console.log('surface');
    console.log(value);
    this.filters.surface = value;
    this.applySearchFilter();
  }
  handlePriceChange( value ) {
    console.log('prix');
    console.log( value );
    this.filters.price = value;
    this.applySearchFilter();
  }

  handleRoomChange(value) {
    console.log('room');
    console.log(value)
    this.filters.rooms = value;
    this.applySearchFilter();
  }
  
   applySearchFilter()
  {
    let result = customersData;
    if( this.filters.rooms != null )
    {
      result = result.filter(data => data.search.rooms === this.filters.rooms);
    }
    if( this.filters.price != null )
    {
      result = result.filter(data => data.search.budget < (this.filters.price-1)*100000 && data.search.budget < this.filters.price*100000);
    }
    if( this.filters.surface != null )
    {
      let increment = 10;
      if ( this.filters.surface >= 50 ) {increment = 50;}
      result = result.filter(data => data.search.surface >= this.filters.surface && data.search.surface < this.filters.surface +increment);
    }
    console.log(result)
    console.log(this.filters);
    this.setState( {
      customers: result
    });
  }
  

  componentDidMount(){
    setTimeout(()=>{
      this.setState({isPopUp: true})
    }, 3000)
  }


  render(){
      return (
    <div className="App">
      
      <Dropdown
        baseClassName="rdn"
        className="priceCombo"
        menu="div"
        onChange={(e)=>{this.handlePriceChange(e.value)}}
        options={[
          {
            label: 'moins de 100K€',
            value: 1
          },
          {
            label: 'De 100 à 200K€',
            value: 2
          },
          {
            label: 'De 200 à 300K€',
            value: 3
          },
          {
            label: 'De 300 à 400K€',
            value: 4
          },
          {
            label: 'De 400 à 500K€',
            value: 5
          },
          {
            label: 'Plus de 500K€',
            value: 6
          }
        ]}
      />

<Dropdown
        baseClassName="rdn"
        className="roomCombo"
        menu="div"
        onChange={(e)=>{this.handleRoomChange(e.value)}}
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
        id="surfaceCombo"
        baseClassName="rdn"
        className="surfaceCombo"
        menu="div"
        onChange={(e)=>{this.handleSurfaceChange(e.value)}}
        options={[
          {
            label: 'moins de 20 m2',
            value: 10
          },
          {
            label: 'de 20 à 30m2',
            value: 20
          },
          {
            label: 'de 30 à 40m2',
            value: 30
          },
          {
            label: 'de 40 à 50m2',
            value: 40
          },
          {
            label :'de 50m2 à 100m2',
            value:50
          },
          {
            label: '+ de 100m2',
            value: 100
          }
        ]}
      />

      <ProductTable products={this.state.customers}/>
   </div>
    )
  }
}



export default App;

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table>
      <caption>Products</caption>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort('lastName')}
              className={getClassNamesFor('lastName')}
            >
              Nom
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('budget')}
              className={getClassNamesFor('budget')}
            >
              Prix
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('surface')}
              className={getClassNamesFor('surface')}
            >
              Surface
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('rooms')}
              className={getClassNamesFor('rooms')}
            >
              Nb rooms
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.firstName + ' ' + item.lastName }</td>
            <td>{item.search.budget} €</td>
            <td>{item.search.surface}</td>
            <td>{item.search.rooms}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};