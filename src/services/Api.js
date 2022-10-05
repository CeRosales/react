const dataApi = (dataCard) => {
  return fetch('//awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dataCard),
  })
    .then((response) => response.json())
    .then((dataCard) => {
      return dataCard;
    });
};

export default dataApi;
