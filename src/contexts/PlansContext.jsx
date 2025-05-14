import { createContext, useContext, useEffect, useReducer } from 'react';

const PlansContext = createContext();

const initialState = {
  plans: [],
};

function reducer(state, { type, payload }) {
  switch (type) {
    case 'plans/loaded':
      return { ...state, plans: payload };
  }
}

function PlansProvider({ children }) {
  const [{ plans }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchPlans() {
      const res = await fetch('https://api.guruvpn.com/payments/plans');
      const { plans } = await res.json();

      dispatch({ type: 'plans/loaded', payload: [plans[2], plans[1]] });
    }

    fetchPlans();
  }, []);

  return (
    <PlansContext.Provider value={plans}>{children}</PlansContext.Provider>
  );
}

function usePlans() {
  const value = useContext(PlansContext);

  if (value === undefined) {
    throw new Error(
      'PlansContext cannot be accessed outside of the CitiesProvider'
    );
  }

  return value;
}

export { PlansProvider, usePlans };
