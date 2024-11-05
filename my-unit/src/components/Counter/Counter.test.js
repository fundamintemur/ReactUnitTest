import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react';
import '@testing-library/jest-dom/extend-expect';
import Counter from './index'

describe("Counter Tests", () => {
    let increaseBtn,decreaseBtn,count;
  //bütün testlerden önce
    beforeEach(()=>{
        console.log("Her testten önce çalışacağım.")
      //burda yapma istediğimiz test otomasyonunu yazıyoruz render ediyoruz.
      render(<Counter />);
       increaseBtn = screen.getByText("Increase");
      //buttonu yakaladık biz
       decreaseBtn = screen.getByText("Decrease");
      //buttonu yakaladık biz
       count = screen.getByText("0");
      //içinde 0 yazan elementi bul
      // önce bütün değerleri dolduruyoruz burda daha sonra testleri çalıştırıyoruz.
    });
    beforeAll(()=>{
    console.log("ilk başta bir kere çalışacağım.")

    });
    afterEach(()=>{
        console.log("her testen sonra çalışacağım")
    })
    afterAll(()=>{
        console.log("En son bir kere çalışacağım")
    })
    test("increase btn", () => {
        //burda yapma istediğimiz test otomasyonunu yazıyoruz.
        userEvent.click(increaseBtn);
        //bu yazdığımız kütüphaneden tıklatmayı sağladık.
        //daha sonra butona bastım ne olmasını bekliyorsun.
        expect(count).toHaveTextContent("1");

    });

    test("decrease btn", () => {
         userEvent.click(decreaseBtn);
        //bu yazdığımız kütüphaneden tıklatmayı sağladık.
        //daha sonra butona bastım ne olmasını bekliyorsun.
        expect(count).toHaveTextContent("-1");

    })

})


