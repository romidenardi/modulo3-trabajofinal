import {create} from "zustand";

export const useCartStore = create ((set, get) => ({

  //Estado

  items: [],

  //Métodos

  addProduct: (product) => set ((state) => {

    const exists = state.items.find ((item) => item.id === product.id);

    if (exists) {
      return {
        items: state.items.map ((item) => item.id === product.id ? {...item, quantity: item.quantity + 1} : item,),
      };
    };

    return {
      items: [...state.items, {...product, quantity: 1}],
    };
    
  }),

  deleteProduct: (productId) => set ((state) => ({

    items: state.items.filter ((item) => item.id !== productId),

  })),

  changeQuantity: (productId, quantity) => set ((state) => ({

    items: state.items.map ((item) =>  item.id === productId ? {...item, quantity: quantity} : item,),

  })),

  emptyCart: () => set ({items: []}),

  getItemsTotal: () => {

    const state = get();
      return state.items.reduce((accumulator, item) => accumulator + item.quantity, 0,
    )},

  getPriceTotal: () => {

    const state = get();
      return state.items.reduce((accumulator,item) => accumulator + item.price * item.quantity, 0,
    )},

}));