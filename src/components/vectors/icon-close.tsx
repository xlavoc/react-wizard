import React from 'react';
import { Theme, SvgIcon } from '@mui/material';
import { SxProps } from '@mui/system';

type Props = {
  sx?: SxProps<Theme>
};

export const IconClose: React.FC<Props> = (props) => {
  return (
    <SvgIcon sx={{color: 'text.secondary', ...props.sx}} width="24" height="24" viewBox="0 0 24 24">
      <path d="M2.60871 2.80042C2.99518 2.40588 3.62831 2.39934 4.02285 2.78581L21.3781 19.7861C21.7726 20.1725 21.7792 20.8057 21.3927 21.2002C21.0062 21.5947 20.3731 21.6013 19.9785 21.2148L2.62332 4.21456C2.22878 3.82809 2.22224 3.19496 2.60871 2.80042Z" />
      <path d="M21.392 2.80049C21.7785 3.19504 21.7719 3.82817 21.3774 4.21462L4.02142 21.2142C3.62687 21.6006 2.99374 21.5941 2.60728 21.1995C2.22083 20.805 2.2274 20.1718 2.62195 19.7854L19.9779 2.78582C20.3724 2.39936 21.0056 2.40593 21.392 2.80049Z" />
    </SvgIcon>
  )
};
