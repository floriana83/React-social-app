import { render, screen } from '@testing-library/react';
import Footer from './index.jsx';

test('renders and checks the <Footer/> component', () => {
  render(<Footer />);
  const  year= new Date().getFullYear();
  const msg = screen.getByText(`Copyright Edgemony ${year}`);
  expect(msg).toBeInTheDocument();
});

test('checks markup in <Footer/> component', () => {
    
    const {container} = render(<Footer />);
   
    const footer = container.querySelector("footer");
    const p = container.querySelector("footer p");
    const hr = container.querySelector("footer hr");

    expect(footer).toBeTruthy();
    expect(p).toBeTruthy();
    expect(hr).toBeTruthy();
  });