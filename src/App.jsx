import React from 'react';
import './theme.less';

export const PageTheme =
  ({ theme } = {}) =>
  WrappedComponent => {
    return class PageNormal extends React.Component {
      render() {
        return (
          <div className={['theme', theme].join(' ')}>
            <WrappedComponent
              {...this.props}
              isDeep={theme === 'deep'}
            ></WrappedComponent>
          </div>
        );
      }
    };
  };

@PageTheme({ theme: 'deep' })
export default class App extends React.Component {
  render() {
    return <h1>This is App - {this.props.isDeep.toString()}</h1>;
  }
}
