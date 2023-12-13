import { render, screen } from '@testing-library/react';

import TematicasLayout from '@/app/tematicas/layout';

describe('TematicasLayout', () => {
  it('should render and children inside main layout', () => {
    const children = <h1>Layout</h1>;

    render(<TematicasLayout>{children}</TematicasLayout>); // ARRANGE

    // ACT
    const header = screen.getByRole('heading', {
      name: 'Layout',
    });

    expect(header).toBeInTheDocument(); // ASSERT
  });
});
