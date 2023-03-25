import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ChatIcon } from './ChatIcon';
import classes from './Discover.module.css';
import { Ellipse13Icon } from './Ellipse13Icon';
import { Ellipse15Icon } from './Ellipse15Icon';
import { Ellipse16Icon } from './Ellipse16Icon';
import { Ellipse17Icon } from './Ellipse17Icon';
import { Ellipse18Icon } from './Ellipse18Icon';
import { Ellipse19Icon } from './Ellipse19Icon';
import { Ellipse20Icon } from './Ellipse20Icon';
import { Ellipse21Icon } from './Ellipse21Icon';
import { Ellipse22Icon } from './Ellipse22Icon';
import { HomeIcon } from './HomeIcon';
import { ProfileIcon } from './ProfileIcon';
import { SearchIcon } from './SearchIcon';
import { StateDefault } from './StateDefault/StateDefault';
import { UploadIcon } from './UploadIcon';
import { UploadIcon2 } from './UploadIcon2';

interface Props {
  className?: string;
}
/* @figmaId 12:72 */
export const Discover: FC<Props> = memo(function Discover(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.tabBar}>
        <div className={classes.background}>
          <div className={classes.background2}></div>
          <div className={classes.home}>
            <HomeIcon className={classes.icon} />
          </div>
          <div className={classes.search}>
            <SearchIcon className={classes.icon2} />
          </div>
          <div className={classes.upload}>
            <UploadIcon className={classes.icon3} />
          </div>
          <div className={classes.chat}>
            <ChatIcon className={classes.icon4} />
          </div>
          <div className={classes.profile}>
            <ProfileIcon className={classes.icon5} />
          </div>
          <div className={classes.upload2}>
            <UploadIcon2 className={classes.icon6} />
          </div>
        </div>
        <div className={classes.shape}></div>
      </div>
      <div className={classes.discover}>Discover</div>
      <div className={classes.ellipse13}>
        <Ellipse13Icon className={classes.icon7} />
      </div>
      <div className={classes.ellipse16}>
        <Ellipse16Icon className={classes.icon8} />
      </div>
      <div className={classes.ellipse17}>
        <Ellipse17Icon className={classes.icon9} />
      </div>
      <div className={classes.ellipse20}>
        <Ellipse20Icon className={classes.icon10} />
      </div>
      <div className={classes.ellipse21}>
        <Ellipse21Icon className={classes.icon11} />
      </div>
      <div className={classes.ellipse22}>
        <Ellipse22Icon className={classes.icon12} />
      </div>
      <div className={classes.ellipse18}>
        <Ellipse18Icon className={classes.icon13} />
      </div>
      <div className={classes.ellipse19}>
        <Ellipse19Icon className={classes.icon14} />
      </div>
      <div className={classes.ellipse15}>
        <Ellipse15Icon className={classes.icon15} />
      </div>
      <div className={classes.careersOfInterest}>Careers of interest</div>
      <div className={classes.machineLEarning}>Machine LEarning</div>
      <div className={classes.softwareDevelopmentEngineerAma}>Software Development Engineer - Amazon</div>
      <div className={classes.softwareDeveloperCCApple}>Software Developer C/C++ - Apple</div>
      <div className={classes.productEngineerTarget}>
        <div className={classes.textBlock}>Product Engineer </div>
        <div className={classes.textBlock2}>- Target</div>
      </div>
      <div className={classes.informationTechnology}>Information Technology</div>
      <div className={classes.companyPositions}>Company Positions</div>
      <div className={classes.exploreRelatedFields}>Explore Related Fields</div>
      <div className={classes.artificalIntelligence}>Artifical Intelligence</div>
      <div className={classes.programDebugger}>Program Debugger</div>
      <div className={classes.softwareEngineeringMachineLEar}>Software Engineering - Machine LEarning</div>
      <div className={classes.cloudSystemSoftware}>Cloud System Software</div>
      <StateDefault />
      <div className={classes.search2}>Search</div>
    </div>
  );
});
