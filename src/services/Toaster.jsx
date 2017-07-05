import { Intent, Toaster } from '@blueprintjs/core';

const toaster = Toaster.create();

const ToasterFacade = {};

ToasterFacade.error = message => {
  toaster.show({
    intent: Intent.DANGER,
    iconName: 'warning-sign',
    message
  });
};

export default ToasterFacade;
