import * as moment from 'moment-timezone';
import * as React from 'react';

interface TimeProps {
  value: Date;
  timezone?: string;
  format?: string;
  relative?: boolean;
}

class Time extends React.Component<TimeProps> {

  render() {
    const { relative, format, timezone } = this.props;

    let value = moment(this.props.value);
    if (timezone) {
      value = value.tz(timezone);
    }

    let text;
    if (relative) {
      text = value.fromNow();
    } else if (format) {
      text = value.format(format);
    } else {
      text = value.calendar();
    }

    const props = {
      dateTime: value.toISOString(),
      title: value.format('dddd, MMMM Do YYYY, h:mm:ss a')
    };

    return (
      <time className='time' {...props}>
        {text}
      </time>
    );
  }

}

export default Time;
