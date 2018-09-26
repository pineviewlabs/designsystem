import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import Modal from '../Modal';

const props = () => ({
  className: 'some-class',
  open: boolean('Open (open)', true),
  passiveModal: boolean('Without footer (passiveModal)', false),
  danger: boolean('Danger mode (danger)', false),
  shouldSubmitOnEnter: boolean(
    'Enter key to submit (shouldSubmitOnEnter)',
    false
  ),
  modalHeading: text('Modal heading (modalHeading)', 'Modal heading'),
  modalLabel: text('Optional label (modalLabel)', 'Label'),
  modalAriaLabel: text('ARIA label (modalAriaLabel)', ''),
  primaryButtonText: text(
    'Primary button text (primaryButtonText)',
    'Primary Button'
  ),
  secondaryButtonText: text(
    'Secondary button text (secondaryButtonText)',
    'Secondary Button'
  ),
  iconDescription: text(
    'Close icon description (iconDescription)',
    'Close the modal'
  ),
  onBlur: action('onBlur'),
  onClick: action('onClick'),
  onFocus: action('onFocus'),
  onRequestClose: action('onRequestClose'),
  onRequestSubmit: action('onRequestSubmit'),
  onSecondarySubmit: action('onSecondarySubmit'),
});

storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    withInfo({
      text: `
        Modals communicate information via a secondary window and allow the user to maintain the context of a particular task.
        Use the Modal Wrapper component to encapsulate your Modal within a button.
      `,
    })(() => (
      <Modal {...props()}>
        <p className="wfp--modal-content__text">
          Please see ModalWrapper for more examples and demo of the
          functionality.
        </p>
      </Modal>
    ))
  );
