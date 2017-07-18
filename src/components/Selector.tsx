import * as React from 'react';
import { Button, Menu, MenuItem, Popover, Position } from '@blueprintjs/core';

interface SelectorProps<T> {
  className?: string;
  fields: { text: string, value: T }[];
  value: T;
  onChange: (name: string) => void;
}

class Selector<T> extends React.Component<SelectorProps<T>> {

  selectValue = value => (
    event => this.props.onChange(value)
  )

  render() {
    const { className, fields, value } = this.props;

    const menu = (
      <Menu>
        {fields.map((field, index) => (
          <MenuItem key={index} text={field.text} onClick={this.selectValue(field.value)} />
        ))}
      </Menu>
    );

    return (
      <Popover content={menu} position={Position.BOTTOM}>
        <Button className={className} rightIconName='caret-down'>
          {fields.find(p => p.value === value).text}
        </Button>
      </Popover>
    );

  }

}

export default Selector;
