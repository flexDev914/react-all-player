import * as React from 'react';
import { SVGProps, memo } from 'react';

const QualityIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="iconify iconify--ic"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    style={{ width: '100%', height: '100%' }}
    {...props}
  >
    <path
      fill="currentColor"
      d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V6h14v12zM7.5 13h2v2H11V9H9.5v2.5h-2V9H6v6h1.5zm6.5 2h.75v1.5h1.5V15H17c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.5-4.5h2v3h-2v-3z"
    />
  </svg>
);

export default memo(QualityIcon);
