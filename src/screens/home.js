import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {setAllInfo} from '../store/actions';
import TabBar from '../container/tabBar/index';
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const infos = {
      user_id: '3402033689',
      user_level: 4,
      user_name: 'abc',
      user_account: 'andrewli',
    };
    this.getInfo(infos);
  }
  getInfo() {
    const {fetchUserInfo} = this.props;
    const infos = {
      user_id: '3402033689',
      user_level: 4,
      user_name: 'abc',
      user_account: 'andrewli',
    };
    fetchUserInfo(infos);
  }
  static navigationOptions = {
    headerTitle: '首页',
    headerRight: () => (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  };

  render() {
    const {userInfo = {}} = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TabBar />
        <Text>Home Screen</Text>
        <Text>{userInfo.user_account}</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details', {id: 88})}
        />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  userInfo: state.getAllInfo,
});

const mapDispatchToProps = dispatch => ({
  fetchUserInfo: params => {
    return dispatch(setAllInfo(params));
  },
});
// export default Header;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
