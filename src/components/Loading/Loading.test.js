import { render, screen } from '@testing-library/react';
import Loading from './index.jsx';


test('checks markup in <Loading/> component', () => {
    
    const {container} = render(<Loading />);
   
    const div = container.querySelector("div");
    const h1 = container.querySelector("h1");

    expect(div).toBeTruthy();
    expect(h1).toBeTruthy();
  });