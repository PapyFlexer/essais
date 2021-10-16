import React from "react";
import "./App.css";
import { customersData } from "./data";

export const Customers = () => {
    return (
        <>
          <HomePageHeader />
            <div className="customer-container">
            {customersData.map((data, key) => {
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
};
const HomePageHeader = () => {
    return (
      <header className="header">
        <h2>Lister les biens</h2>
      </header>
    );
  };
  
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
              <p>{<a href='mailto:'>{email}</a>}</p>
            </td>
            <td>
              <p>{search.budget}</p>
            </td>
            <td>
              <p>{search.rooms}</p>
            </td>
            <td>
              <p>{search.surface}</p>
            </td>
         </tr>
        </tbody>
      </table>
    );
  };
  