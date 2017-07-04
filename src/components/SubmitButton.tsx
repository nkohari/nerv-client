import * as React from 'react';
import { Button, Intent } from '@blueprintjs/core';

interface SubmitButtonProps {
  submitting: boolean;
  iconName?: string;
}

class SubmitButton extends React.Component<SubmitButtonProps> {

  render() {
    const { submitting } = this.props;
    return (
      <Button
        intent={Intent.SUCCESS}
        {...this.props}
        type='submit'
        disabled={submitting}
        iconName={submitting ? 'refresh' : this.props.iconName}
      >
        {this.props.children}
      </Button>
    );
  }

}

export default SubmitButton;
