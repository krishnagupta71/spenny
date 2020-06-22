import React, { Component } from 'react';
import { View, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles'
let constants = require('./constants');
import { moderateScale } from "../../utilities/fontScaling"
import Text from '../../components/spennyText'
let appConfig = require('../../../appConfig');
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import SpennyPicker from '../../components/spennyPicker'
import SpennyGraph from '../../components/spennyGraph'
import { convertUnixTimeToDateString, getIconBySpendingType } from '../../utilities/Utils'
import { connect } from 'react-redux'
import { changeMonth, fetchData } from '../../actions'

const mapStateToProps = state => ({
  selectedMonth: state.selectedMonth,
  apiData: state.apiData
})
const mapDispatchToProps = dispatch => {
  return{
      changeMonth: (index) => { dispatch(changeMonth(index)) },
      fetchData: () => {dispatch(fetchData())}
  }
}

class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    //SAGA dispatch
    // this.props.fetchData();
  }
  /**
   * All Render Methods are here
   */
  renderHeader() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.h2Text}>{constants.HEADER_HEADING}</Text>
        <Image style={styles.logoutImage} source={require('../../../assets/icon_logout.png')} />
      </View>
    )
  }

  renderCardBalance() {
    let cardBalanceString = "$" + this.props.apiData.cardBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return (
      <View style={styles.cardBalanceContainer}>

        <View style={[styles.cardBalanceInnerContainer], { alignItems: 'flex-start' }}>

    <Text style={[styles.smallTextHeavy, { marginBottom: moderateScale(5) }]}>{constants.CARD_BALANCE}</Text>
          <Text style={styles.h1Text}>{cardBalanceString}</Text>

        </View>

        <View style={[styles.cardBalanceInnerContainer], { alignItems: 'flex-end' }}>

          <View style={styles.maxMinContainer}>

            <View style={styles.arrowUpImage}>
              <FontAwesome name="arrow-up" size={moderateScale(12)} color="#1bc773" />
            </View>
            <Text style={styles.smallTextGreen}>$3,214</Text>

          </View>

          <View style={styles.maxMinContainer}>

            <View style={styles.arrowDownImage}>
              <FontAwesome name="arrow-down" size={moderateScale(12)} color="#f24750" />
            </View>
            <Text style={styles.smallTextRed}>$1,168</Text>
          </View>

        </View>

      </View>
    )
  }

  renderTimePeriod() {
    return (
      <View style={styles.timePeriodContainer}>

        <View style={styles.spennyPickerContainer}>
          {/* Right Now this just return a static view but in future this can be replaced with a picker customized for sppeny which can be reused} */}
          <SpennyPicker />
        </View>

        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={this.props.apiData.month}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => this.renderTimePeriodItem(item, index)}
          />
        </View>

      </View>
    )
  }

  renderTimePeriodItem(item, index) {
    return (
      <TouchableOpacity id={index} style={[styles.flatListItem, { backgroundColor: index == this.props.selectedMonth ? '#dfe7f5' : null }]} onPress={() => { this.props.changeMonth(index) }}>
        <Text style={[styles.smallTextMedium, { color: index == this.props.selectedMonth ? appConfig.BLUE_TEXT_COLOR : appConfig.LIGHT_GRAY_TEXT_COLOR }]}>{item}</Text>
      </TouchableOpacity>
    )
  }

  renderGraph() {
    return (
      <View style={{ height: moderateScale(300), alignItems: 'center', justifyContent: 'center' }}>
        <SpennyGraph />
      </View>
    )
  }

  renderSpendingBreakdown() {
    return (
      <View style={styles.spendingBreakdownContainer}>
        <Text style={[styles.h2Text, { alignSelf: "flex-start" }]}>{constants.SPENDING_TEXT}</Text>
        {this.props.apiData.spending.map(this.renderSpendingBreakdownItem)}
      </View>
    )
  }

  renderSpendingBreakdownItem(item, index) {
    let iconString = getIconBySpendingType(Object.keys(item)[0])
    let amount = "- $" + item[Object.keys(item)[0]]
    let category = Object.keys(item)[0]
    let timeString = convertUnixTimeToDateString(item[Object.keys(item)[1]])
    return (
      <View key={index} elevation={2} style={[styles.spendingBreakdownItemContainer, styles.boxWithShadow]}>

        <View style={styles.spendingBreakdownIconContainer}>
          <MaterialIcons name={iconString} size={18} color="white" />
        </View>

        <View style={styles.spendingBreakdownTextContainer}>
          <Text style={styles.spendingHeadingText}>{category}</Text>
          <Text style={styles.spendingDateText}>{timeString}</Text>
        </View>

        <Text style={styles.spendingAmountText}>{amount}</Text>
      </View>
    )
  }

  renderTabBar() {
    return (
      <View style={[styles.tabBarContainer, styles.boxWithShadow]}>

        <View style={styles.tabBarItemsContainer}>
          <Image style={styles.tabBarItemImage} source={require('../../../assets/home.png')} />
          <Text style={styles.tabIconText}>{constants.HOME_TAB}</Text>
        </View>

        <View style={styles.tabBarItemsContainer}>
          <Image style={styles.tabBarItemImage} source={require('../../../assets/expenses_chart.png')} />
    <Text style={[styles.tabIconText, { color: appConfig.BLUE_TEXT_COLOR }]}>{constants.EXPENSES_TAB}</Text>
        </View>

        <View style={styles.tabBarAddButtonContainer}>
          <Image style={styles.tabBarCenterPlusIcon} source={require('../../../assets/plus.png')} />
        </View>

        <View style={styles.tabBarItemsContainer}>
          <Image style={styles.tabBarItemImage} source={require('../../../assets/piggy_bank.png')} />
          <Text style={styles.tabIconText}>{constants.WALLET_TAB}</Text>
        </View>

        <View style={styles.tabBarItemsContainer}>
          <Image style={styles.tabBarItemImage} source={require('../../../assets/profile.png')} />
          <Text style={styles.tabIconText}>{constants.PROFILE_TAB}</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false} style={styles.scrollViewContainer} contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}>
          <View style={{ backgroundColor: appConfig.BG_WHITE_COLOR }}>
            {/* Placed the head in a seprate view to maintain its styling when fixing the header during scroll */}
            {this.renderHeader()}
          </View>
          {this.renderCardBalance()}
          {this.renderTimePeriod()}
          {this.renderGraph()}
          {this.renderSpendingBreakdown()}
        </ScrollView>
        {this.renderTabBar()}
      </View>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
