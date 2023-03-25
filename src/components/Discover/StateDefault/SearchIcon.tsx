import { memo, SVGProps } from 'react';

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 42 46' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12.5 18.5C12.5 15.1863 15.1863 12.5 18.5 12.5C21.8137 12.5 24.5 15.1863 24.5 18.5C24.5 19.9769 23.9664 21.3291 23.0815 22.3744L22.8536 22.1464L22.1464 22.8536L22.3744 23.0815C21.3291 23.9664 19.9769 24.5 18.5 24.5C15.1863 24.5 12.5 21.8137 12.5 18.5ZM23.0836 23.7907C21.8556 24.8556 20.253 25.5 18.5 25.5C14.634 25.5 11.5 22.366 11.5 18.5C11.5 14.634 14.634 11.5 18.5 11.5C22.366 11.5 25.5 14.634 25.5 18.5C25.5 20.253 24.8556 21.8556 23.7907 23.0836L27.8536 27.1464L27.1464 27.8536L23.0836 23.7907Z'
      fill='black'
      fillOpacity={0.8}
    />
  </svg>
);

const Memo = memo(SearchIcon);
export { Memo as SearchIcon };
