import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Fonts } from 'App/Theme'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { RFValue as fSize } from 'react-native-responsive-fontsize'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
  },
  walletTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(1.5),
    marginBottom: hp(1.5),
    marginLeft: wp(8),
    marginRight: wp(5),
  },
  walletTitleImageContainer: {
    justifyContent: 'center',
  },
  dotIconSize: {
    height: hp(0.8),
    width: wp(1.8),
  },
  imageStyle: {
    width: wp(9),
    height: hp(4.5),
  },
  textLowerCase: {
    textTransform: 'lowercase',
  },
  bankAccountTextStyle: {
    color: Colors.steelBlue,
    fontFamily: Fonts.family.GothamRoundedMedium,
    fontSize: fSize(16),
    textAlignVertical: 'center',
    marginLeft: wp(1),
    marginRight: wp(1),
    marginTop: wp(0.6),
  },
  textMargin: {
    marginTop: hp(2),
  },
  centerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderSendStyle: {
    borderWidth: 3,
    height: hp(5),
    borderRadius: hp(2.5),
  },
  containerView: {
    width: wp(80),
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: hp(3),
    alignItems: 'center',
  },
  rowStyle: {
    flexDirection: 'row',
  },
  smallTextStyle: {
    color: Colors.suvaGrey,
    fontFamily: Fonts.family.GothamRoundedBook,
    fontSize: fSize(14),
    textAlign: 'center',
  },
  sendTextStyle: {
    color: Colors.darkBlue,
    paddingRight: wp(4),
    paddingLeft: wp(4),
    paddingTop: hp(0.5),
    paddingBottom: hp(0.5),
  },
  walletTitleText: {
    fontFamily: Fonts.family.GothamRoundedMedium,
    color: Colors.suvaGrey,
    fontSize: fSize(15),
    textAlignVertical: 'center',
    marginLeft: wp(1),
    marginTop: hp(0.6),
    marginRight: wp(1),
  },
  lineStyle: {
    height: hp(0.2),
    width: wp(78),
  },
  arrowContainerStyle: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(3),
    width: wp(65),
  },
  arrowStyle: {
    width: wp(10),
    height: hp(10),
  },
  arrowContainer: {
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    width: '100%',
  },
  progressStyle: {
    borderWidth: wp(0.6),
    width: wp(5),
    shadowColor: Colors.LightGrayishBlue,
    color: Colors.white,
  },
  progressViewStyle: {
    marginLeft: wp(2),
  },
  percentTextStyle: {
    fontSize: fSize(10),
    color: Colors.suvaGrey,
    fontFamily: Fonts.family.GothamRoundedBook,
  },
  circleStyle: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(10) / 2,
    alignItems: 'center',
    marginLeft: wp(1),
    justifyContent: 'center',
    backgroundColor: Colors.whisperColor,
  },
  acronymTextStyle: {
    color: Colors.suvaGrey,
    textAlign: 'center',
    fontFamily: Fonts.family.GothamRoundedMedium,
  },
  // amount enter screen
  amountContainerMargin: {
    marginTop: hp(3),
  },
  inputTextStyle: {
    width: wp(74.6),
    marginTop: wp(3),
    height: hp(4.43),
    fontFamily: Fonts.family.GothamRoundedMedium,
    borderRadius: wp(2.66),
    backgroundColor: Colors.white,
    color: Colors.suvaGrey,
    fontSize: fSize(Fonts.size.extraSmall),
    paddingLeft: wp(2.13),
    shadowColor: Colors.suvaGrey,
    shadowOffset: {
      width: 0,
      height: hp(0.25),
    },
    shadowOpacity: 0.2,
    elevation: 1,
    shadowRadius: hp(0.5),
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  amountContainer: {
    width: wp(80),
    height: hp(22),
    backgroundColor: Colors.ghostWhite,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(2),
  },
  amountHeader: {
    fontFamily: Fonts.family.GothamRoundedBook,
    fontSize: fSize(Fonts.size.small),
    color: Colors.suvaGrey,
  },
  amountInputText: {
    flexDirection: 'row',
    height: hp(6),
    justifyContent: 'space-between',
  },
  dollerLogo: {
    flex: 0.1,
    fontFamily: Fonts.family.GothamRoundedBook,
    fontSize: fSize(18),
    color: Colors.suvaGrey,
    marginTop: wp(1),
  },
  amountInput: {
    flex: 0.85,
    marginRight: wp(2),
    textAlign: 'right',
    fontFamily: Fonts.family.GothamRoundedBook,
    fontSize: fSize(18),
    color: Colors.suvaGrey,
  },
  convertedName: {
    flex: 0.25,
    fontFamily: Fonts.family.GothamRoundedBook,
    fontSize: fSize(18),
    color: Colors.white,
  },
  convertedAmount: {
    color: Colors.white,
  },
  usdBalance: {
    fontFamily: Fonts.family.GothamRoundedMedium,
    fontSize: fSize(Fonts.size.small),
    color: Colors.suvaGrey,
    marginTop: wp(2),
  },
  detailContainer: {
    width: wp(85),
    alignItems: 'flex-end',
    height: hp(12),
  },
  horizontalLineStyle: {
    width: wp(0.5),
    height: hp(12),
    marginRight: wp(1.3),
    backgroundColor: Colors.boxBorder,
  },
  circleView: {
    width: wp(3),
    height: wp(3),
    borderRadius: wp(1.5),
    backgroundColor: Colors.boxBorder,
  },
  feeRateContainer: {
    position: 'absolute',
    justifyContent: 'space-around',
    height: hp(12),
  },
  feeRateStyle: {
    flexDirection: 'row-reverse',
  },
  rateText: {
    color: Colors.btcInput,
    fontFamily: Fonts.family.GothamRoundedMedium,
    fontSize: fSize(12),
    marginRight: wp(1),
  },
  guarantyText: {
    color: Colors.lightBlack,
    fontFamily: Fonts.family.GothamRoundedBook,
    fontSize: fSize(12),
    marginRight: wp(1),
  },
  rateCompareText: {
    color: Colors.lightBlack,
    fontFamily: Fonts.family.GothamRoundedMedium,
    fontSize: fSize(12),
    marginRight: wp(1),
  },
  receivedAmountContainer: {
    width: wp(90),
    height: hp(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  receivedAmountView: {
    width: wp(65),
    height: hp(10),
    backgroundColor: Colors.ghostWhite,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(2),
  },
  receivedInputText: {
    width: wp(55),
    marginTop: wp(1.3),
  },
  getTextStyle: {
    fontFamily: Fonts.family.GothamRoundedMedium,
    fontSize: fSize(12),
    color: Colors.suvaGrey,
    marginLeft: wp(5),
    marginRight: wp(3),
  },
  amountWidth: {
    width: wp(55),
  },
})
