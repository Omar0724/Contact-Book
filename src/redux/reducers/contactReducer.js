const initialState = [
  { id: 0, name: "Raman Sharma", city: "Agadir", phone: 1234567890 },
  { id: 1, name: "Omar", city: "Tanger", phone: 4567891230 },
  { id: 2, name: "Salmane", city: "Rabat", phone: 6818878397 },
  { id: 3, name: "Zakaria", city: "CasaBlanca", phone: 6502563436 },
  { id: 4, name: "Test", city: "Safi", phone: 6648740729 },
  { id: 5, name: "Ragheb Ata", city: "Oujda", phone: 6992019325 }
];

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "DELETE_CONTACT":
      const contactFilter = state.filter((contact) =>
        contact.id === action.payload ? null : contact
      );
      state = contactFilter;
      return state;
    case "RESET_CONTACT":
      state = [{ name: null, city: null, phone: null }];
      return state;
    default:
      return state;
  }
};
