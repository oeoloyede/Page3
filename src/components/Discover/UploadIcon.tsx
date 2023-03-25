import { memo, SVGProps } from 'react';

const UploadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 72 47' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M36.764 16.9096H35.764V22.9096H29.764V23.9096H35.764V29.9096H36.764V23.9096H42.764V22.9096H36.764V16.9096Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(UploadIcon);
export { Memo as UploadIcon };
