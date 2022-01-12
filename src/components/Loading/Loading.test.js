import { render, screen } from '@testing-library/react';
import Loading from './index.jsx';

test('renders and checks the <Loading/> component', () => {
  render(<Loading />);
  const msg = screen.getByText(`Loading...`);
  expect(msg).toBeInTheDocument();
});

test('checks markup in <Loading/> component', () => {
    
    const {container} = render(<Loading />);
   
    const div = container.querySelector("div");
   

    expect(div).toBeTruthy();
   
  });