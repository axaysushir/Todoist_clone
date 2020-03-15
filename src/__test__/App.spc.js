import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { App } from "../App";


beforeEach(cleanup)
describe('<App/>', () => {
  it('renders the app', () => {
      const {queryByTestId} = render(<App/>)
      expectExport(queryByTestId('application')).toBeTruthy()
  })  
  it('renders the app', () => {
    const {queryByTestId} = render(<App darkmodeDefault/>)
    expectExport(queryByTestId('application')).toBeTruthy()
})  
})