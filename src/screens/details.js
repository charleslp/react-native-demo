import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';

class DetailsScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      // title: JSON.stringify(
      //   navigation.getParam('id', 'A Nested Details Screen'),
      // ),
      title: '详情页',
      headerStyle: {
        backgroundColor: 'orange',
      },
    };
  };
  componentDidMount() {
    console.log('打印信息--', this.props.navigation);
  }
  render() {
    const {navigation, userInfoStore} = this.props;
    console.log('打印信水电费水电费息--', navigation);
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
        <Text>{userInfoStore.user_name}</Text>
        <Text>ID:{JSON.stringify(navigation.getParam('id'))}</Text>
        {navigation.state.params && (
          <Text>{navigation.state.params.id || 1}</Text>
        )}
        <Button
          title="Go to Movies"
          onPress={() => this.props.navigation.push('Movies')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({id: 'Updated!'})}
        />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  userInfoStore: state.getAllInfo,
});
export default connect(
  mapStateToProps,
  null,
)(DetailsScreen);
