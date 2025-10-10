import { Card } from '../ui/card';
import { H2 } from '../ui/title';

import joseph from '@/public/joseph.jpg';
import jacob from '@/public/jacob.jpg';
import ole from '@/public/ole.jpg';

export const Committee = () => {
  return (
    <div className="relative flex flex-col min-h-[50%] items-center py-24" id="team">
      <H2 text="Meet the Team!" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-8">
        <Card name="Jacob" position="President" img={jacob} alt="jacob" />
        <Card name="Ole" position="Treasurer" img={ole} alt="ole" />
        <Card name="Joseph" position="Competitions Director" img={joseph} alt="joseph" />
      </div>
    </div>
  );
};
