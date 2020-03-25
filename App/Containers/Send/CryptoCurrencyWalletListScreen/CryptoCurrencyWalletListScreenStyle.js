import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Fonts } from 'App/Theme'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { RFValue as fSize } from 'react-native-responsive-fontsize'
import AppStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
  },
  scrollContainer: {
    flex: 1,
    width: wp(100),
  },
  walletTitleText: {
    fontFamily: Fonts.family.GothamRoundedMedium,
    color: Colors.suvaGrey,
    fontSize: fSize(15),
    textAlignVertical: 'center',
    marginRight: wp(2),
  },
  headerTitleContaoner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowIcon: {
    width: wp(3.3),
    height: hp(1.3),
  },
  lineStyle: {
    ...AppStyles.lineStyle,
    marginTop: wp(6),
  },
  headerContainer: {
    marginTop: wp(6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    width: wp(89.6),
    height: hp(5.5),
    alignItems: 'center',
    paddingLeft: wp(2),
    justifyContent: 'center',
  },
  gradientContainer: {
    width: wp(89.6),
    height: hp(5.5),
    marginTop: hp(1.1),
    borderRadius: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientSelectedContainer: {
    width: wp(89.6),
    height: hp(10),
    marginTop: hp(1.1),
    borderRadius: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameText: {
    flex: 0.7,
    marginLeft: wp(1),
  },
  amountText: {
    flex: 0.35,
    marginLeft: wp(1.5),
    textAlign: 'left',
  },
  unselectedItemName: {
    fontFamily: Fonts.family.GothamRoundedMedium,
    fontSize: fSize(12),
  },
  unselectedItemAddress: {
    fontFamily: Fonts.family.GothamRoundedMedium,
    color: Colors.suvaGrey,
    fontSize: fSize(8),
    textTransform: 'uppercase',
  },
  selectedNameText: {
    color: Colors.white,
  },
  currencyContainer: {
    marginTop: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  unselectednameBTC: {
    color: Colors.gradientRed,
  },
  unselectednameETH: {
    color: Colors.etheriumCurrency,
  },
  unselectednameDASH: {
    color: Colors.dashBlue,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(75.7),
    marginTop: wp(4),
    marginLeft: wp(13.8),
  },
  titleStyle: {
    fontFamily: Fonts.family.GothamRoundedMedium,
    color: Colors.suvaGrey,
    fontSize: fSize(10),
  },
  emptyListImageStyle: {
    width: wp(20),
    height: wp(20),
  },
  listContentContainer: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  scrollViewContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  emptyListHolder: {
    width: wp(100),
    height: wp(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
})
