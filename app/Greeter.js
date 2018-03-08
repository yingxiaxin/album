import React, {Component} from 'react';
import config from './config.json';
import styles from './Greeter.css'; //导入css

class Greeter extends Component
{
  render() 
  {
    return (
      <div className = {styles.dif}>
        {config.greetText}
      </div>
    );
  }
}

export default Greeter;