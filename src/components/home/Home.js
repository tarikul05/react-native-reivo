import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Home extends Component {
   state = {
      myState: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
   }
   updateState = () => this.setState({myState:'this is updated message'})
   render() {
      return (
         <View>
            <Text onPress={this.updateState}>
               {this.state.myState}
            </Text>
         </View>
      );
   }
}
export default Home;
