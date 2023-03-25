import { memo, SVGProps } from 'react';

const Ellipse13Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    preserveAspectRatio='none'
    viewBox='0 0 36 38'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}
  >
    <ellipse cx={18} cy={19} rx={18} ry={19} fill='url(#pattern0)' />
    <defs>
      <pattern id='pattern0' patternContentUnits='objectBoundingBox' width={1} height={1}>
        <use xlinkHref='#image0_117_33' transform='matrix(0.00316984 0 0 0.003003 -0.292459 0)' />
      </pattern>
      <image
        id='image0_117_33'
        width={500}
        height={333}
        xlinkHref='data:image/png;base64,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2d3d3d3d3dvb29vbK0/Hf+7t7eWckUyEgJxzmtm+6/t/+IeyH2iPPyV7PCTPPfTID/30T548dYZAVVs6ks3n837mhZ2dnb29vTLh8vjKlSvlKUb3DW3bHj9x6q57P/GTv/ALh9y4/N7sUUkqX/vu7u7elcnHWWDnsd3+s3S9pdS27emzN77jt37zF/7TL7HfV/PYXjtahFvm6PLf3v42S4ltF86XbN62hL/gBc/f3tjstf4gJD3wwAPnL13e3NoqQ+S23drauvOjH7v/gQdvv/WWlTUGnoKsVInku377ty5cvHz69Gnfn8NYZruzQ6K5ugAAGAFJREFU89jzb33e8ePHzWz5uuMjZrbXzu+77775fH822ywvec5b29vv/M3f/Kov/9KUVkdq/t5EGUp60Qtu39zcfCJrSfks9957b5u1MZvRBSDnvLl17Fd//W1f8vo/Vj8LKeS+kWGw9oS4H0VKBOEnzz04axrWerPM7ttbG9/yl//Sq171qkkoy8GcO3fuH3/P977vzg8d29zKYukjurO7+9BDD95+6y39tXAdDN577/skZXJHAgQz29vb+8ov/9Nf9se/uGjiISqsrgTxnR+68x981z979NLllCjRBDM7f+ni5SuPnTl1+mkJJBOQzPb397/hL37tS170aU9oJRFEvO+Dd37H//vdj15+rElJEoGmaR46/+iV3Z2Tx0+Uj2zhlzlKhFvmiNJm7e/vSyr38mZ25cqV133eH3n173914oG/irHeufvNN9/8VV/xpsuXL5+/dPHCpfOXLl26dPGxy5cvu7foIujLyU+5wbu3t0ero5fgwhc+/7av/NI3jpX9IHWueU/uL3/Zy9/4x7/kys4OYKa6R2qy67QgPRH6cEwToOLf96VO3QPllknevvIVL//i17/+ypUrowQrZUfbtt2z3nETHAnCcj+qlOiLkeYSfuLECUglLGT5HQvmcDH/n3vTjX/yDW8QRRIOknvzvZtvvBELVbeuAy4RcNGM7n78+PESvDik+x989TJ5uJ84eaybpySBLNmq45N/L1VeUkNr6yTT419ZAJM8K+PMyVPj75ylaaFqETczPmX5Y8GzgRD3o4ik2n4OMKGkxpus9bysyEPm/fR4OfPsmRu+8ev+wvLJAIoJeb30nU4SMikDJUIGh0fNLy9OnWvepBI0T7nnpSo1v6fZ/OWuAnC6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'
      />
    </defs>
  </svg>
);

const Memo = memo(Ellipse13Icon);
export { Memo as Ellipse13Icon };
