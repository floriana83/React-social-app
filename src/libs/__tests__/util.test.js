
//la prima cosa da fare è importare il codice da testare

import {greetings} from './../util';

//ci da un indea di cosa sta combinando il test

//questo è un descrittore del test e corrisponde quasi ad un linguaggio umano
it('test greetings() function', () => {
    const result = greetings('Floriana'); //questa result conterrà il risultato del saluto Floriana
    expect(result).toBe('Hello dear Floriana'); // la funzione expect passa il valore che voglio testare e toBe il valore che vorrei avere
});
//toBe testare valori semplici e toEqual per testare valori complessi

it("test greetings() function without passing a parameter", () => {
    const result = greetings();
    expect(result).toBe("Hello dear User");
});

it("testing an array", () => {
    const arr = [1, 2, 3];
    expect(arr).toEqual([1, 2, 3]);
});