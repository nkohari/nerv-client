import { connect } from 'react-redux';

/**
 * This is just a simple bit of syntactic sugar that allows component
 * classes to define stateToProps() and actionsToProps() as static
 * properties instead of calling them after the class is defined.
 */
const connectUsingStaticProperties = (component) => (
  connect(
    component.stateToProps || (state => state),
    component.actionsToProps || null
  )(component)
);

export default connectUsingStaticProperties;
