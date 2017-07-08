import { Intent, Toaster as ToasterFactory } from '@blueprintjs/core';

const toaster = ToasterFactory.create();

function error(message: string) {
  toaster.show({
    intent: Intent.DANGER,
    iconName: 'warning-sign',
    message
  });
}

export default {
  error
};
