import { createRoot } from 'react-dom/client';
import { NavProvider } from './NavProvider';
import { QueryProvider } from './provider/QueryProvider';

import './index.scss';

function main() {
  const container = document.getElementById('root');

  if (container != null) {
    const root = createRoot(container);

    root.render((
      <QueryProvider>
        <NavProvider />
      </QueryProvider>
    ));
  }
}

main();
