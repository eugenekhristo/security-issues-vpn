// {
//   "email": "test@mail.com",
//   "planId": "price_1OAuA2BDD4xBLeqjqZy2B6IR"
// }

const POST_URL = 'https://api.guruvpn.com/payments/new';

async function postPlan(email, planId, dispatch) {
  const data = {
    email,
    planId,
  };

  try {
    dispatch({ type: 'plans/post' });

    const response = await fetch(POST_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      dispatch({ type: 'plans/postError' });
    }

    const result = await response.json();

    const paymentURL = result.paymentURL;

    window.location.href = paymentURL;
  } catch (error) {
    dispatch({ type: 'plans/postError' });
    console.error('There was an error:', error);
  }
}

export { postPlan };
