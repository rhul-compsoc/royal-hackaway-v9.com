import { BigBlink } from '../ui/blink';
import { Sponsor } from '../ui/sponsor';
import { H2, H3, H4 } from '../ui/title';

import keyboardCoLogo from '@/public/sponsors/keyboard-co-logo.png';

export const Sponsors = (): JSX.Element => {
  return (
    <div className="mb-10" id="sponsors">
      <H2 text="Meet our Sponsors!" />
      <div className="w-full">
        <div className="mx-auto w-fit mb-16 mt-8">
          <BigBlink text="Want to sponsor us?" href="mailto:computing@royalholloway.su" target="_blank" />
        </div>
      </div>
      <div>
        <div>
          <H3 text="Platinum"></H3>
          <H4 text="Nothing yet, could you be the first?"></H4>
        </div>

        <div className="flex flex-col items-center text-center">
          <H3 text="Gold"></H3>
          <H4 text="Nothing yet, could you be the first?"></H4>
        </div>

        <div className="flex flex-col items-center text-center">
          <H3 text="Silver"></H3>
          <H4 text="Nothing yet, could you be the first?"></H4>
        </div>

        <div className="flex flex-col items-center text-center">
          <H3 text="Bronze"></H3>
          <H4 text="Nothing yet, could you be the first?"></H4>
        </div>

        <div className="flex flex-col items-center text-center">
          <H3 text="Supporter"></H3>
          <div>
            <Sponsor
              name="Keyboard Company"
              img={keyboardCoLogo}
              alt="Keyboard Co Logo"
              href="https://www.keyboardco.com/"
            />
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <H3 text="Partner"></H3>
          <H4 text="Nothing yet, could you be the first?"></H4>
        </div>
      </div>
    </div>
  );
};
