import { checkPropTypes } from "prop-types";
import { createStore, applyMiddleware } from "redux";
import success from  '../src/reducers';
import { middleWares } from '../src/configureStore';

export const configureStore = (initialState = {}) => {
  const createStoreWithMiddleware = applyMiddleware(...middleWares)(createStore);
  return createStoreWithMiddleware(success, initialState);
};

export default createStore(success);

export const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
