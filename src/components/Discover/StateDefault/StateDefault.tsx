import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { SearchIcon } from './SearchIcon';
import classes from './StateDefault.module.css';

interface Props {
  className?: string;
}
/* @figmaId 57:21 */
export const StateDefault: FC<Props> = memo(function StateDefault(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.search}>
        <SearchIcon className={classes.icon} />
      </div>
      <div className={classes.search2}>Search</div>
    </div>
  );
});
