import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, Card, Typography } from '@mui/material';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';

interface ScrollBlogDialogProps {
    content?: any[];
    title: string;
    status: boolean;
    setStatus: React.Dispatch<React.SetStateAction<boolean>>;
    sx?: React.CSSProperties;
}

const ScrollBlogDialog = (props: React.PropsWithChildren<ScrollBlogDialogProps>) => {

  const {t} = useTranslation();
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

  const handleClose = () => {
    props.setStatus(false);
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (props.status) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [props.status]);

  return (
    <Dialog
      open={props.status}
      onClose={handleClose}
      scroll={scroll}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">{props.title}</DialogTitle>
      <DialogContent dividers={scroll === 'paper'}>
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={-1}
        >
          {
              props.content?.map((content, index) => <Typography>{t(content)}</Typography>)
          }
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>OK</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ScrollBlogDialog;