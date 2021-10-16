import React from "react";
import "./App.css";

const Customer = ({ id, firstName, lastName, phone, email, search }) => {
  if (!id) return <div />;
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h4>{firstName}</h4>
          </td>
          <td>
            <h4>{lastName}</h4>
          </td>
          <td>
            <h5>{phone}</h5>
          </td>
          <td>
            <p>{email}</p>
          </td>
          
       </tr>
      </tbody>
    </table>
  );
};

class Customers extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
     return (
        <>
            <div className="customer-container">
            {this.props.customers.map((data, key) => {
                return(
                    <div key={key}>
                        <Customer
                            key={key}
                            id={data.id}
                            firstName={data.firstName}
                            lastName={data.lastName}
                            phone={data.phone}
                            email={data.email}
                            search={data.search}
                            budget={data.search.budget}
                            rooms={data.search.rooms}
                            surface={data.search.surface}
                        />
                    </div>
                );
            })}
           </div>
        </>
    ); 
  }
}
export default Customers