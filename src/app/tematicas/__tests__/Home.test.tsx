import { render, screen } from '@testing-library/react';

import Home from '@/app/tematicas/page';

describe('Home', () => {
  it('should render the "Em breve" heading', () => {
    render(<Home />);

    const header = screen.getByRole('heading', {
      name: 'Em breve',
    });

    expect(header).toBeInTheDocument();
  });
});
