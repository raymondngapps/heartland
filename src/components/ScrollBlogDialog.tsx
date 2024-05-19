import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography, CardMedia } from '@mui/material';
import { useTranslation } from 'gatsby-plugin-react-i18next';

interface ScrollBlogDialogProps {
    content?: any[];
    title: string;
    status: boolean;
    image: any;
    setStatus: React.Dispatch<React.SetStateAction<number>>;
    sx?: React.CSSProperties;
}

const ScrollBlogDialog = (props: React.PropsWithChildren<ScrollBlogDialogProps>) => {

  const {t} = useTranslation();
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

  const handleClose = () => {
    props.setStatus(0);
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
      fullScreen
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
            props.content?.map((content, index) => <Typography sx={{ lineHeight: 2, borderSpacing: 2 }}>{t(content)}</Typography>)
          }
        </DialogContentText>
        <CardMedia
          component="img"
          sx={{ width: 400 }}
          image={props.image}
          alt="Sunset"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>OK</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ScrollBlogDialog;