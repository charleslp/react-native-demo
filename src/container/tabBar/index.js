import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {NavigationActions, withNavigation} from 'react-navigation';

class TabBar extends React.Component {
  static navigationOptions = ({navigation}) => {
    header: null;
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log('程序开始了');
  }
  clickTab() {
    // const {navigation} = this.props;
    console.log(this.props, '===navigation');
    // this.props.navigation.navigate('Details');
    this.props.navigation.navigate('Movies');
    // NavigationActions.navigate({routeName: 'Movies'});
  }
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.textBox}
          // onPress={() => this.props.navigation.navigate('Movies')}>
          onPress={this.clickTab.bind(this)}>
          首页
        </Text>

        <Text
          style={styles.textBox}
          onPress={() =>
            this.props.navigation.navigate('Details', {id: '哈哈哈'})
          }>
          发布订单
        </Text>
        <Text
          style={styles.textBox}
          onPress={() => this.props.navigation.push('Home')}>
          订单列表
        </Text>
      </View>
    );
  }
}

export default withNavigation(TabBar);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'orange',
    position: 'absolute',
    width: 500,
    height: 80,
    left: '50%',
    marginLeft: -250,
    bottom: 30,
  },
  textBox: {
    flex: 1,
    width: 160,
    height: 60,
    textAlign: 'center',
    lineHeight: 60,
    color: 'red',
    fontSize: 20,
    backgroundColor: 'yellow',
  },
});
