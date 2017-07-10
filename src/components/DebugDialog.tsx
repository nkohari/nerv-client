import * as React from 'react';
import { Button, Dialog, Intent } from '@blueprintjs/core';
import { AuthContext } from 'src/data';

interface DebugDialogProps {
  auth: AuthContext;
  isOpen: boolean;
  onDialogClosed: (event) => void;
}

class DebugDialog extends React.Component<DebugDialogProps> {

  tokenElement: HTMLInputElement;

  onTokenFocused = event => {
    event.target.select();
  }

  render() {
    const { isOpen, auth } = this.props;
    return (
      <Dialog title='Debug' iconName='wrench' className='pt-dark' isOpen={isOpen} onClose={this.props.onDialogClosed}>
        <div className='pt-dialog-body'>
          <label className='pt-label'>
            Auth Token
            <input readOnly type='text' className='pt-input' value={auth.token} onFocus={this.onTokenFocused} />
          </label>
        </div>
        <div className='pt-dialog-footer'>
          <div className='pt-dialog-footer-actions'>
            <Button intent={Intent.PRIMARY} onClick={this.props.onDialogClosed}>Close</Button>
          </div>
        </div>
      </Dialog>
    );
  }

}

export default DebugDialog;
