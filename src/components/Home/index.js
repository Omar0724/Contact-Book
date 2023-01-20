import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Home = ({ contacts, deleteContact, searchContact }) => {
  const [search,setsearch] = useState('');
  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <Link to="/add" className="btn btn-outline-primary my-5 ml-auto ">
          Add Contact
        </Link>
        <form className="row">
          <div className="col">
            <div className="mb-2">
              <input type="text" className="form-control" placeholder="search city" onChange={(e)=>setsearch(e.target.value.toLowerCase())} value={search} />
            </div>
          </div>
          <div className="col">
            <div className="mb-2">
             
            </div>
          </div>
        </form>
        <div className="col-md-10 mx-auto my-4">
          <table className="table table-hover">
            <thead className="table-header bg-primary text-white">
              <tr>
              
                <th scope="col">Name</th>
                <th scope="col">city</th>
                <th scope="col">Phone</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 ? (
                contacts.sort((function (a, b) {
                  if (a.name < b.name) {
                    return -1;
                  } else {
                    return 1;
                  };
                 })).filter((e)=>e.city.toLowerCase().includes(search)).map((contact, id) => (
                  <tr key={id}>
                    <td>{contact.name}</td>
                    <td>{contact.city}</td>
                    <td>{contact.phone}</td>
                    <td>
                      
                      <button
                        type="button"
                        onClick={() => deleteContact(contact.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No contacts found</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});





const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
