import { createContext, useContext, useEffect, useReducer } from 'react';

const GET_URL = 'https://api.guruvpn.com/payments/plans';

const PlansContext = createContext();

const initialState = {
  plans: [],
  activePlanName: 'week',
  isLoading: false,
  error: false,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case 'plans/loaded':
      return { ...state, plans: payload };
    case 'plans/setActive':
      return { ...state, activePlanName: payload };
    case 'plans/post':
      return { ...state, isLoading: true };
    case 'plans/postSuccess':
      return { ...state, isLoading: false };
    case 'plans/postError':
      return { ...state, isLoading: false, error: true };
    case 'plans/clearError':
      return { ...state, error: false };
  }
}

function PlansProvider({ children }) {
  const [{ plans, activePlanName, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const userSelection = localStorage.getItem('userSelection');
    if (userSelection) {
      const { activePlanName } = JSON.parse(userSelection);
      dispatch({ type: 'plans/setActive', payload: activePlanName });
    } else {
      dispatch({ type: 'plans/setActive', payload: 'week' });
    }

    async function fetchPlans() {
      const res = await fetch(GET_URL);
      const { plans } = await res.json();
      const distilledPlans = plans.reduce((acc, cur) => {
        if (cur.days === 365) return acc;
        return [
          ...acc,
          { ...cur, shortName: cur.days === 30 ? 'month' : 'week' },
        ];
      }, []);

      dispatch({ type: 'plans/loaded', payload: distilledPlans });
    }

    fetchPlans();
  }, []);

  function setActivePlan(activePlanName) {
    dispatch({ type: 'plans/setActive', payload: activePlanName });
  }

  return (
    <PlansContext.Provider
      value={{
        plans,
        activePlanName,
        isLoading,
        setActivePlan,
        error,
        dispatch,
      }}
    >
      {children}
    </PlansContext.Provider>
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
