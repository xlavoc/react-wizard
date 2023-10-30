import React from 'react';
import { Box, Button, Dialog, DialogTitle, IconButton, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors'
import { alpha } from '@mui/material/styles';
import { IconClose } from '../../../components/vectors';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  minHeight?: string;
  upperSectionHeightPercent?: number;
};

export const Wizard: React.FC<Props> = (props) => {

  const minHeight = props.minHeight || '31rem';
  const upperSectionHeightPercent = props.upperSectionHeightPercent || 0.7;

  return (
    <Dialog
      open={props.isOpen}
      onClose={props.onClose}
      fullWidth={true}
      maxWidth={'md'}
      sx={{
        '& .MuiBackdrop-root': {
          bgcolor: alpha(grey[400], 0.7)
        },
        '& .MuiDialog-paper': {
          minHeight: minHeight,
        }
      }}
    >
      <DialogTitle sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'flex-start',
          pr: 2,
          pl: 7,
          height: `calc(${upperSectionHeightPercent} * ${minHeight})`,
          backgroundImage: 'radial-gradient(circle at 50% 50%, #FCE4E6 0%, #EDECEE 50%, #E2F3F3 80%, #DCE8EF 100%)'
        }}
      >
        <IconButton onClick={props.onClose} sx={{
          '&:hover > svg': {
            fill: (theme) => theme.palette.primary.main
          } 
        }}>
          <IconClose />
        </IconButton>
        <Stack sx={{
            height: '100%',
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Typography variant="h4">Hello!</Typography>
          <Typography variant="h6" sx={{ fontWeight: 700, textAlign: 'center', mt: 4 }}>
            You are only a few steps away from<br />
            <Box sx={{ display: 'inline-block', px: 1, bgcolor: 'secondary.main' }}>
              increasing your sales profits.
            </Box>
          </Typography>
        </Stack>
      </DialogTitle>
      <Stack
        sx={{
          height: `calc(${1 - upperSectionHeightPercent} * ${minHeight})`,
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'background.default'
        }}
      >
        <Button variant="contained" size="large" disableElevation>
          Get started
        </Button>
      </Stack>
    </Dialog>
  )
};
