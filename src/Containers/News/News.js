import React from 'react';
import {
  View,
  ActivityIndicator,
  ScrollView,
  FlatList,
  Image,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import Button from '../../components/Button/ButtonComponent';
import { fetchNews, fetchNewsSuccess } from '../../actions/index';
import styles from './News.styles';

class Home extends React.Component {
    static navigationOptions = {
      title: 'Home',
    };

    constructor(props) {
        super(props);
    }

    _renderItem = ({item}) => {
        return (
            <View style={styles.listItem}>
                <View style={styles.listItemLeft}>
                    <Image
                        style={styles.listItemImage}
                        source={{uri: item.thumbnail[0]}}
                    />
                </View>
                <View style={styles.listItemRight}>
                    <Text>{item.title}</Text>
                    <Text>{item.website}</Text>
                </View>
            </View>
        )
    }

    render() {
        const { news, fetchNews, loading } = this.props;
        return(
            <View style={{ flex: 1 }}>
                <Button
                    onPress={ fetchNews }
                    title="Get Data"
                />
                { loading && <ActivityIndicator/> }
                <ScrollView>
                    <FlatList data={ news } renderItem={ this._renderItem } />
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    news: state.news,
    loading: state.loading
});

const mapDispatchToProps = {
    fetchNews
};

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Home);
