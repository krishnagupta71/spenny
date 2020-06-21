import React, { Component } from 'react';
import { View, ScrollView, Image, FlatList } from 'react-native';
import styles from './styles'
let constants = require('./constants');
import { moderateScale } from "../../utilities/fontScaling"
import Text from '../../components/spennyText'
let appConfig = require('../../../appConfig');
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import SpennyPicker from '../../components/spennyPicker'
import SpennyGraph from '../../components/spennyGraph'
import { convertUnixTimeToDateString, getIconBySpendingType } from '../../utilities/Utils'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      spending: [
        {
          "Shopping": "279",
          "date": "1592227512050"
        },
        {
          "Bills": "122",
          "date": "1592227512050"
        },
        {
          "Rent": "1600",
          "date": "1592227512050"
        }
      ]
    };
  }


  /**
   * All Render Methods are here
   */
  renderHeader() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.h2Text}>Expenses</Text>
        <Image style={styles.logoutImage} source={require('../../../assets/icon_logout.png')} />
      </View>
    )
  }

  renderCardBalance() {
    return (
      <View style={styles.cardBalanceContainer}>

        <View style={[styles.cardBalanceInnerContainer], { alignItems: 'flex-start' }}>

          <Text style={[styles.smallTextHeavy, { marginBottom: moderateScale(5) }]}>Card Balance</Text>
          <Text style={styles.h1Text}>$6,390</Text>

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
            data={this.state.months}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => this.renderTimePeriodItem(item, index)}
          />
        </View>

      </View>
    )
  }

  renderTimePeriodItem(item, index) {
    return (
      <View id={index} style={[styles.flatListItem, { backgroundColor: index == 0 ? '#dfe7f5' : null }]}>
        <Text style={[styles.smallTextMedium, { color: index == 0 ? appConfig.BLUE_TEXT_COLOR : appConfig.LIGHT_GRAY_TEXT_COLOR }]}>{item}</Text>
      </View>
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
        <Text style={[styles.h2Text, { alignSelf: "flex-start" }]}>Spending Breakdown</Text>
        {this.state.spending.map(this.renderSpendingBreakdownItem)}
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
          <Text style={styles.tabIconText}>Home</Text>
        </View>

        <View style={styles.tabBarItemsContainer}>
          <Image style={styles.tabBarItemImage} source={require('../../../assets/expenses_chart.png')} />
          <Text style={[styles.tabIconText, { color: appConfig.BLUE_TEXT_COLOR }]}>Expenses</Text>
        </View>

        <View style={styles.tabBarAddButtonContainer}>
          <Image style={{ height: moderateScale(60), width: moderateScale(60), borderColor: appConfig.BG_WHITE_COLOR, borderWidth: moderateScale(4), borderRadius: moderateScale(30) }} source={require('../../../assets/plus.png')} />
        </View>

        <View style={styles.tabBarItemsContainer}>
          <Image style={styles.tabBarItemImage} source={require('../../../assets/piggy_bank.png')} />
          <Text style={styles.tabIconText}>Wallet</Text>
        </View>

        <View style={styles.tabBarItemsContainer}>
          <Image style={styles.tabBarItemImage} source={require('../../../assets/profile.png')} />
          <Text style={styles.tabIconText}>Profile</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollViewContainer}
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}>
          {this.renderHeader()}
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

export default HomePage;
