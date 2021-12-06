import { filterTemperament, filterCreated, orderDogs, orderWeight } from "./actions/index.js";

describe("Actions", () => {
  it('Debería retornar una action con las propiedades type "FILTER_TEMPERAMENT" y payload, su valor lo recibe por argumento:', () => {
    expect(filterTemperament("Playful")).toEqual({
      type: "FILTER_TEMPERAMENT",
      payload: "Playful",
    });
  });

  it('Debería retornar una action con las propiedades type "filterCreated" y payload, su valor lo recibe por argumento:', () => {
    expect(filterCreated("eedeb11b-563b-4709-8a56-6778e26dfa7f")).toEqual({
      type: "FILTER_CREATED",
      payload: "eedeb11b-563b-4709-8a56-6778e26dfa7f",
    });
  });

  it('Debería retornar una action con la propiedad type "orderDogs" y el payload, su valor lo recibe por argumento:', () => {
    expect(orderDogs("Terrier")).toEqual({
      type: "ORDER_DOGS",
      payload: "Terrier",
    });
  }); 
  it('Debería retornar una action con la propiedad type "orderWeight" y el payload, su valor lo recibe por argumento:', () => {
    expect(orderWeight("Big")).toEqual({
      type: "ORDER_WEIGHT",
      payload: "Big",
    });
  });
})