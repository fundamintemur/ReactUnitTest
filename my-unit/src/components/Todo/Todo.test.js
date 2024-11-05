import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todo from './index'

describe("Todo testleri", () => {
    let button, input;
    beforeEach(() => {
        render(<Todo />);

        button = screen.getByText("Add")
        //butonu bulduk ahshsaah
        input = screen.getByLabelText("Text")
    });

    test("varsayılan olarak 3 nesne render edilmeli", () => {
        const items = screen.getAllByText(/Item/i);
        expect(items.length).toEqual(3);

    })
    test("input ve button dokümanda bulunmalı", () => {

        expect(button).toBeInTheDocument()
        //button ve input dokümanda var mı diye kontrol ediyorum
        expect(input).toBeInTheDocument()

    })


    test("input girilip butona basılınca listeye eklemeli", () => {
     //inputtu doldur
     const name="Funda";
     userEvent.type(input,name)

    //butona tıkla
    userEvent.click(button)
    //assertion(kontol ediyoruz)
    expect(screen.getByText(name)).toBeInTheDocument();


    })

})