import { Layout } from '@/components/layout/layout';

import { Features } from './features';
import { Hero } from './hero';

export const HomeTemplate = () => {
  return (
    <Layout>
      <Hero />
      <Features />
    </Layout>
  );
};
