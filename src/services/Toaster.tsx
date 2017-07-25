import { Intent, Toaster as ToasterFactory } from '@blueprintjs/core';

const toaster = ToasterFactory.create();

function error(err: string | Error) {
  let message;

  if (err instanceof Error) {
    message = err.message || 'Something went wrong';
  } else {
    message = err;
  }

  toaster.show({
    intent: Intent.DANGER,
    iconName: 'warning-sign',
    message: `An error occurred: ${message}. Please click reload or refresh your browser to try again.`,
    timeout: 0,
    action: {
      text: 'Reload',
      onClick: () => document.location.reload()
    }
  });
}

export default {
  error
};
