import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Checkbox } from "../component/Checkbox";
import { FaItalic } from "react-icons/fa";

beforeEach(cleanup); // clean dom
jest.mock("../firebase", () => ({
  firebase: {
    firestore: jest.fn(() => ({
      collection: jest.fn(() => ({
        doc: jest.fn(() => ({
          update: jest.fn()
        })),
      })),
    })),
  },
}));

describe('<Checkbox/>', () => {
    describe('Sucess', () => {
        it('renders the task checkbox', () => {
            const {queryByTestId} = render(<Checkbox id='1' taskDesc='finish this series')
            debug()
        })
    })
})