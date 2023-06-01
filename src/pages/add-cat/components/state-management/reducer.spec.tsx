import {it, expect, describe} from "vitest";
import {newCatReducer, csvToArray, defaultState, NewCatAction} from "./reducer"

describe("csvToArray", () => {
  it("should return an array with a valid csv string", () => {
    expect(csvToArray("1,2,3")).toEqual([1, 2, 3])
    expect(csvToArray("1,2,3,")).toEqual([1, 2, 3])

  })
  it('should return empty array if csv is not valid', () => {
    expect(csvToArray("")).toEqual([])
    expect(csvToArray(undefined)).toEqual([])
  })
});

describe("newCatReducer", () => {
  it('should return the initial state', () => {
    const actual = newCatReducer(defaultState, {} as NewCatAction)
    expect(actual).toEqual(defaultState)
  });
  it.each([
    [{fieldName: 'name', value: 'foo'}, {...defaultState, name: 'foo'}],
    [{fieldName: 'description', value: 'bar'}, {...defaultState, description: 'bar'}],
    [{fieldName: 'origin', value: 'baz'}, {...defaultState, origin: 'baz'}],
    [{fieldName: 'affection_level', value: '1'}, {...defaultState, affection_level: 1}],
    [{fieldName: 'child_friendliness', value: '2'}, {...defaultState, child_friendliness: 2}],
    [{fieldName: 'intelligence', value: '3'}, {...defaultState, intelligence: 3}],
    [{fieldName: 'shedding_level', value: '4'}, {...defaultState, shedding_level: 4}],
    [{fieldName: 'adaptability', value: '5'}, {...defaultState, adaptability: 5}],
    [{fieldName: 'hypoallergenic', value: 'on'}, {...defaultState, hypoallergenic: true}],
    [{fieldName: 'hypoallergenic', value: 'off'}, {...defaultState, hypoallergenic: false}],
    [{fieldName: 'indoor', value: 'on'}, {...defaultState, indoor: true}],
    [{fieldName: 'indoor', value: 'off'}, {...defaultState, indoor: false}],
    [{fieldName: 'weight', value: '10,20'}, {...defaultState, weight: [10, 20]}],
    [{fieldName: 'weight', value: '10,20,'}, {...defaultState, weight: [10, 20]}],
    [{fieldName: 'weight', value: ''}, {...defaultState, weight: []}],
    [{fieldName: 'life_span', value: '10,20'}, {...defaultState, life_span: [10, 20]}],
    [{fieldName: 'life_span', value: '10,20,'}, {...defaultState, life_span: [10, 20]}],
    [{fieldName: 'life_span', value: ''}, {...defaultState, life_span: []}],

  ])('should return the state with the new value', (action, expected) => {
    const actual = newCatReducer(defaultState, action as NewCatAction)
    expect(actual).toEqual(expected)
  })
})
